import TypeMap from '../types/TypeMap';
import MapObject from '../game/MapObject/MapObject';
import TypeMapGround from '../types/TypeMapGround';
import TypeCoordinates from '../types/TypeCoordinates';
import getGroundTextures from '../library/textures/getGroundTextures';

function parser(mapData: {
  size: {
    width: number,
    height: number,
    square: number,
  },
  map: any[],
}): TypeMap {
  const ground = mapData.map;
  const groundData: TypeMapGround[] = [];
  ground.forEach((element, index) => {
    const groundElements = parseGround(element, index);
    if (groundElements.length) {
      groundElements.forEach((el: TypeMapGround) => {
        groundData.push(el);
      });
    }
  });
  const data: TypeMap = {
    size: {
      width: +mapData.size.width || 600,
      height: +mapData.size.height || 600,
      square: +mapData.size.square || 50,
    },
    ground: groundData,
  };
  return data;
}

function parseGround(objects: {
  objectName: string,
  count: string,
  rotation?: number,
}[],
                     y: number): TypeMapGround[] {
  const ret: TypeMapGround[] = [];
  let x = 0;
  objects.forEach((obj) => {
    const count = +obj.count;
    const texture = getGroundTextures(obj.objectName);
    for (let i = 0; i < count; i = i + 1, x = x + 1) {
      const coordinates: TypeCoordinates = [x, y];
      const groundObject: TypeMapGround = {
        coordinates,
        texture,
        rotation: obj.rotation || 0,
      };
      ret.push(groundObject);
    }
  });
  return ret;
}

export default parser;

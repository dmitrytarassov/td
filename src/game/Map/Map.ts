import TypeMap from '../../types/TypeMap';
import parser from '../../maps/parser';
import { map0 } from '../../maps/maps.js';
import getGroundTextures from '../../library/textures/getGroundTextures';

import TypeMapGround from '../../types/TypeMapGround';
import TypeCoordinates from '../../types/TypeCoordinates';
import TypeMapObject from '../../types/TypeMapObject';

type mapsArray = any[];

const MAPS: mapsArray = [
  map0,
];

class Map {
  mapName: string;
  mapData: TypeMap;
  scale: TypeCoordinates = [0, 0];
  constructor(mapName: string) {
    this.mapName = mapName;
    const currentMap = this.getCurrentMap();
    if (currentMap) {
      this.mapData = parser(currentMap);
    }
  }
  getCurrentMap (): any | false {
    return MAPS.find((map) => {
      const { name } = map;
      return name === this.mapName;
    });
  }
  render (renderFunc: Function) {
    const square = +this.mapData.size.square;
    const scaleX: number = this.scale[0];
    const scaleY: number = this.scale[1];
    const noEarthImage = getGroundTextures('EDG4');
    const squareX = +this.mapData.size.width / square;
    const squareY = +this.mapData.size.height / square;
    const noEarth = new Image();
    // const borderImage = getGroundTextures('EDG24');
    // const border = new Image();
    noEarth.onload = () => {
      for (let i = 0; i < squareX; i = i + 1) {
        for (let j = 0; j < squareY; j = j + 1) {
          renderFunc(noEarth, (scaleX + i) * square, (scaleY + j) * square, square, square, 0, {
            noMove: false,
          });
        }
      }
      this.mapData.ground.forEach((element: TypeMapGround) => {
        const { coordinates, rotation } = element;
        let { texture } = element;
        const coordinatesX = square * (scaleX + coordinates[0]);
        const coordinatesY = square * (scaleY + coordinates[1]);
        texture = '/textures/bg/' + texture;
        const image = new Image();
        image.onload = () => {
          renderFunc(image, coordinatesX, coordinatesY, square, square, rotation, {
            noMove: false,
          });
        };
        image.src = texture;
      });
      this.mapData.objects.forEach((element: TypeMapObject) => {
        const { coordinates, objectType, size } = element;
        let { texture } = element;
        console.log(element);
        const coordinatesX = square * (scaleX + coordinates[0]);
        const coordinatesY = square * (scaleY + coordinates[1]);
        texture = `/textures/${objectType}/${texture}`;
        const image = new Image();
        image.onload = () => {
          renderFunc(image, coordinatesX, coordinatesY, square * size[0], square * size[1], 0, {
            noMove: false,
          });
        };
        image.src = texture;
      });
    };
    noEarth.src = '/textures/bg/' + noEarthImage;
    // border.src = '/textures/bg/' + borderImage;
  }
  move (coords: TypeCoordinates) {
    let newScaleX = this.scale[0] + coords[0];
    let newScaleY = this.scale[1] + coords[1];
    // const square = +this.mapData.size.square;
    // const squareX = +this.mapData.size.width / square;
    // const squareY = +this.mapData.size.height / square;
    if (newScaleX > 0) {
      newScaleX = 0;
    }
    if (newScaleY > 0) {
      newScaleY = 0;
    }
    if (newScaleY === this.scale[1] && newScaleX === this.scale[0]) {
      return false;
    }
    this.scale = [newScaleX, newScaleY];
    return true;
  }
}

export default Map;

import TypeMap from '../../types/TypeMap';
import parser from '../../maps/parser';
import { map0 } from '../../maps/maps.js';
import TypeMapGround from '../../types/TypeMapGround';

type mapsArray = any[];

const MAPS: mapsArray = [
  map0,
];

class Map {
  mapName: string;
  mapData: TypeMap;
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
    this.mapData.ground.forEach((element: TypeMapGround) => {
      const { coordinates, rotation } = element;
      let { texture } = element;
      coordinates[0] = square * coordinates[0];
      coordinates[1] = square * coordinates[1];
      texture = '/textures/bg/' + texture;
      const image = new Image();
      image.onload = () => {
        renderFunc(image, coordinates[0], coordinates[1], square, square, rotation);
      };
      image.src = texture;
      console.log(texture);
    });
  }
}

export default Map;

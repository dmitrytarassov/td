import map from '../types/map';
import Terrain from '../MapObjects/Terrain/Terrain';
import Wall from '../MapObjects/Wall/Wall';
import MapObject from '../MapObjects/MapObject';

class Map {
  mapData: map;
  mapElements: MapObject[] = [];
  mapObjects: MapObject[] = [];
  constructor (mapData: map) {
    this.mapData = mapData;
    this.parse();
  }
  parse () {
    this.mapData.map.forEach((elementsString: string, i: number) => {
      const { square } = this.mapData.size;
      const y = i * square;
      elementsString.split(' ').forEach((mapElementName: string, i: number) => {
        const x = i * square;
        const element: MapObject | null = this.getMapElement(mapElementName, [x, y], square);
        if (element) {
          this.mapElements.push(element);
        }
      });
    });
    this.mapData.objects.forEach((element) => {
      const { square } = this.mapData.size;
      const object = new Wall(element, square);
      this.mapObjects.push(object);
    });
  }
  getMapElement (mapElementName: string, coords: [number, number], size: number): MapObject {
    switch (mapElementName) {
      case 'T':
        return new Terrain(coords, size);
        break;
      default:
        return null;
        break;
    }
  }
  draw (ctx: any) {
    this.mapElements.forEach((el) => {
      el.draw(ctx);
    });
    this.mapObjects.forEach((el) => {
      el.draw(ctx);
    });
  }
}

export default Map;

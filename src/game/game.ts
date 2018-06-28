import map0 from '../maps/map0';
import map from '../types/map';
import Map from '../Map/Map';

class Game {
  ctx: any;
  maps: map[];
  level: number = 0;
  currentMap: Map;
  constructor(element: any) {
    this.ctx = element.getContext('2d');
    this.maps = [map0];
  }

  start () {
    const currentMap: map = this.maps[this.level];
    this.currentMap = new Map(currentMap);
    this.currentMap.draw(this.ctx);
  }
}

export default Game;

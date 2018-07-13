import Map from './Map/Map';
import autobindDecorator from 'autobind-decorator';

class Game {
  ctx: any;
  level: number = 0;
  map: Map;
  constructor(element: any) {
    this.ctx = element.getContext('2d');
    this.map = new Map('map0');
  }

  start () {
    this.map.render(this.render);
  }
  @autobindDecorator
  render (image: any,
          x: number,
          y: number,
          xSize: number,
          ySize: number,
          rotation: number) {
    if (rotation === 0) {
      this.ctx.drawImage(image, x, y, xSize, ySize);
    } else {
      this.ctx.save();
      // move center
      this.ctx.translate(x + xSize / 2, y + ySize / 2);
      console.log(x, y, xSize, ySize);
      console.log(x + xSize / 2, y + ySize / 2, xSize, ySize)
      // rotate the canvas to the specified degrees
      this.ctx.rotate(0 * Math.PI / 180);
      this.ctx.drawImage(image, x + xSize / 2, y + ySize / 2);
      this.ctx.restore();
    }
  }
}

export default Game;

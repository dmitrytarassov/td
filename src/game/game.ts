import Map from './Map/Map';
import KeyboardController from './controllers/Keyboard/KeyboardController';
import autobindDecorator from 'autobind-decorator';

import TypeCoordinates from '../types/TypeCoordinates';

class Game {
  ctx: any;
  level: number = 0;
  map: Map;
  kbController: KeyboardController;
  constructor(element: any) {
    this.ctx = element.getContext('2d');
    this.map = new Map('map0');
    this.kbController = new KeyboardController();
    this.kbController.on('up', () => {
      this.moveMap([0, -1]);
    });
    this.kbController.on('down', () => {
      this.moveMap([0, 1]);
    });
    this.kbController.on('right', () => {
      this.moveMap([1, 0]);
    });
    this.kbController.on('left', () => {
      this.moveMap([-1, 0]);
    });
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
      // rotate the canvas to the specified degrees
      this.ctx.rotate(rotation * Math.PI / 180);
      // draw image
      this.ctx.drawImage(image, xSize / -2, ySize / -2, xSize, ySize);
      this.ctx.restore();
    }
  }
  @autobindDecorator
  moveMap(coords: TypeCoordinates) {
    if (this.map.move(coords)) {
      this.map.render(this.render);
    }
  }
}

export default Game;

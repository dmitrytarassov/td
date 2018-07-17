import Map from './Map/Map';
import KeyboardController from './controllers/Keyboard/KeyboardController';
import autobindDecorator from 'autobind-decorator';

import TypeCoordinates from '../types/TypeCoordinates';

class Game {
  ctx: any;
  map: Map;
  kbController: KeyboardController;
  showInfo: boolean;
  constructor(element: any) {
    this.showInfo = false;
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
    this.render();
  }
  render () {
    const start: number = performance.now();
    const duration = 10;
    const animate = (time: number) => {
      // определить, сколько прошло времени с начала анимации
      let timePassed = time - start;
      // возможно небольшое превышение времени, в этом случае зафиксировать конец
      if (timePassed > duration) timePassed = duration;
      // нарисовать состояние анимации в момент timePassed
      this.map.render(this.draw);
      // если время анимации не закончилось - запланировать ещё кадр
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
  @autobindDecorator
  draw (image: any,
            x: number,
            y: number,
            xSize: number,
            ySize: number,
            rotation: number,
            objectInfo: {
              zone?: Coordinates[],
              noMove?: boolean,
            },
        ) {
    // console.log('draw');
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
    if (this.showInfo) {
      this.ctx.strokeStyle = '#f00';
      this.ctx.strokeRect(x, y, xSize, ySize);
      if (objectInfo.noMove) {
        this.ctx.fillStyle = 'rgba(255, 0, 0, .3)';
        this.ctx.fillRect(x, y, xSize, ySize);
      }
    }
  }
  @autobindDecorator
  moveMap(coords: TypeCoordinates) {
    if (this.map.move(coords)) {
      this.render();
    }
  }
}

export default Game;

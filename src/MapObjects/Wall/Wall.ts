import MapObject from '../MapObject';

class Wall extends MapObject {
  texture: any;
  xDraw: number;
  yDraw:number;
  constructor (data: {
    coords: [number, number],
    size: [number, number],
    texture: string,
  },
               size: number) {
    super(data.coords, size);
    console.log(size);
    this.texture = new Image();
    this.texture.src = '/textures/' + data.texture;
    this.xDraw = data.size[0];
    this.yDraw = data.size[1];
  }
  draw (ctx: any) {
    ctx.fillRect(this.x, this.y, this.size, this.size);
    const x = this.x;
    const y = this.y;
    const yDraw = this.yDraw;
    const xDraw = this.xDraw;
    const size = this.size;
    this.texture.onload = () => {
      ctx.drawImage(this.texture, size * x, size * y, size * xDraw, size * yDraw);
    };
  }
}

export default Wall;

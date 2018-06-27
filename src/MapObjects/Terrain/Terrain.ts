import MapObject from '../MapObject';

class Terrain extends MapObject {
  texture: any;
  constructor (coords: [number, number], size: number) {
    super(coords, size);
    this.texture = new Image();
    this.texture.src = '/textures/ground.jpg';
  }
  draw (ctx: any) {
    ctx.fillRect(this.x, this.y, this.size, this.size);
    this.texture.onload = () => {
      ctx.drawImage(this.texture, this.x, this.y, this.size, this.size);
    };
  }
}

export default Terrain;

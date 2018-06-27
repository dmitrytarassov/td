class MapObject {
  x: number;
  y: number;
  size: number;
  constructor (coords: [number, number], size: number) {
    this.x = coords[0];
    this.y = coords[1];
    this.size = size;
  }
  draw (ctx: any) {}
}
export default MapObject;

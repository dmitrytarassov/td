type Groung = {
  texture: string,
  count: number,
};
type GroundArr = Groung[];
type Map = {
  size: {
    width: number,
    height: number,
    square: number,
  },
  map: GroundArr[],
  objects: {
    coords: [number, number],
    size: [number, number],
    texture: string,
  }[],
};

export default Map;

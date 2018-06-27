type Map = {
  size: {
    width: number,
    height: number,
    square: number,
  },
  map: string[],
  objects: {
    coords: [number, number],
    size: [number, number],
    texture: string,
  }[],
};

export default Map;

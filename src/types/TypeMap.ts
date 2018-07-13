import TypeMapGround from './TypeMapGround';

type TypeMap = {
  size: {
    width: number,
    height: number,
    square: number,
  },
  ground: TypeMapGround[],
};

export default TypeMap;

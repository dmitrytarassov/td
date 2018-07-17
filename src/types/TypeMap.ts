import TypeMapGround from './TypeMapGround';
import TypeMapObject from './TypeMapObject';

type TypeMap = {
  size: {
    width: number,
    height: number,
    square: number,
  },
  ground: TypeMapGround[],
  objects: TypeMapObject[],
};

export default TypeMap;

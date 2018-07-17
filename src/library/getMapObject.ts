import TypeMapObject from '../types/TypeMapObject';
import TypeCoordinates from '../types/TypeCoordinates';
import barrier from './objects/barrier';

const getMapObject = (name: string, type: string, coordinates: TypeCoordinates): TypeMapObject => {
  return barrier(name, coordinates);
}

export default getMapObject;

import TypeMapObject from '../types/TypeMapObject';
import TypeCoordinates from '../types/TypeCoordinates';
import barrier from './objects/barrier';
import object from './objects/object';

const getMapObject = (name: string, type: string, coordinates: TypeCoordinates): TypeMapObject => {
  switch (type) {
    case 'barrier': return barrier(name, coordinates);
    case 'object': return object(name, coordinates);
    default: return barrier(name, coordinates);
  }
};

export default getMapObject;

import TypeMapObject from '../../types/TypeMapObject';
import TypeCoordinates from '../../types/TypeCoordinates';
import zones from './zones';

const getBarrier = (objectName: string, coordinates: TypeCoordinates): TypeMapObject => {
  const objectType = 'object';
  switch (objectName) {
    case 'AVXhilg0': return {
      coordinates,
      objectType,
      objectName,
      zone: zones('11|11|11'),
      size: [3, 3],
      interactive: false,
      interactivityPoint: null,
      texture: 'AVXhilg0.png',
    };
    default: return {
      coordinates,
      objectType,
      objectName,
      zone: zones('11|11|11'),
      size: [3, 3],
      interactive: false,
      interactivityPoint: null,
      texture: 'AVXhilg0.png',
    };
  }
};

export default getBarrier;

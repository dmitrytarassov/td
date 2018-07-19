import TypeMapObject from '../../types/TypeMapObject';
import TypeCoordinates from '../../types/TypeCoordinates';
import zones from './zones';

const getBarrier = (objectName: string, coordinates: TypeCoordinates): TypeMapObject => {
  const objectType = 'barrier';
  switch (objectName) {
    case 'AvLMtGr1': return {
      coordinates,
      objectType,
      objectName,
      zone: zones('110|111|011'),
      size: [3, 2],
      interactive: false,
      interactivityPoint: null,
      texture: 'AvLMtGr1.png',
    };
    default: return {
      coordinates,
      objectType,
      objectName,
      zone: zones('110|111|011'),
      size: [3, 2],
      interactive: false,
      interactivityPoint: null,
      texture: 'AvLMtGr1.png',
    };
  }
};

export default getBarrier;

import map from '../types/map';

const map: map = {
  size: {
    width: 600,
    height: 600,
    square: 100,
  },
  map: [
    'T T T T T T',
    'T T T T T T',
    'T T T T T T',
    'T T T T T T',
    'T T T T T T',
    'T T T T T T',
  ],
  objects: [
    {
      coords: [0, 1],
      size: [2, 2],
      texture: 'tree1.png',
    },
    {
      coords: [0, 2],
      size: [2, 2],
      texture: 'tree1.png',
    },
  ],
};

export default map;

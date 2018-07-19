import TypeCoordinates from '../../types/TypeCoordinates';

export default (zoneName: string): TypeCoordinates[] => {
  switch (zoneName) {
    case '11|11': return [[0, 0], [0, 1], [1, 0], [1, 1]];
    case '11|11|11': return [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]];
    case '110|111|011': return [[0, 0], [0, 1], [1, 0], [1, 1], [1, 2], [2, 1], [2, 2]];
    default: return [[0, 0]];
  }
};

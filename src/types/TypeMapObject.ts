import TypeCoordinates from './TypeCoordinates';

type TypeMapObject = {
  coordinates: TypeCoordinates,
  zone: TypeCoordinates[],
  size: TypeCoordinates,
  objectType: string,
  objectName: string,
  interactive: boolean,
  interactivityPoint: null | TypeCoordinates,
  texture: string,
};

export default TypeMapObject;

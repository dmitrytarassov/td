const getGroungTexture = (name: string): string => {
  switch (name) {
    case 'tgrb000':   return 'tgrb000.png';
    case 'watrtl08':  return 'watrtl08.png';
    case 'watrtl21':  return 'watrtl21.png';
    case 'tgrs010':   return 'tgrs010.png';
    default: return 'tgrb000.png';
  }
};

export default getGroungTexture;

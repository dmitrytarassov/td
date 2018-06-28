import game from './game/game';

const gameObj: game = new game(document.getElementById('canvas'));
gameObj.start();

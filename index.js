import { createAnimatePlayer } from './createAnimatePlayer.js';
import { createGame } from './createGame.js';
import { createRenderGameFunctions } from './createRenderGameFunctions.js';
import { createKeyboardListener } from './keyboard-listener.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let player = {
  x: 250,
  y: 250,
}

const renderGameFunctions = createRenderGameFunctions(ctx, player)
const game = createGame(player);
const animatePlayer = createAnimatePlayer(renderGameFunctions.animate);
const keyBoardListener = createKeyboardListener();
keyBoardListener.subscribe(game.movePlayer)
keyBoardListener.subscribe(animatePlayer.animatePlayer)

renderGameFunctions.renderGame(ctx, player)
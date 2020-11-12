import Game from "./Game.js";
import GameView from "./GameView.js";

//importing class & app
let game = new Game();
let gameView = new GameView(document.getElementById("app"));


// define functions
gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
};

// restarting game 
gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
};

//current state of game
gameView.update(game);
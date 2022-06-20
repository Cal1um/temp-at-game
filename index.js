import Player from "/player.js";
import InputHandler from "/input.js"


let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');



const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let player = new Player(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(player)


let LastTime = 0;

function gameLoop(TimeStamp) {
    let deltaTime = TimeStamp - LastTime;
    LastTime = TimeStamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    player.update(deltaTime);
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}
gameLoop();
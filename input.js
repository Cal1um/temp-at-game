export default class InputHandler {
    constructor(player) {
        document.addEventListener('keydown', event => {
            switch (event.keyCode){

                
                case 37:
                    player.moveleft();
                    break;

                case 39:
                    player.moveright();
                    break;

                case 38:
                    player.moveup();
                    break;
                case 40:
                    player.movedown();
                    break;
                
                
            }

            
        });
        document.addEventListener('keyup', event => {
            switch (event.keyCode){
                case 37:
                    if(player.speed.x < 0)player.stop();
                    break;

                case 39:
                    if(player.speed.x > 0)player.stop();
                    break;

                case 38:
                    if(player.speed.y < 0)player.stopy();
                    break;
                case 40:
                    if(player.speed.y > 0)player.stopy();
                    break;
            }

            
        });
    }
}
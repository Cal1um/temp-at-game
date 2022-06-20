export default class Player{
    constructor(gameWidth, gameHeight){
        this.width = 30;
        this.height = 30;

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.maxspeed = {
            x: 5,
            y: 5
        };
        this.speed = {
            x: 0,
            y: 0,
        }
        
 


        this.position = {
            x: gameWidth / 2 - this.width / 2,

            y: gameHeight - this.height - 10
        };
    }

    moveleft(){
        this.speed.x = -this.maxspeed.x;
    }
    moveright(){
        this.speed.x = this.maxspeed.x;
    }
    stop(){
        this.speed.x = 0;
    }
    moveup(){
        this.speed.y = -this.maxspeed.y;
    }
    movedown(){
        this.speed.y = this.maxspeed.y;
    }
    stopy(){
        this.speed.y = 0;
    }
   
 

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
    update(deltaTime){
        if(!deltaTime) return;
        
        
         
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) 
            this.position.x = this.gameWidth - this.width;

        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > this.gameHeight)
            this.position.y = this.gameHeight -this.height;
        
    }
}
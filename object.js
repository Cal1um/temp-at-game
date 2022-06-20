

export default class Object{
    constructor(gameWidth, gameHeight, player){
        this.width = 10;
        this.height = 10;

        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.maxspeed = {
            x: 10,
            y: 10
        };
        this.speed = {
            x: 10,
            y: 10,
        }
        this.position = {
            x: 0,

            y: 0,
        };
    }

 

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  
    update(deltaTime){
        if(!deltaTime) return;
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x < 0) this.speed.x = this.maxspeed.x;
        if(this.position.x + this.width > this.gameWidth)
            this.speed.x = -this.maxspeed.x;

        if(this.position.y < 0) this.speed.y = this.maxspeed.y;
        if(this.position.y + this.height > this.gameHeight)
            this.speed.y = -this.maxspeed.y;
         
        

        
    }
}
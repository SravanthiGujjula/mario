
export default class SpriteSheet{
    constructor(image,width,heigth){
        this.image = image;
        this.width = width;
        this.heigth = heigth;
        this.tiles = new Map();
    }
    define(name,x,y,width,height){
        const buffer = document.createElement('canvas');
        // buffer.width = width;
        // buffer.height = height;
        const tilecontext = buffer.getContext('2d');
        tilecontext.drawImage(this.image,
            x ,y,
            width,height,
            0,0,
            width,height);
        this.tiles.set(name,buffer);
    }
    draw (name, context, x,y){
        // console.log('at draw')
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x,y);
    }
    drawTiles(name,context,x,y){
        this.draw(name,context,x*16,y*16);
    }
    defineTile(name,x,y){
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }
}

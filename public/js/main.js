import Spritesheet from './spritesheet.js';
import {loadLevel, loadImage, imageLoaded} from './loaders.js';

const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');


function drawBackground(background, context,sprite){
    background.ranges.forEach(([x1,x2,y1,y2]) =>{
        for (let x=x1; x<x2;x++){
            for(let y=y1;y<y2;y++){
                sprite.drawTiles(background.title,context,x,y);
            }
        }
    })
}

Promise.all([loadBackgroundSprites(), loadLevel('1-1'), loadMarioSprite()])
    .then(([sprite,level,marioSprite])=>{
        // console.log(sprite,level,marioSprite);
        level.backgrounds.forEach((background)=>{
            drawBackground(background,context,sprite);
        })
        marioSprite.draw('idle',context,64,64);
    })


function loadBackgroundSprites(){
//    return loadImage('/images/tiles.png')
    return imageLoaded('/images/tiles.png')
    .then((image)=>{
        // console.log(image);
        const sprite = new Spritesheet(image, 16,16);
        sprite.defineTile('ground',0,0);
        sprite.defineTile('sky',3,23);
        return sprite;
    })
}


function loadMarioSprite(){
        return imageLoaded('/images/characters.gif')
        .then((image)=>{
            const sprite = new Spritesheet(image, 16,16);
            sprite.define('idle',17,3,16,16);
            return sprite;
        })
    }
    

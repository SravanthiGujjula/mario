import { imageLoaded} from './loaders.js';
import Spritesheet from './spritesheet.js';


export function loadBackgroundSprites(){
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
    
    export function loadMarioSprite(){
            return imageLoaded('/images/characters.gif')
            .then((image)=>{
                const sprite = new Spritesheet(image, 16,16);
                sprite.define('idle',276,44,16,16);
                return sprite;
            })
        }
        
    
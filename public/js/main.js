import {
    loadLevel,
    loadImage
} from './loaders.js';
import {
    loadBackgroundSprites
} from './sprites.js';
import Compositer from './composite.js';
import {
    createBckgroundLayer,
    createSpriteLayer
} from './layers.js';
import {
    createMario
} from './entities.js';

import Timer from './timer.js';



const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');



Promise.all([loadBackgroundSprites(), loadLevel('1-1'), createMario()])
    .then(([backgroundSprites, level, mario]) => {
        const comp = new Compositer();
        const backgroundLayer = createBckgroundLayer(level.backgrounds, backgroundSprites);
        comp.layers.push(backgroundLayer);

        const spriteLayer = createSpriteLayer(mario);
        comp.layers.push(spriteLayer);

        const gravity = 30;
        mario.position.set(64, 180);
        mario.velocity.set(200, -600);

        const timer = new Timer(1/60);
        timer.update = function update(deltaTime) {
            comp.draw(context);
            mario.update(deltaTime);
            mario.velocity.y += gravity;
        }
        timer.start();
    })
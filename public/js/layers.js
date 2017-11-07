export function createBckgroundLayer(backgrounds, sprite) {
    const buffer = document.createElement('canvas');
    buffer.height = 240;
    buffer.width = 256;
    const backgroundcontext = buffer.getContext('2d');
    // console.log(sprite,level,marioSprite);
    backgrounds.forEach((background) => {
        drawBackground(background, backgroundcontext, sprite);
    })
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    }

}

function drawBackground(background, context, sprite) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                sprite.drawTiles(background.title, context, x, y);
            }
        }
    })
}



export function createSpriteLayer(entity) {
    return function drawSpriteLayer(context) {
        entity.draw(context);
    }
}
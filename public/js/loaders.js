export function loadLevel(name){
    return fetch(`/levels/${name}.json`)
    .then(r => r.json());
}

export function loadImage(url){
    return new Promise(resolve =>{
        const image = new Image();
        image.addEventListener('load',()=>{
            resolve(image);
        });
        image.src = url;
    })
}

export function imageLoaded (url){
    const img = new Image();
    return new Promise((resolve) =>{
        img.onload = function () {
            resolve(img);
        }
        img.src = url;
    })
}

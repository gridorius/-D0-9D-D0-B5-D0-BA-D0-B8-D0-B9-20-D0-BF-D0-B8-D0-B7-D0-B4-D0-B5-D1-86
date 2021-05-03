import Configurator from "./engine/Configurator.js";
import Drawer from "./engine/Drawer.js";
import {vec} from "./engine/Helpers.js";
import Sprite from "./engine/Sprite.js";
import ImagesPool from "./engine/ImagesPool.js";

let imagesPool = new ImagesPool();
imagesPool.loadFromConfig();


let drawer = new Drawer(canvas);

let sprite = new Sprite('c.jpg');
console.log(sprite.image)
sprite.image.onload = ()=>{
    console.log(sprite.image.naturalWidth)
}

// drawer.drawWithParameters(context=>{
//     context.fillRect(10, 10, 50, 50)
// })

global.Configurator = Configurator.load('config.json');


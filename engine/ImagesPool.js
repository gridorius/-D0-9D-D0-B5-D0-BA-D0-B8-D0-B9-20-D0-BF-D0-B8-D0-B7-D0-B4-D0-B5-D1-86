export default class ImagesPool{
    constructor() {
        this.pool = new Map();
        this.loadState = new Map();
    }

    loadFromConfig(){
        if(global.Configurator && global.Configurator.config.imagesPool){
           let configPool = global.Configurator.config.imagesPool;

           for(let name in configPool){
               this.addImage(name, configPool[name]);
           }
        }
    }

    addImage(name, path){
        let image = new Image();
        image.src = path;
        this.pool.set(name, image);
        this.loadState.set(name, false);
        image.onload = ()=>{
            this.loadState.set(name, true);
        }
    }

    check(name){
        return this.loadState.get(name);
    }

    get(name){
        return this.pool.get(name);
    }
}
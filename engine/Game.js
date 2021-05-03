export default class Game{
    constructor() {
       this.config = Configurator.config;
       this.interval = false;

       this.beforeStepListeners = [];
       this.stepListeners = [];
       this.afterStepListeners = [];

       this.iteration = 0;

       this.entities = new Map();
    }

    addEntity(entity){
        this.entities.set(entity.uuid, entity);
    }

    removeEntity(uuid){
        this.entities.delete(uuid);
    }

    getEntity(uuid){
        return this.entities.get(uuid);
    }

    addBeforeStepListener(listener){
        this.beforeStepListeners.push(listener);
    }

    addStepListener(listener){
        this.stepListeners.push(listener);
    }

    addAfterStepListener(listener){
        this.afterStepListeners.push(listener);
    }

    step(){
        this.beforeStepListeners.forEach(listener=>{
            listener(this);
        });

        this.iteration++;
        this.stepListeners.forEach(listener=>{
            listener(this);
        });

        this.afterStepListeners.forEach(listener=>{
            listener(this);
        });
    }

    start(){
        this.interval = setInterval(()=>{
            this.step();
        }, this.config.iterationTime);
    }

    stop(){
        clearInterval(this.interval);
    }
}
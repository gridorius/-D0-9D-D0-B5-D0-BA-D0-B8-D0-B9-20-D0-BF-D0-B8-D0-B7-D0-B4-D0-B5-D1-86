import Mover from "./Mover";

export default class Entity extends Mover{
    constructor() {
        super();
        this.uuid = btoa(Date.now());
    }

    step(game){

    }

    draw(drawer){

    }
}
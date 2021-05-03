import Vector from "./Vector";

export default class Mover{
    constructor() {
        this.location = new Vector();
        this.acceleration = new Vector();
        this.velocity = new Vector();
    }

    appendForce(vector){
        this.acceleration.add(vector);
    }

    move(){
        this.location.add(this.velocity.add(this.acceleration));
        this.acceleration.reset();
    }
}
export default class Vector{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    clone(){
        return new this(this.x, this.y);
    }

    isZero(){
        return this.x == 0 && this.y == 0;
    }

    set(x, y){
        this.x = x;
        this.y = y;
    }

    reset(){
        this.x = this.y = 0;
    }

    add(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    sub(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    mult(scalar){
        this.x*= scalar;
        this.y*= scalar;
        return this;
    }

    get length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    distance(vector){
        return this.clone().sub(vector).length;
    }

    norm(){
        let length = this.length;
        this.x/= length;
        this.y/= length;
        return this;
    }

    scalarComposition(vector){
        return (this.x*vector.x) + (this.y*vector.y);
    }

    angleFrom(vector){
        return Math.acos(this.scalarComposition(vector));
    }
}
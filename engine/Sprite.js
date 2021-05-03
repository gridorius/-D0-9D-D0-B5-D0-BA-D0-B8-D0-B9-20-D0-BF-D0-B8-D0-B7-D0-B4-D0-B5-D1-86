export default class Sprite{
    constructor(image, length = 1) {
        this.image = image;
        this.length = length;
        this.sprite = 0;

        this.checkImageLoad();
    }

    checkImageLoad(){
        if(this.image.complete){
            this.setSpriteData();
        }else{
            this.image.onload = ()=>{
                this.setSpriteData();
            }
        }
    }

    setSpriteData(){
        this.width = this.image.naturalWidth;
        this.frameWidth = this.width/this.length;
    }

    next(){
        this.sprite++;
        if(this.sprite >= this.length){
            this.sprite = 0;
        }
    }

    get(){
        return [this.image, this.frameWidth*this.sprite, 0, this.frameWidth]; // image, offsetLeft, offsetTop, frameWidth from context.drawImage()
    }
}
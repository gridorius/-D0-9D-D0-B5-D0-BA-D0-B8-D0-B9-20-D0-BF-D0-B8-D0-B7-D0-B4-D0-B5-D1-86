export default class Drawer{
    constructor(canvas, width = 500, height = 500) {
        this.canvas = canvas;
        this.width = this.canvas.width = width;
        this.height = this.canvas.height = height;
        this.context = canvas.getContext('2d');
    }

    clear(){
        this.context.clearRect(0, 0, this.width, this.height);
    }

    clearRect(from, to){
        this.context.clearRect(from.x, from.y, to.x, to.y);
    }

    drawWithParameters(draw, parameters = {}){
        this.context.save();

        for(let name in parameters){
            this.context[name] = parameters[name];
        }

        draw(this.context);
        this.context.restore();
    }

    drawCircle(vector, r, parameters = {}){
        this.drawWithParameters(context=>{
            context.beginPath();
            context.arc(vector.x, vector.y, r, 0, Math.PI*2);
            context.fill();
        }, parameters)
    }

    drawRectangle(vector, w, h, parameters = {}){
        this.drawWithParameters(context=>{
            context.fillRect(vector.x, vector.y, w, h);
        }, parameters)
    }

    drawLine(from, to, parameters = {}){
        this.drawWithParameters(context=>{
            context.beginPath();
            context.moveTo(from.x, from.y);
            context.lineTo(to.x, to.y);
        }, parameters)
    }
}
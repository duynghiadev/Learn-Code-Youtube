export class SnakeCell{
    constructor(x, y, cellWidth, cellHeight, color, ctx){
        this.x = x;
        this.y = y;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.color = color;
        this.ctx = ctx;
    }
    render(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect( this.x*this.cellHeight,  this.y*this.cellWidth, this.cellWidth, this.cellHeight);
    }
    destructor() {
        // this is not wel tested
        // this.ctx.fillStyle = "#05D9FF";
        // this.ctx.fillRect( this.x*this.cellHeight,  this.y*this.cellWidth, this.cellWidth, this.cellHeight);
    }

}
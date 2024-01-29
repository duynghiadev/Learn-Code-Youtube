export class Food{
    constructor(ctx, x, y, cellWidth, cellHeight, color) {
        this.x = x;
        this.y = y;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.color = color;
        this.ctx = ctx;
        // render the food after the settings
        // this.render();
    }
    render(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect( this.x*this.cellHeight,  this.y*this.cellWidth, this.cellWidth, this.cellHeight);
    }
}
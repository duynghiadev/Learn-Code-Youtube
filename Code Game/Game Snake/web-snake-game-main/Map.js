export class Map{
    constructor(args){
        let { ctx, name, border , rectangles, borderColor, cellWidth, cellHeight, background} = args;
        this.name = name;
        this.ctx = ctx;
        // setting the border (I know this method is bad but hang with me)
        this.border = true;
        if(border!=undefined){
            this.border = border;
        }
        this.rectangles = rectangles?rectangles:[];
        this.borderColor = borderColor?borderColor:"#002026";
        this.backgroundColor = background?background:"#05D9FF";
        
        this.cellWidth =10;
        if(cellWidth != undefined){
            this.cellWidth = cellWidth;
        }
        this.cellHeight = 10;
        if(cellHeight != undefined){
            this.cellHeight = cellHeight;
        }
        
        // render the map after the settings
        // this.render();
    }
    render() {
        // draw the background fisrt
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, 800, 600);
        
        // 
        for (let i=0; i<this.rectangles.length; i++) {
            let rect = this.rectangles[i];
            this.ctx.fillStyle = this.borderColor;
            this.ctx.fillRect(rect.x*this.cellWidth, rect.y*this.cellHeight, rect.w * this.cellWidth, rect.h * this.cellHeight);
        }
        if(this.border){
            this.ctx.lineWidth = this.cellHeight;
            this.ctx.strokeStyle = this.borderColor;
            this.ctx.rect(parseInt(this.cellWidth/2), parseInt(this.cellHeight/2), 800- this.cellWidth, 600-this.cellHeight);
            this.ctx.stroke();
        }
    }
}


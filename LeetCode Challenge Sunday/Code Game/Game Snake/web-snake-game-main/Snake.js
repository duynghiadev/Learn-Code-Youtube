import { SnakeCell } from "./SnakeCell.js";

export class Snake{
    constructor(args){
        let { ctx , x, y, color, cellWidth, cellHeight , direct} = args;
        this.color = color?color:"#006172";
        this.ctx = ctx;
        this.cellWidth = cellWidth?cellWidth:10;
        this.cellHeight = cellHeight?cellHeight:10;
        this.x = x?x:0;
        this.y = y?y:0;
        this.direct = direct?direct:"UP";
        this.body = [
            new SnakeCell(this.x,this.y, this.cellWidth, this.cellHeight, this.color, this.ctx), 
            
        ];
        this.len = this.body.length;
    }
    render(){
        for (let i=0; i<this.body.length; i++){
            let cell = this.body[i];
            cell.render()
        }
    }
    move(removeTail = true){
        let currentHead = this.getHead();
        let newHead;
        switch (this.direct) {
            case "UP":
                newHead = new SnakeCell(
                    currentHead.x,
                    currentHead.y-1,
                    currentHead.cellWidth,
                    currentHead.cellHeight,
                    currentHead.color,
                    currentHead.ctx
                );
                break;
            case "DOWN":
                newHead = new SnakeCell(
                    currentHead.x,
                    currentHead.y+1,
                    currentHead.cellWidth,
                    currentHead.cellHeight,
                    currentHead.color,
                    currentHead.ctx
                );
                break;
            case "LEFT":
                newHead = new SnakeCell(
                    currentHead.x-1,
                    currentHead.y,
                    currentHead.cellWidth,
                    currentHead.cellHeight,
                    currentHead.color,
                    currentHead.ctx
                );
                break;
            case "RIGHT":
                newHead = new SnakeCell(
                    currentHead.x+1,
                    currentHead.y,
                    currentHead.cellWidth,
                    currentHead.cellHeight,
                    currentHead.color,
                    currentHead.ctx
                );
                break;
            default:
                break;
        }
        let newBody = [...this.body]
        newBody.unshift(newHead)
        if(removeTail){
            newBody.pop()
        }
        // console.log(daba)
        this.body = newBody;
    }
    moveLeft(){
        let currentHead = this.getHead();
        let newHead = new SnakeCell(
            currentHead.x-1,
            currentHead.y,
            currentHead.cellWidth,
            currentHead.cellHeight,
            currentHead.color,
            currentHead.ctx
        );
        let newBody = [...this.body]
        newBody.unshift(newHead)
        newBody.pop()
        this.body = newBody;
    }
    moveRight(){
        let currentHead = this.getHead();
        let newHead = new SnakeCell(
            currentHead.x+1,
            currentHead.y,
            currentHead.cellWidth,
            currentHead.cellHeight,
            currentHead.color,
            currentHead.ctx
        );
        let newBody = [...this.body]
        newBody.unshift(newHead)
        newBody.pop()
        this.body = newBody;
    }
    moveUp(){
        let currentHead = this.getHead();
        let newHead = new SnakeCell(
            currentHead.x,
            currentHead.y-1,
            currentHead.cellWidth,
            currentHead.cellHeight,
            currentHead.color,
            currentHead.ctx
        );
        let newBody = [...this.body]
        newBody.unshift(newHead)
        newBody.pop()
        this.body = newBody;
    }
    moveDown(){
        let currentHead = this.getHead();
        let newHead = new SnakeCell(
            currentHead.x,
            currentHead.y+1,
            currentHead.cellWidth,
            currentHead.cellHeight,
            currentHead.color,
            currentHead.ctx
        );
        let newBody = [...this.body]
        newBody.unshift(newHead)
        newBody.pop()
        this.body = newBody;
    }
    reconstruct(){
        let body = this.body;

    }
    getLen(){
        return this.len;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getDir(){
        return this.direct;
    }
    getHead(){
        return this.body[0];
    }
    getTail(){
        return this.body[-1];
    }
    newHead(newHead){

    }
    grow(){
    
    }
    shrink(){

    }
}
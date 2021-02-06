import O from "./pieces/j"
import { blocks } from "./utils/canvas_util";
import test from "./utils/test"
const FONTSTYLE: string = "Oswald";

export default class Game {
   ctx: CanvasRenderingContext2D
   width: number;
   height: number;
   scale: number
   // testing
   piece: O;
   blocks: blocks
   constructor(canvas: HTMLCanvasElement){
      this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      this.width = canvas.width;
      this.height = canvas.height;
      this.scale = canvas.width / 10
      this.piece = new O(this.scale)
      this.blocks = test(canvas, this.scale)
      this.animate = this.animate.bind(this)
      setTimeout(() => {this.piece.move("d")}, 500 )
      setTimeout(() => {this.piece.stop()}, 2500)
      this.animate();
   }

   animate(): void{

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.width, this.scale * 4)
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(0, this.scale * 4, this.width, this.height);
      this.drawGrid();
      let coordinates = this.piece.coordinates()
      for( let i = 0; i < coordinates.length; i++ ){
         let pos = coordinates[i]
         this.ctx.drawImage(this.blocks[this.piece.color], ...pos)
      }
      requestAnimationFrame(this.animate)
   }
   // testing
   drawGrid():void{
      let i: number = 0;

      while( i <= this.width){
         this.ctx.beginPath();
         this.ctx.strokeStyle = 'white';
         this.ctx.moveTo(i, 0);
         this.ctx.lineTo(i, this.height);
         this.ctx.stroke();
         i += this.scale;
      }
   }
}

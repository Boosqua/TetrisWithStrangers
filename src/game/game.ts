import Piece from "./pieces/piece"

const FONTSTYLE: string = "Oswald";
interface startValues{ value: string, size: number}

export default class Game {
   ctx: CanvasRenderingContext2D
   width: number;
   height: number;
   startAnimation: startValues;
   startRunning: boolean;
   startCompleted: boolean;
   gridScale: number
   // testing
   piece: Piece
   constructor(canvas: HTMLCanvasElement){
      this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      this.width = canvas.width;
      this.height = canvas.height;
      this.startRunning = false;
      this.startAnimation = null;
      this.gridScale = canvas.width / 10
      this.startCompleted = false;
      this.animate = this.animate.bind(this)
      this.piece = new Piece(this.gridScale)
      this.animate();
   }

   animate(): void{
      this.ctx.save()
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.width, this.gridScale * 4)
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(0, this.gridScale * 4, this.width, this.height);
      this.ctx.restore()
      this.drawGrid();
      if(!this.startRunning){
         this.startRunning = true;
         this.startAnimation = this.animateStartValues();
      }
      if( !this.startCompleted ) this.drawStart()
      // testing
      this.ctx.save()
      let i: number = 0
      let pos: [number, number] = [...this.piece.pos]
      this.ctx.strokeStyle = "pink"
      this.ctx.strokeRect(...pos, this.gridScale * 4, this.gridScale * 4)
      this.ctx.restore()
      while( this.startCompleted && i < 4 ){
         this.ctx.fillStyle = "yellow"
         this.piece.draw(this.ctx, pos)
         pos[1] += this.gridScale;
         i++
      }
      i = 0;
      this.ctx.restore()
      this.ctx.strokeStyle = "rgba(0, 0, 0)"
      this.ctx.strokeRect(...this.piece.pos, this.gridScale, this.gridScale * 4)
      while(i < 4){
         this.ctx.beginPath();
         this.ctx.moveTo(this.piece.pos[0], this.piece.pos[1] + this.gridScale *( i + 1) )
         this.ctx.lineTo(this.piece.pos[0] + this.gridScale, this.piece.pos[1] + this.gridScale * (i + 1) )
         this.ctx.stroke()
         i++
      }
      requestAnimationFrame(this.animate)
   }
   drawStart(): void{
      this.ctx.save()
      this.ctx.fillStyle = "black"
      this.ctx.font = `${this.startAnimation.size}px ${FONTSTYLE}`;
      this.ctx.textAlign = "center";
      // this.ctx.fillText(this.startAnimation.value, this.width / 2, this.height / 2)
 
      this.ctx.fillText(this.startAnimation.value, this.width / 2, this.height / 2)
      this.ctx.restore()
   }
   animateStartValues(): startValues {
      let fontSize: number = this.width * .25
      const animation: startValues = {value: "3 . . .", size: fontSize}
      let decrement = setInterval(() => { animation.size -= fontSize * .04}, 40)
      setTimeout(() => {
         animation.value = "2 . . ."
         animation.size = fontSize;
      }, 1000)
      setTimeout(() => {
         animation.value = "1 . . ."
         animation.size = fontSize;
      }, 2000)
      setTimeout(() => {
         animation.value = "START"
         animation.size = fontSize * 1.2;
         clearInterval(decrement)
      }, 3000)
      setTimeout(() => {
         animation.value = ""
         this.startCompleted = true
      }, 3500)
      return animation;
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
         i += this.gridScale;
      }
   }
}

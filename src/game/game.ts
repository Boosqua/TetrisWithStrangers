const FONTSTYLE: string = "Oswald";
interface startValues{ value: string, size: number}
export default class Game {
   ctx: CanvasRenderingContext2D
   width: number;
   height: number;
   startAnimation: startValues;
   startRunning: boolean;
   gridScale: number

   constructor(canvas: HTMLCanvasElement){
      this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      this.width = canvas.width;
      this.height = canvas.height;
      this.startRunning = false;
      this.startAnimation = null;
      this.gridScale = canvas.width / 10
      this.animate = this.animate.bind(this)
      this.animate();
   }

   animate(): void{
      requestAnimationFrame(this.animate)
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(0, this.gridScale * 4, this.width, this.height);
      this.drawGrid();
      if(!this.startRunning){
         this.startRunning = true;
         this.startAnimation = this.animateStartValues();
      }
      this.ctx.fillStyle = "black"
      this.ctx.font = `${this.startAnimation.size}px ${FONTSTYLE}`;
      this.ctx.textAlign = "center";
      // this.ctx.fillText(this.startAnimation.value, this.width / 2, this.height / 2)
      this.ctx.shadowColor = "blue";
      this.ctx.shadowBlur = 10;
      this.ctx.shadowOffsetX = -3;
      this.ctx.shadowOffsetY = 3;
      this.ctx.fillText(this.startAnimation.value, this.width / 2, this.height / 2)
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0
   }
   animateStartValues(): startValues {
      console.log( this.width)
      let fontSize: number = this.width * .25
      const animation: startValues = {value: "3 . . .", size: fontSize}
      let decrement = setInterval(() => { animation.size -= fontSize * .05}, 40)
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
      }, 3700)
      return animation;
   }
   drawGrid():void{
      let i: number = 0;

      while( i <= this.width){
         this.ctx.beginPath();
         this.ctx.strokeStyle = 'black';
         this.ctx.moveTo(i, 0);
         this.ctx.lineTo(i, this.height);
         this.ctx.stroke();
         i += this.gridScale;
      }
   }
}

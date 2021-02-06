export default class Piece {
   pos: [number, number];
   center: [number, number];
   scale: number;
   fallInt: number;
   intervalId: NodeJS.Timeout;
   timeoutId: NodeJS.Timeout;
   constructor(
      center: [number, number], 
      scale: number, 
      fallInt: number = 1000
      ){
      this.scale = scale
      this.center = center;// will probably pass in from child class
      this.fallInt = fallInt //set up for player options later
      this.fall()
   }

   fall(): void{
      let that: Piece = this
      setInterval(() => {
         that.center[1] += (that.scale / 4)
      }, that.fallInt)
   }
   move(input: string): void {
      switch (input) {
         case "d":
            this.center[0] = this.center[0] + this.scale
            this.timeoutId = setTimeout(() => {
               this.timeoutId = setInterval(() => {
                  this.center[0] += this.scale 
               }, 300)
            }, 700)
            break;
         default:
            break;
      }
   }
   stop(){
      clearTimeout(this.timeoutId)
      clearInterval(this.timeoutId)
   }
   draw(ctx: CanvasRenderingContext2D, pos: [number, number]): void{
      ctx.fillRect(...pos, this.scale, this.scale)
   }
}
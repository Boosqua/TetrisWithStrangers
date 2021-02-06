export default class Piece {
   pos: [number, number];
   center: [number, number];
   scale: number;
   rotation: number;
   fallInt: number;
   timeoutId: NodeJS.Timeout;
   mapEdge: {
      "right": {
         [number: number]: number
      },
      "left": {
         [number: number]: number
      }
   }
   constructor(
      center: [number, number], 
      scale: number,
      mapEdge: {
         "right": {
            [number: number]: number
         },
         "left": {
            [number: number]: number
         }
      },
      fallInt: number = 1000
      ){
      this.scale = scale
      this.mapEdge = mapEdge
      this.rotation = 0;
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
   checkMapEdge(direction: "right" | "left"): boolean{
      if(direction === "right"){
         return this.mapEdge[direction][this.rotation] * this.scale > this.center[0]
      } else {
         return this.mapEdge[direction][this.rotation] * this.scale < this.center[0]
      }
   }
   validMove(direction: "right" | "left"): boolean{
      return this.checkMapEdge(direction);
   }
   move(direction: "right" | "left"): void {
      let that = this
      switch (direction) {
         case "right":
            that.center[0] = that.center[0] + that.scale
            if(!that.validMove(direction)){
               break
            }
            that.timeoutId = setTimeout(() => {
               that.timeoutId = setInterval(() => {
                  that.center[0] += that.scale 
                  if(!that.validMove(direction)){
                     that.stop()
                  }
               }, 100)
            }, 100)
            break;
         case "left":
            that.center[0] = that.center[0] - this.scale

            if( !that.validMove(direction) ){
               break
            }
            that.timeoutId = setTimeout(() => {
               that.timeoutId = setInterval(() => {
                  that.center[0] -= that.scale
                  if(!that.validMove(direction)){
                     that.stop()
                  }
               }, 100)
            }, 100)
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
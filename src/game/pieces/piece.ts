export default class Piece {
   pos: [number, number];
   center: [number, number] | void;
   gridScale: number
   fallInt: number
   constructor(gridScale: number, fallInt: number = 1000, center: [number, number] = null){
      this.gridScale = gridScale
      this.pos = [4 * gridScale, 0]
      this.center = center;// will probably pass in from child class
      this.fallInt = fallInt //set up for player options later
      this.fall()
   }

   fall(): void{
      let that: Piece = this
      setInterval(() => {
         that.pos[1] += (that.gridScale / 4)
      }, that.fallInt)
   }

   draw(ctx: CanvasRenderingContext2D, pos: [number, number]): void{
      ctx.fillRect(...pos, this.gridScale, this.gridScale)
   }
}
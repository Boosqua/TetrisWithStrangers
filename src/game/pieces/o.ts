import Piece from './piece'
export default class O extends Piece{
   rotation: number
   color: string
   constructor(scale: number){
      super([scale * 5, scale], scale)
      this.rotation = 0;
      this.color = "#72CB3B";
   }
   coordinates(): Array<[number, number]>{
      return[
         [this.center[0] - this.scale, this.center[1] - this.scale],
         [this.center[0], this.center[1] - this.scale],
         [this.center[0] - this.scale, this.center[1]],
         [this.center[0], this.center[1]]
      ]
   }
}
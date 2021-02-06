import Piece from './piece'
export default class O extends Piece{
   color: string
   constructor(scale: number){
      let mapEdge = {
         right:{
            0: 9,
            1: 9,
            2: 9,
            3: 9
         },
         left:{
            0: 1,
            1: 1,
            2: 1,
            3: 1
         }
      }
      super([scale * 5, scale], scale, mapEdge)
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
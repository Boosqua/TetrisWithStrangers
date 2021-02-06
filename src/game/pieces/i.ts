import Piece from './piece'
export default class I extends Piece{
   color: string
   constructor(scale: number){
      let mapEdge = {
         right:{
            0: 8,
            1: 9,
            2: 8,
            3: 9
         },
         left:{
            0: 2,
            1: 0,
            2: 2,
            3: 0
         }
      }
      super([scale * 5, scale * 2], scale, mapEdge)
      this.color = "#0341AE"
   }
   coordinates(): Array<[number, number]>{
      switch (this.rotation) {
         case 0:
         case 2:
            return [
               [this.center[0] + this.scale, this.center[1]],
               [this.center[0], this.center[1]],
               [this.center[0] - 1 * this.scale, this.center[1]],
               [this.center[0] - 2 * this.scale, this.center[1]]
            ]
         case 1:
            return [
               [this.center[0], this.center[1] - 2 * this.scale],
               [this.center[0], this.center[1] - 1 * this.scale],
               [this.center[0], this.center[1]],
               [this.center[0], this.center[1] + this.scale]
            ]
         case 3:
            return [
               [
                  this.center[0] - this.scale, 
                  this.center[1] - 2 * this.scale
               ],
               [
                  this.center[0] - this.scale, 
                  this.center[1] - 1 * this.scale
               ],
               [
                  this.center[0] - this.scale, 
                  this.center[1]
               ],
               [
                  this.center[0] - this.scale, 
                  this.center[1] + this.scale
               ]
            ]
         default:
            return [
               [this.center[0], this.center[1] - 2 * this.scale],
               [this.center[0], this.center[1] - 1 * this.scale],
               [this.center[0], this.center[1]],
               [this.center[0], this.center[1] + 1 * this.scale]
            ] 
      }
   }
}
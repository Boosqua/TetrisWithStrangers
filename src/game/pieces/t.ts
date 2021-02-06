import Piece from './piece'
export default class T extends Piece{
   rotation: number
   color: string
   constructor(scale: number){
      let mapEdge = {
         right:{
            0: 8,
            1: 9,
            2: 8,
            3: 8
         },
         left:{
            0: 1,
            1: 1,
            2: 1,
            3: 0
         }
      }
      super([scale * 4, scale], scale, mapEdge)
      this.rotation = 0;
      this.color = "#72CB3B";
   }
   coordinates(): Array<[number, number]>{
      switch (this.rotation) {
         case 0:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0], this.center[1] + this.scale
               ],
               [
                  this.center[0] + this.scale, this.center[1]
               ],
               [
                  this.center[0] - this.scale, this.center[1]
               ],
            ]
         case 1:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0], this.center[1] + this.scale
               ],
               [
                  this.center[0], this.center[1] - this.scale
               ],
               [
                  this.center[0] - this.scale, this.center[1] 
               ],
            ]
            case 2:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0], this.center[1] - this.scale
               ],
               [
                  this.center[0] + this.scale, this.center[1]
               ],
               [
                  this.center[0] - this.scale, this.center[1]
               ],
            ]
            case 3:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0], this.center[1] + this.scale
               ],
               [
                  this.center[0], this.center[1] - this.scale
               ],
               [
                  this.center[0] + this.scale, this.center[1]
               ],
            ]
         default:
            break;
      }
   }
}
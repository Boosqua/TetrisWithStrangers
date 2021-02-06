import Piece from './piece'
export default class S extends Piece{
   rotation: number
   color: string
   constructor(scale: number){
      let mapEdge = {
         right:{
            0: 8,
            1: 8,
            2: 8,
            3: 9
         },
         left:{
            0: 1,
            1: 0,
            2: 1,
            3: 1
         }
      }
      super([scale * 4, scale], scale, mapEdge)
      this.rotation = 0;
      this.color = "#72CB3B";
   }
   coordinates(): Array<[number, number]>{
      switch(this.rotation){
         case 0:
         case 2:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0] - this.scale, this.center[1]
               ],
               [
                  this.center[0], this.center[1] - this.scale
               ],
               [
                  this.center[0] + this.scale, this.center[1] - this.scale
               ]
            ]
         case 1:
            return [
               [
                  this.center[0] + this.scale, this.center[1]
               ],
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0], this.center[1] - this.scale
               ],
               [
                  this.center[0] + this.scale, this.center[1] + this.scale
               ]
            ]
         case 3:
            return [
               [
                  this.center[0] - this.scale, this.center[1]
               ],
               [
                  this.center[0], this.center[1] + this.scale
               ],
               [
                  this.center[0], this.center[1] 
               ],
               [
                  this.center[0] - this.scale, this.center[1] - this.scale
               ]
            ]
         default:
            break
      }
   }
}
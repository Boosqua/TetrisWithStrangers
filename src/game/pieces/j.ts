import Piece from './piece'
export default class J extends Piece{
   rotation: number
   color: string
   constructor(scale: number){
      super([scale * 4, scale], scale)
      this.rotation = 0;
      this.color = "#72CB3B";
   }
   coordinates(): Array<[number, number]>{
      switch(this.rotation){
         case 0:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0] + this.scale, this.center[1]
               ],
               [
                  this.center[0] - this.scale, this.center[1]
               ],
               [
                  this.center[0] - this.scale, this.center[1] - this.scale
               ]
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
                  this.center[0] - this.scale, this.center[1] + this.scale
               ]
            ]
         case 2:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0] - this.scale, this.center[1]
               ],
               [
                  this.center[0] + this.scale, this.center[1]
               ],
               [
                  this.center[0] + this.scale, this.center[1] + this.scale
               ]
            ]
         case 3:
            return [
               [
                  this.center[0], this.center[1]
               ],
               [
                  this.center[0], this.center[1] - this.scale
               ],
               [
                  this.center[0], this.center[1] + this.scale
               ],
               [
                  this.center[0] + this.scale, this.center[1] - this.scale
               ]
            ]
         default:
            break
      }
   }
}
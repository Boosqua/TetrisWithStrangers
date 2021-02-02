document.addEventListener("DOMContentLoaded", () => {

   console.log('loaded')
   let canvas = document.getElementById("game") as HTMLCanvasElement;
   // TESTING
   // GRID
   let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   const width: number = canvas.width;
   const height: number = canvas.height;
   const gridScale: number = canvas.width / 10;
   let i: number = 0;

   while( i <= width){
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
      i += gridScale;
   }


   // PIECES
   // LONG PIECE;
   function drawLongPiece(ctx: CanvasRenderingContext2D): void {
      let pos: Array<number> = [width / 5, 300]
      const center: [number, number] = [pos[0], pos[1] + gridScale * 2]
      interface drawFunc{
         (): void
      }
      interface moves {
         1: drawFunc,
         2: drawFunc,
         3: drawFunc,
         4: drawFunc
      }
      const moves: moves = {
         1: () => {
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.moveTo(...center);
            ctx.lineTo(center[0], center[1] + gridScale * 2);
            ctx.lineTo(center[0] + gridScale, center[1] + gridScale * 2);
            ctx.lineTo(center[0] + gridScale, center[1] - gridScale * 2);
            ctx.lineTo(center[0], center[1] - gridScale * 2);
            ctx.lineTo(...center)
            ctx.stroke()
         },
         2: () => {
            
         },
         3: () => {

         },
         4: () => {

         }
      }
      moves[1]();
   }
   drawLongPiece(ctx)
})
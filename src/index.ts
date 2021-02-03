import Game  from "./game/game"
document.addEventListener("DOMContentLoaded", () => {
   let canvas = document.getElementById("game") as HTMLCanvasElement;
   canvas.height = window.innerHeight * .80;
   canvas.width =  canvas.height / 24 * 10;
   const game: Game = new Game(canvas)


   // TESTING
   // GRID
   // const width: number = canvas.width;
   // let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
   // const height: number = canvas.height;
   // const gridScale: number = canvas.width / 10;
   // ctx.fillStyle = "pink"
   // ctx.fillRect(gridScale * 5, 0, gridScale * 4, gridScale)
   // // ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
   // ctx.globalAlpha = .7
   // ctx.strokeRect(gridScale * 5, 0, gridScale * 4, gridScale)
   // ctx.beginPath();
   // ctx.strokeStyle = "rgba (0, 0, 0, .1)";
   // // ctx.shadowColor = "rgba(0, 0, 0, 1)"
   // // ctx.shadowBlur = 4
   // // ctx.shadowOffsetY = -1

   // ctx.moveTo(gridScale * 5, gridScale)
   // ctx.lineTo(gridScale * 9, gridScale)
   // ctx.stroke()
   // // ctx.closePath()
   // // ctx.restore()
   // ctx.beginPath();
   // // ctx.strokeStyle = "rgba (0, 0, 0, .01)"
   // // ctx.shadowColor = "rgba(0, 0, 0, 1)"
   // // ctx.shadowBlur = 4
   // // ctx.shadowOffsetX = 1
   // // ctx.lineWidth = 2
   // ctx.moveTo(gridScale * 6, 0)
   // ctx.lineTo(gridScale * 6, gridScale)
   // ctx.stroke()
   // ctx.closePath()
   // ctx.beginPath()
   // ctx.moveTo(gridScale * 7, 0)
   // ctx.lineTo(gridScale * 7, gridScale)
   // ctx.stroke()
   // ctx.beginPath()
   // ctx.moveTo(gridScale * 8, 0)
   // ctx.lineTo(gridScale * 8, gridScale)
   // ctx.stroke()
   // ctx.beginPath();
   // ctx.moveTo(gridScale * 5, gridScale)
   // ctx.lineTo(gridScale * 7, gridScale)
   // ctx.shadowColor = "rgba(109, 87, 91, 0.815)";
   // ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
   // ctx.lineWidth = 2
   // ctx.shadowBlur = 2;
   // ctx.shadowOffsetX = 0;
   // ctx.shadowOffsetY = -2;
   // ctx.stroke()
   // ctx.shadowColor = "rgba(0, 0, 0, 0)"
   // ctx.lineWidth = 1
   // ctx.fillRect(gridScale * 6, 0, gridScale, gridScale)
   // ctx.strokeStyle = "rgba(0, 0, 0, 0.541)"
   // ctx.strokeRect(gridScale * 6, 0, gridScale, gridScale)
   // ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
   // ctx.lineWidth = 2
   // ctx.shadowBlur = 2;
   // ctx.shadowOffsetX = 0;
   // ctx.shadowOffsetY = -2;
   // ctx.stroke()
   // ctx.shadowColor = "rgba(0, 0, 0, 0)"
   // ctx.lineWidth = 1
   // ctx.moveTo(gridScale * 6, gridScale)
   // ctx.lineTo(gridScale * 7, gridScale)
   // ctx.shadowColor = "rgba(0, 0, 0, 0.9)";
   // ctx.lineWidth = 2
   // ctx.shadowBlur = 2;
   // ctx.shadowOffsetX = 0;
   // ctx.shadowOffsetY = -2;
   // ctx.stroke()
   // ctx.shadowColor = "rgba(0, 0, 0, 0)"
   // ctx.lineWidth = 1
   // console.log(ctx.lineWidth)
   // ctx.shadowBlur = 0
   // ctx.shadowOffsetX = 0;
   // ctx.shadowOffsetY = 0;
   // ctx.moveTo(gridScale * 5, 0);
   // ctx.lineTo(gridScale * 6, 0);
   // ctx.lineTo(gridScale * 6, gridScale);
   // ctx.shadowColor = "blue";
   // ctx.shadowBlur = 0;
   // ctx.shadowOffsetX = 5;
   // ctx.shadowOffsetY = 5;
   // ctx.lineTo(gridScale * 5, gridScale);
   // ctx.stroke()
   // ctx.shadowBlur = 0
   // ctx.shadowOffsetX = 0;
   // ctx.shadowOffsetY = 0;
   // ctx.lineTo(gridScale * 5, 0);
   // ctx.lineTo(gridScale * 6, 0)
   // ctx.stroke();
   // ctx.fill();
   // ctx.beginPath();

   // ctx.moveTo(gridScale * 6, gridScale);
   // ctx.lineTo(gridScale * 5, gridScale)
   // ctx.shadowColor = "rgb(168, 127, 134)";
   // ctx.shadowBlur = 1;
   // ctx.shadowOffsetX = 0;
   // ctx.shadowOffsetY = -.5;
   // ctx.stroke()
   // PIECES
   // LONG PIECE;
})
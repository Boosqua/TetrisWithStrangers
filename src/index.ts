import Game  from "./game/game"
import testDraw from "./game/utils/test"
document.addEventListener("DOMContentLoaded", () => {
   let canvas = document.getElementById("game") as HTMLCanvasElement;
   canvas.height = Math.floor(window.innerHeight * .80);
   canvas.width =  Math.floor(canvas.height / 24) * 10;

   const game: Game = new Game(canvas) 
})
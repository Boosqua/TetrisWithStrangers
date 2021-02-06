import { offScreenRender, blocks }from "./canvas_util"
const COLORS = ["#0341AE", "#72CB3B", "#FFD500", "#FF971C", "#FF3213"]
export default function testDraw(canvas: HTMLCanvasElement, scale:number): blocks{
   let blocks: blocks = 
   offScreenRender(scale, ["#0341AE", "#72CB3B", "#FFD500", "#FF971C", "#FF3213"])
   let ctx = canvas.getContext("2d");
   // // Line
   // ctx.drawImage(blocks[COLORS[0]], 0, 0)
   // ctx.drawImage(blocks[COLORS[0]], 0, scale)
   // ctx.drawImage(blocks[COLORS[0]], 0, 2 * scale)
   // ctx.drawImage(blocks[COLORS[0]], 0, 3 * scale)
   // // block
   // ctx.drawImage(blocks[COLORS[1]], 2*scale, 0)
   // ctx.drawImage(blocks[COLORS[1]], 2*scale, scale)
   // ctx.drawImage(blocks[COLORS[1]], 3 * scale, 0)
   // ctx.drawImage(blocks[COLORS[1]], 3 * scale, scale)
   // //T
   // ctx.drawImage(blocks[COLORS[2]], 5* scale, 0)
   // ctx.drawImage(blocks[COLORS[2]], 6* scale, 0)
   // ctx.drawImage(blocks[COLORS[2]], 6* scale, scale)
   // ctx.drawImage(blocks[COLORS[2]], 7* scale, 0)
   // // 2 
   // ctx.drawImage(blocks[COLORS[3]], 0, 5 * scale)
   // ctx.drawImage(blocks[COLORS[3]], scale, 5 * scale)
   // ctx.drawImage(blocks[COLORS[3]], scale, 6 * scale)
   // ctx.drawImage(blocks[COLORS[3]], 2 * scale, 6 * scale)
   // // L
   // ctx.drawImage(blocks[COLORS[4]], 4 * scale, 5 * scale)
   // ctx.drawImage(blocks[COLORS[4]], 4 * scale, 6 * scale)
   // ctx.drawImage(blocks[COLORS[4]], 4 * scale, 7 * scale)
   // ctx.drawImage(blocks[COLORS[4]], 5 * scale, 7 * scale)
   return blocks
}
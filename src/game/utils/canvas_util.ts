export interface blocks{
   [colors: string]: OffscreenCanvas
}
export function offScreenRender(
   scale: number, 
   colors: Array<string>
   ): blocks{
   const blocks: blocks = {}
   colors.forEach( (color: string) => {
      let canvas: OffscreenCanvas = new OffscreenCanvas(scale, scale);
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, scale, scale);
      ctx.strokeRect(0, 0, scale, scale);
      ctx.closePath;
      blocks[color] = canvas;
   })
   return blocks
}
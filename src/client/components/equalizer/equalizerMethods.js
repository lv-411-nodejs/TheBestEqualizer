class eaulizerMethods {
    constructor (canvasContext, audioContext, analyser, numPoints, heightArray) {
        this.canvasContext = canvasContext;
        this.audioContext = audioContext;
        this.analyser = analyser;
        this.numPoints = numPoints;
        this.heightArray = heightArray;
        this.flagColor = true;
    }

renderEqualizer = () => {
    this.analyser.getByteFrequencyData(this.heightArray); 
    const width = this.canvasContext.canvas.width;
    const height = this.canvasContext.canvas.height;
    const countcolumns=Math.floor(this.canvasContext.canvas.width/52);
    const columnwidth=Math.floor(5/6*this.canvasContext.canvas.width/52);      
    this.canvasContext.clearRect(0, 0, width, height);
    for (let x =0; x < width; x += countcolumns) {
      const ndx = x * this.numPoints / width | 0;
      const vol = this.heightArray[ndx];
      const y = vol * height / 512;            
       this.roundedRect(this.canvasContext, x, height/2, columnwidth, y, 2, this.flagColor);   
       this.flagColor = !this.flagColor;       
    }    
    requestAnimationFrame(this.renderEqualizer);
  }

roundedRect = (ctx, x, y, width, height, radius, flagColor) => {
    ctx.beginPath();
    ctx.moveTo(x, y-height);
    ctx.lineTo(x, y +height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y-height+radius);
    ctx.arcTo(x + width, y-height, x+width-radius, y - height, radius);
    ctx.lineTo(x +radius, y-height);
    ctx.arcTo(x, y - height, x, y - height+radius, radius);      
    ctx.fillStyle = flagColor ? '#1ecea8' : '#93969f';    
    ctx.fill();      
  }    
}

export default eaulizerMethods;

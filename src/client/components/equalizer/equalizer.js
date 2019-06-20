import React from 'react';
import Hark from 'hark'
import Graphicequaliser from './canvasequalizer/canvasequalizer'
import PlayButton from './playbutton/playbutton'
import Uploadbutton from './upload/uploadbutton'
import Infoabouttrack from './upload/infoaboutfile/infoaboutuploadfile'
import Streambutton from './streambutton/streambutton'
import {connect} from 'react-redux'


class Equalizer extends React.Component {  
   componentDidMount(){ 
      this.detectStreamSoundFrommicrophon();
    }
    
  // createbaseaudiocontextandanaliser=()=>{
  //   var context = new (window.AudioContext || window.webkitAudioContext)();    
  //   var analyser = context.createAnalyser();
  //   this.props.baseaudiocontextandanaliser({context,analyser})
  // }
  
  detectStreamSoundFrommicrophon=()=>{    
    var context = this.props.audiocontext;          
    var audiolinein = new Audio();   
    if (navigator.mediaDevices) {      
      navigator.mediaDevices.getUserMedia ({audio: true})      
      .then((stream)=> {   
        audiolinein.srcObject = stream;
        audiolinein.muted=true;        
          //hark
          var options = {};
          var speechEvents = Hark(stream, options);
          var htmlinfo=document.getElementById("stream_detecting")
      
          speechEvents.on('speaking', function() {           
            htmlinfo.innerHTML=`speaking`
          });
       
          speechEvents.on('stopped_speaking', function() {
            htmlinfo.innerHTML=`no stream detekting`
          });
          var sourcestream = context.createMediaStreamSource(stream);                           
          this.props.createstreamdata({audiolinein,sourcestream})          
      })
      .catch(function(err) {
          console.log('The following gUM error occured: ' + err);
      });
  } else {
     console.log('getUserMedia not supported on your browser!');
  }  
  }  

  widthMerge=(e)=>{   
    this.props.mergecanvaswidth(e)
  }     

  playSoundFromFile=(e)=>{
    const soundfromfile=this.props.audionodefromfile    
    if (this.props.playpausestate===false) {     
      soundfromfile.play();
      this.equaliserRun()
      this.props.playpausesoundfromfile()
    } else {      
      soundfromfile.pause();
      this.props.playpausesoundfromfile();
  }}

  startMuteStream =()=>{    
    const audionstream=this.props.audiostream; 
    const context=this.props.audiocontext;
    const analyser=this.props.analyser  
    const sourcestream=this.props.sourcestream
          
    if (this.props.startmutesstate===false) { 
      sourcestream.connect(analyser);
      analyser.connect(context.destination); 
      //play/pause function doesn't work 
      audionstream.play();
      this.equaliserRun()
      this.props.startMuteStreamAudio()
    } else { 
      sourcestream.disconnect(analyser);
      audionstream.pause();
      this.props.startMuteStreamAudio();
  }
  }

  equaliserRun=(e)=>{   
    const ctx = document.querySelector("canvas").getContext("2d");
    // var ctx=this.props.graphiccontext;
    let flagColorColumn=true;
    const analyser=this.props.analyser
    
    const numPoints = analyser.frequencyBinCount-80;
    const heightArray = new Uint8Array(numPoints);
    function render() {
      analyser.getByteFrequencyData(heightArray);
      
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;
      const countcolumns=Math.floor(ctx.canvas.width/52);
      const columnwidth=Math.floor(5/6*ctx.canvas.width/52);
      
      ctx.clearRect(0, 0, width, height);
      for (let x =0; x < width; x += countcolumns) {
        const ndx = x * numPoints / width | 0;
        const vol = heightArray[ndx];
        const y = vol * height / 512;            
         roundedRect(ctx, x, height/2, columnwidth, y, 2)          
      }    
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    
    function roundedRect(ctx, x, y, width, height, radius) {
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
      // ctx.stroke();
      ctx.fillStyle =flagColorColumn ? '#1ecea8' : '#93969f';
      flagColorColumn =!flagColorColumn;
      ctx.fill();      
    }     
  } 

  uploadSoundInfoFromFile=(e)=>{  
    const file=e.target.files[0]
    const context=this.props.audiocontext;
    const analyser=this.props.analyser;    
    const audio = new Audio();   
        audio.loop = true;       
        audio.crossOrigin = "anonymous";
        audio.addEventListener('canplay', function() {
          try {
            var source = context.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(context.destination);
          } catch (e) {
            console.log(e.toString());
          }
        });
        audio.addEventListener('error', function(e) {
          console.log(e.toString(),'ERORA');
        });
        audio.src = URL.createObjectURL(file)
        this.props.createAudioData({audio,file,source,name:file.name,size: file.size, type:file.type})   
      }  

  render(){   
  return (    
    <div className="App">      
      <Streambutton onclickhandler={this.startMuteStream} /><span id="stream_detecting"></span>
      <PlayButton hadlesound={this.playSoundFromFile}/>
      <Graphicequaliser width={this.props.widthCanvas} height="200" onchange={this.widthMerge}/>
      <Uploadbutton handleinfofromsound={this.uploadSoundInfoFromFile}/>
      <Infoabouttrack trackname={this.props.trackname} tracksize={this.props.tracksize} tracktype={this.props.tracktype} />
    </div>
  );
  }
}
function mapstate(state){
  return state
}
function storeDispatch(dispatch){
  return {
      baseaudiocontextandanaliser: (data)=>dispatch({type: 'baseaudiocontextandanaliser', payload: data}),
      createAudioData: (data)=>dispatch({type: 'createaudiodata', payload: data}),  
      playpausesoundfromfile: ()=>dispatch({type: 'playpausesoundfromfile'}),
      createstreamdata: (data)=>dispatch({type: 'createstreamdata', payload: data}),
      startMuteStreamAudio: ()=>dispatch({type: 'startMuteStreamAudio'}),
      mergecanvaswidth: (e)=>dispatch({type:'mergecanvaswidth', payload: e.target.value})   
  }
}  

export default connect(mapstate, storeDispatch)(Equalizer)
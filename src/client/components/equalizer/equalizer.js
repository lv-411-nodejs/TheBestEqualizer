import React from 'react';
import Hark from 'hark';
import PropTypes from 'prop-types';
import Graphicequaliser from './canvasequalizer/canvasequalizer';
import PlayButton from './playbutton/playbutton';
import Uploadbutton from './upload/uploadbutton';
import Infoabouttrack from './upload/infoaboutfile/infoaboutuploadfile';
import Streambutton from './streambutton/streambutton';
import {connect} from 'react-redux';
import {createAudioData, playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth } from './redux/actions';


class Equalizer extends React.Component {  
   componentDidMount(){ 
      this.detectStreamSoundFromMicrophon();
    }
   
  detectStreamSoundFromMicrophon=()=>{    
    const context = this.props.audiocontext;          
    const audiolinein = new Audio();   
    if (navigator.mediaDevices) {      
      navigator.mediaDevices.getUserMedia ({audio: true})      
      .then((stream)=> {   
        audiolinein.srcObject = stream;
        audiolinein.muted=true;        
          //hark
          const options = {};
          const speechEvents = Hark(stream, options);
          const htmlinfo=document.getElementById("stream_detecting")
      
          speechEvents.on('speaking', function() {           
            htmlinfo.innerHTML=`speaking`
          });
       
          speechEvents.on('stopped_speaking', function() {
            htmlinfo.innerHTML=`no stream detekting`
          });
          const sourcestream = context.createMediaStreamSource(stream);                           
          this.props.createStreamData({audiolinein,sourcestream})          
      })
      .catch(function(err) {
          console.log('The following gUM error occured: ' + err);
      });
  } else {
     console.log('getUserMedia not supported on your browser!');
  }  
  }  

  widthMerge=(e)=>{   
    this.props.mergeCanvasWidth(e)
  }     

  playSoundFromFile=(e)=>{
    const soundfromfile=this.props.audionodefromfile    
    if (this.props.playpausestate===false) {     
      soundfromfile.play();
      this.equaliserRun()
      this.props.playPauseSoundFromFile()
    } else {      
      soundfromfile.pause();
      this.props.playPauseSoundFromFile();
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


FormComponent.propTypes = {
  createAudioData: PropTypes.func.isRequired,
  playPauseSoundFromFile: PropTypes.func.isRequired,
  createStreamData: PropTypes.func.isRequired,
  startMuteStreamAudio: PropTypes.func.isRequired,
  mergeCanvasWidth: PropTypes.func.isRequired,
  audioData: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  audioData: state.audioData  
})

export default connect(mapStateToProps, {createAudioData, playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth })(Equalizer)
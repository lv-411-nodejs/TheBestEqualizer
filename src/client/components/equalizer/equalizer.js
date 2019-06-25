import React, { Component } from 'react';
import Hark from 'hark';
import PropTypes from 'prop-types';
import Graphicequaliser from './canvasequalizer/canvasequalizer';
import PlayButton from './playbutton/playbutton';
import Uploadbutton from './upload/uploadbutton';
import Infoabouttrack from './upload/infoaboutfile/infoaboutuploadfile';
import Streambutton from './streambutton/streambutton';
import { connect } from 'react-redux';
import { createAudioData, playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth } from '../../actions/audioactions';


class Equalizer extends Component {  
   componentDidMount(){ 
      this.detectStreamSoundFromMicrophon();
    }
  
  createSoundStream = (stream) => {
    const { audioContext: context } =  this.props.audioData;           
    const audioLineIn = new Audio(); 
    
    audioLineIn.srcObject = stream;
    audioLineIn.muted=true;        
    //hark - JS module that listens to an audio stream, and emits events indicating whether the user is speaking or not 
    const options = {};
    const speechEvents = Hark(stream, options);
    const htmlinfo=document.getElementById("stream_detecting");      
    speechEvents.on('speaking', ()=>{           
            htmlinfo.innerHTML=`speaking`;
          });
       
    speechEvents.on('stopped_speaking', ()=>{
            htmlinfo.innerHTML=`no stream detekting`;
          });
    const sourceStream = context.createMediaStreamSource(stream);                           
    this.props.createStreamData({audioLineIn: audioLineIn, sourceStream});
  }  

  detectStreamSoundFromMicrophon = () => {
    if (navigator.mediaDevices) {      
      navigator.mediaDevices.getUserMedia ({audio: true})      
      .then(stream => this.createSoundStream(stream))
      .catch((e) => {
        throw new Error(e);
      });
  } else {
    throw new Error('browser doesnt support audio API');
  }  
  }  

  widthMerge=(e)=>{   
    this.props.mergeCanvasWidth(e);
  }     

  playSoundFromFile=(e)=>{
    const {audioFromFile: soundfromfile, playPauseState} = this.props.audioData;    
    if (!playPauseState) {     
      soundfromfile.play();
      this.equaliserRun();     
    } else {      
      soundfromfile.pause();   
  }
    this.props.playPauseSoundFromFile();
  }

  startMuteStream =()=>{    
    const {audioStream, audioContext, analyser, streamSource, startMuteState} = this.props.audioData; 
                 
    if (startMuteState === false) { 
      streamSource.connect(analyser);
      analyser.connect(audioContext.destination); 
      //play/pause function doesn't work 
      audioStream.play();
      this.equaliserRun();
      this.props.startMuteStreamAudio();
    } else { 
      streamSource.disconnect(analyser);
      audioStream.pause();
      this.props.startMuteStreamAudio();
  }
  }

  equaliserRun=(e)=>{   
    const ctx = document.querySelector("canvas").getContext("2d");   
    let flagColorColumn=true;
    const {analyser} = this.props.audioData;    
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
         roundedRect(ctx, x, height/2, columnwidth, y, 2);          
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
      ctx.fillStyle =flagColorColumn ? '#1ecea8' : '#93969f';
      flagColorColumn =!flagColorColumn;
      ctx.fill();      
    }     
  } 

  uploadSoundInfoFromFile=(e)=>{  
    const file=e.target.files[0];

    const {audioContext: context, analyser} = this.props.audioData;
     
    const audio = new Audio();   
        audio.loop = true;       
        audio.crossOrigin = "anonymous";
        audio.src = URL.createObjectURL(file);
        audio.addEventListener('canplay', ()=> {
          try {
            const source = context.createMediaElementSource(audio);
            
            this.props.createAudioData({audio, file, source, name:file.name, size: file.size, type:file.type});
            source.connect(analyser);
            analyser.connect(context.destination);
          } catch (e) {
            throw new Error(e);
          }
        });
        audio.addEventListener('error', function(e) {
          throw new Error(e);
        });
      }  

  render(){   
  return (    
    <div className="graphic_equalizer">      
      <Streambutton onclickhandler={this.startMuteStream} /><span id="stream_detecting"></span>
      <PlayButton hadlesound={this.playSoundFromFile}/>
      <Graphicequaliser width={this.props.audioData.widthCanvas} height={this.props.audioData.heightCanvas} onChangeWidth={this.widthMerge}/>
      <Uploadbutton handleInfoFromSound={this.uploadSoundInfoFromFile}/>
      <Infoabouttrack trackname={this.props.audioData.trackName} tracksize={this.props.audioData.trackSize} tracktype={this.props.audioData.trackType} />
    </div>
  );
  }
}

Equalizer.propTypes = {
  createAudioData: PropTypes.func.isRequired,
  playPauseSoundFromFile: PropTypes.func.isRequired,
  createStreamData: PropTypes.func.isRequired,
  startMuteStreamAudio: PropTypes.func.isRequired,
  mergeCanvasWidth: PropTypes.func.isRequired,
  audioData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({  
  audioData: state.audioData  
});

export default connect(mapStateToProps, { createAudioData, playPauseSoundFromFile, createStreamData, startMuteStreamAudio, mergeCanvasWidth })(Equalizer);

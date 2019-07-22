import Pizzicato from 'pizzicato';

const createSoundInfoInState = (sound, file, props) => {
  const { audioData: { analyser } } = props;
  sound.connect(analyser);
  props.createAudioDataAsProp({
    sound,
    trackName: file.name,
  });
};

const attachFiltersToSource = (sourceInput, blocksData) => blocksData.forEach((
  {
    createEffect,
    isVisible,
  },
) => isVisible && sourceInput.addEffect(createEffect));

const removeSoundFilters = (props) => {
  const { audioData: { sound }, playPauseSoundFromFileAsProp } = props;
  sound.effects.length && props.blocksData.forEach((
    {
      createEffect,
      isVisible,
    },
  ) => isVisible && sound.removeEffect(createEffect));
  sound.playing && playPauseSoundFromFileAsProp();
  sound.stop();
};

export const uploadSoundInfoFromFile = (eventFromInputFile, props) => {
  const {
    audioData: {
      sound: storeSound,
      onToggle,
    },
    blocksData,
    startCreationAudioDataAsProp,
  } = props;
  startCreationAudioDataAsProp && startCreationAudioDataAsProp();
  const [file] = eventFromInputFile.length ? eventFromInputFile : eventFromInputFile.target.files;
  const audioFile = new Audio(URL.createObjectURL(file));
  const sound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: audioFile.src,
      loop: false,
    },
  }, () => {
    storeSound && removeSoundFilters(props);
    !onToggle && attachFiltersToSource(sound, blocksData);
    createSoundInfoInState(sound, file, props);
  });
};

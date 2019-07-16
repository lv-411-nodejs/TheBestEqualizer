import {
  CREATE_AUDIO_DATA,
  START_CREATION_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
} from './types';

import {
  createAudioData,
  startCreationAudioData,
  playPauseSoundFromFile,
  createStreamData,
  startMuteStreamAudio,
  mergeCanvasWidth,
} from './audioActions';

describe('TEST AUDIO ACTIONS', () => {
  it('CREATE AUDIO DATA', () => {
    const expectedAction = {
      type: CREATE_AUDIO_DATA,
      payload: 'audioData',
    };
    const dispatch = jest.fn(action => action);
    expect(createAudioData('audioData')(dispatch))
      .toEqual(expectedAction);
  });

  it('START CREATION AUDIO DATA', () => {
    const expectedAction = {
      type: START_CREATION_AUDIO_DATA,
    };
    const dispatch = jest.fn(action => action);
    expect(startCreationAudioData()(dispatch))
      .toEqual(expectedAction);
  });

  it('PLAY OR PAUSE SOUND FROM FILE', () => {
    const expectedAction = {
      type: PLAY_PAUSE_SOUND_FROM_FILE,
    };
    const dispatch = jest.fn(action => action);
    expect(playPauseSoundFromFile()(dispatch))
      .toEqual(expectedAction);
  });

  it('CREATE STREAME DATA', () => {
    const expectedAction = {
      type: CREATE_STREAME_DATA,
    };
    const dispatch = jest.fn(action => action);
    expect(createStreamData()(dispatch))
      .toEqual(expectedAction);
  });

  it('START MUTE STREAME VOICE', () => {
    const expectedAction = {
      type: START_MUTE_STREAME_AUDIO,
    };
    const dispatch = jest.fn(action => action);
    expect(startMuteStreamAudio()(dispatch))
      .toEqual(expectedAction);
  });

  it('MERGE CANVAS WIDTH', () => {
    const event = {
      preventDefault() {},
      target: { value: 500 },
    };

    const expectedAction = {
      type: MERGE_CANVAS_WIDTH,
      payload: 500,
    };

    const dispatch = jest.fn(action => action);
    expect(mergeCanvasWidth(event)(dispatch))
      .toEqual(expectedAction);
  });
});

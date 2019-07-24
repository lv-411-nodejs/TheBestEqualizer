import {
  SET_VISIBILITY,
} from './types';

import {
  setVisibility
} from './blocksActions';

describe('TEST BLOCKS ACTIONS', () => {
  it('should dispatch action SET_VISIBILITY', () => {
    const expectedAction = {
      type: SET_VISIBILITY,
      blockName: 'Delay'
    };
    expect(setVisibility('Delay')).toEqual(expectedAction);
  });
});

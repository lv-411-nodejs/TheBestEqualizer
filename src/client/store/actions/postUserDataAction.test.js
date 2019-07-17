import configureMockStore from 'redux-mock-store';
import 'babel-polyfill';
import thunk from 'redux-thunk';
import axios from 'axios';

import {
  AUTH_START,
  POST_USER_DATA,
  AUTH_FAIL,
} from './types';

import {
  postUserData,
} from './postUserDataAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('TEST POST ACTIONS', () => {
  describe('ASYNC POST ACTION', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
    });

    it('CREATE POST USER DATA', async () => {
      axios.post = jest.fn()
        .mockImplementation(() => Promise.resolve());

      const expectedActions = [{
        type: AUTH_START,
      },
      {
        status: 'Success authentification',
        type: POST_USER_DATA,
      },
      ];

      const store = mockStore({});

      return store.dispatch(postUserData(() => {
        expect(store.getActions()).toEqual(expectedActions);
      }));
    });

    it('CREATE POST USER DATA', async () => {
      const response = {
        status: 404,
        response: {
          data: { error: 'fakeError' },
        },
      };
      axios.post = jest.fn()
        .mockImplementation(() => Promise.reject(response));

      const expectedActions = [{
        type: AUTH_START,
      },
      {
        status: 'Authentification was failed',
        type: AUTH_FAIL,
      },
      ];

      const store = mockStore({});

      return store.dispatch(postUserData(() => {
        expect(store.getActions()).toEqual(expectedActions);
      }));
    });
  });
});

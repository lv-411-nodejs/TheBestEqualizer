import configureMockStore from 'redux-mock-store';

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
jest.mock('axios');

describe('test async post action', () => {
  let mockAxiosPost;
  beforeEach(() => {
    mockAxiosPost = jest.spyOn(axios, 'post');
    jest.resetAllMocks();
  });

  it('should dispatch actions `create post user data` which recieve valid token', async () => {
    const response = {
      data: {
        username: 'fakeName',
        token: {
          access: 'fakeToken1234',
        },
        error: 'fakeError',
      },
    };
    const expectedActions = [{
      type: AUTH_START,
    },
    {
      type: POST_USER_DATA,
      username: 'fakeName',
    },
    ];
    const store = mockStore({});

    mockAxiosPost.mockImplementationOnce(() => response);

    await store.dispatch(postUserData('fakepPath', 'fakeUser', []));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions `create post user data` which recieve denny access', async () => {
    const response = {
      data: {
        username: 'fakeName',
        token: {
          access: null,
        },
        error: 'fakeError',
      },
    };
    const expectedActions = [{
      type: AUTH_START,
    },
    ];
    const store = mockStore({});

    mockAxiosPost.mockImplementationOnce(() => response);

    await store.dispatch(postUserData('fakepPath', 'fakeUser', []));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch actions `create post user data` which call exception', async () => {
    const response = {
      response: {
        data: {
          username: 'fakeName',
          token: {
            access: 'fakeToken1234',
          },
          error: 'fakeError',
        },
      },
    };
    const expectedActions = [
      {
        type: AUTH_START,
      },
      {
        type: AUTH_FAIL,
        error: 'fakeError',
      },
    ];
    const store = mockStore({});

    mockAxiosPost.mockRejectedValueOnce(response);

    await store.dispatch(postUserData('fakepPath', 'fakeUser', []));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

import configureMockStore from 'redux-mock-store'
import "babel-polyfill"
import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import {
  AUTH_START,
  POST_USER_DATA,
  AUTH_FAIL,
} from '../actions/types';

import {
  authStart,
  authSuccess,
  authFail,
  postUserData,
} from './postUserDataAction';

describe('TEST POST ACTIONS', () => {
  const failUserData = {
    body: {
      email: 'fakeEmail@fake.server',
      password: '1111'
    }
  }
  const fakeHistory = jest.fn(() => [])

  describe('ASYNC POST ACTION', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      jest.restoreAllMocks();
      })


      it('CREATE POST USER DATA', () => {      

        jest.mock('axios', () => {
          const failUserData = {
            body: {
              email: 'fakeEmail@fake.server',
              password: '1111'
            }
          }
  
          const baseUrl = 'http://localhost:8080';
          const response = {
            status: 200,
            body: {
              data: {
                status: "Success authentification",               
              }
            }
          }
          const myMock = jest.fn();
  
          myMock.post = jest.fn((...response) => response);
          const faikeResult = myMock.post(baseUrl, response, failUserData)
          return {
            __esModule: true,
            default: faikeResult,
          }
        })
  
        const expectedActions = [{
            type: AUTH_START,
          },
          // {
          //   type: POST_USER_DATA,
          //   status: "Success authentification",            
          // },
        ]
  
        const store = mockStore({})
  
        return store.dispatch(postUserData('/login', failUserData, fakeHistory)).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    // it('CREATE POST USER DATA', () => {      

    //   jest.mock('axios', () => {
    //     const failUserData = {
    //       body: {
    //         email: 'fakeEmail@fake.server',
    //         password: '1111'
    //       }
    //     }

    //     const baseUrl = 'http://localhost:8080';
    //     const response = {
    //       status: 404,
    //       body: {
    //         data: {
    //           error: "Login failed"
    //         }
    //       }
    //     }
    //     const myMock = jest.fn();

    //     myMock.post = jest.fn((...response) => response);
    //     const faikeResult = myMock.post(baseUrl, response, failUserData)
    //     return {
    //       __esModule: true,
    //       default: faikeResult,
    //     }
    //   })

    //   const expectedActions = [{
    //       type: AUTH_START,
    //     },
    //     {
    //       type: AUTH_FAIL,
    //       status: 'Authentification was failed',
    //       error: "Login failed"
    //     },
    //   ]

    //   const store = mockStore({})

    //   return store.dispatch(postUserData('/login', failUserData, fakeHistory)).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions)
    //   })
    // })

  })
})
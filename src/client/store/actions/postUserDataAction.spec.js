import configureMockStore from 'redux-mock-store'
import "babel-polyfill"
import thunk from 'redux-thunk' 
import fetchMock from 'fetch-mock'

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
    
    describe('ASYNC POST ACTION', () => {  
        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
          })
          const baseUrl = 'http://localhost:8080';

    //     it('CREATE POST USER DATA', () => {
            
    //         const failUserData = {
    //             body: {
    //             email: 'fakeEmail@fake.server', 
    //             receivedPassword: '1111'}
    //         }
    //         const fakeHistory = jest.fn(() => [])    
    //         const responce = {status: 200, token: 'fakeToken'}
    //         fetchMock.postOnce(`http://localhost:8080/login`, responce, (failUserData, fakeHistory)) 

    //         const expectedActions = [
    //             {
    //               type: AUTH_START,
    //             },
    //             {
    //               type: POST_USER_DATA,
    //               status: 'Success authentification', 
    //             },
    //           ]

    //           const store = mockStore({})
              

    //     return store.dispatch(postUserData('/login', failUserData, fakeHistory)).then(() => {
    //         expect(store.getActions()).toEqual(expectedActions)
    //     }) 
    // })

    it('CREATE POST USER DATA', () => {
            
        const failUserData = {
            body: {
            email: 'fakeEmail@fake.server', 
            password: '1111'}
        }
        const fakeHistory = jest.fn(() => [])    
        const response = {status: 404, body: {data: {error: "Login failed"}}}
        fetchMock.postOnce(`http://localhost:8080/login`, response, failUserData) 

        

        const expectedActions = [
            {
              type: AUTH_START,
            },
            {
              type:  AUTH_FAIL,
              status: 'Authentification was failed',
              error: "Login failed" 
            },
          ]

          const store = mockStore({})
          

    return store.dispatch(postUserData('/login', failUserData, fakeHistory)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    }) 
})

  })
})
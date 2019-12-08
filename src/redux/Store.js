import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';

// import reducer from './../reducer';
import authUser from './reducers/Users';
import assets from './reducers/Assets';

const reducer = combineReducers({
  authUser
  assets
})

const client = axios.create({
  baseURL: 'https://dev.crannypark.pw/',
  responseType: 'json'
})

const middlewareConfig = {
  interceptors: {
    request: [{
      success: function ({getState, dispatch, getAction}, req) {
        auth = getState().authUser
        if (auth != null) {
          req.baseURL += "api/"
          req.auth = {
            username: auth.username,
            password: auth.api_key_plain
          }
        }
        req.url += '.json'
        return req;
      }
    }
    ]
  }
}

export const Store = createStore(reducer, applyMiddleware(axiosMiddleware(client,middlewareConfig)));

console.log(Store.getState())
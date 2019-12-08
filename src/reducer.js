// patern : https://github.com/erikras/ducks-modular-redux
export const GET_REPOS = 'axiostest/repos/LOAD';
export const GET_REPOS_SUCCESS = 'axiostest/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'axiostest/repos/LOAD_FAIL';
export const LOGIN = 'axiostest/users/LOGIN';
export const LOGIN_SUCCESS = 'axiostest/users/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'axiostest/users/LOGIN_FAIL';
export const SET_USER = 'axiostest/users/SET_USER';

export default function reducer(state = { assets: [], authUser: null }, action) {
  switch (action.type) {

    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, authUser: action.payload.data.user };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.error };

    case SET_USER:
      return { ...state, loading: false, authUser: action.authUser };

    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      console.log('assets',action)
      return { ...state, loading: false, assets: action.payload.data.assets };
    case GET_REPOS_FAIL:
      console.log('errror',action)
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export function listAssets(data) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        method: 'post',
        url: 'assets/index',
        data: data
      }
    }
  };
}

export function setUser(authUser) {
  console.log('set action authUser',authUser)
  return {
    type: SET_USER,
    authUser
  };
}

export function login(user,pass) {
  return {
    type: LOGIN,
    payload: {
      request: {
        method: 'post',
        url: 'users/loginApi',
        data: {
          username:user,
          password:pass
        }
      }
    }
  };
}
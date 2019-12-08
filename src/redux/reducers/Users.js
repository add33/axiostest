// patern : https://github.com/erikras/ducks-modular-redux
export const LOGIN = 'axiostest/users/LOGIN';
export const LOGIN_SUCCESS = 'axiostest/users/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'axiostest/users/LOGIN_FAIL';
export const SET_USER = 'axiostest/users/SET_USER';

export default function reducer(state = {}, action) {
  switch (action.type) {

    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, authUser: action.payload.data.user };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.error };

    case SET_USER:
      return { ...action.authUser };

    default:
      return state;
  }
}

export function setUser(authUser) {
  console.log('set authUser',authUser)
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
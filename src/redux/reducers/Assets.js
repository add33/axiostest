// patern : https://github.com/erikras/ducks-modular-redux
export const GET_ASSETS = 'axiostest/assets/LOAD';
export const GET_ASSETS_SUCCESS = 'axiostest/assets/LOAD_SUCCESS';
export const GET_ASSETS_FAIL = 'axiostest/assets/LOAD_FAIL';

export default function reducer(state = [], action) {
  switch (action.type) {

    case GET_ASSETS:
      console.log('GET_ASSETS',action)
      return [];
    case GET_ASSETS_SUCCESS:
      console.log('assets',action)
      return action.payload.data.assets;
    case GET_ASSETS_FAIL:
      console.log('errror',action)
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export function listAssets(data) {
  return {
    type: GET_ASSETS,
    payload: {
      request: {
        method: 'post',
        url: 'assets/index',
        data: data
      }
    }
  };
}
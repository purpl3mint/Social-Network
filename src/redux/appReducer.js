import { getAuthUserData } from './authReducer';
const INITIALIZED_SUCCESS = 'SET-SUCCESS';

let initialState = {
  initialized: null,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true
      }
    }
  }

  return state;
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => { dispatch(initializedSuccess()); });
}

export default appReducer;
import createDataContext from './createDataContext';

let INITIAL_STATE = {
  user: null,
  token: null,
  is_authenticated: false,
  error: null,
  loading: false,
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case 'REJECTED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'SAVE':
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        is_authenticated: true,
        loading: false,
        error: null,
      };
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        error: null,
      };
    case 'PENDING':
      return { ...state, loading: true, error: null };
    case 'SIGNOUT':
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};

const save = (dispatch) => async (data) => {
  try {
    dispatch({ type: 'PENDING' });

    localStorage.setItem('token', data.access_token);

    dispatch({ type: 'SAVE', payload: data });
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: error,
    });
  }
};

const logout = (dispatch) => async () => {
  try {
    dispatch({ type: 'PENDING' });
    localStorage.clear();
    dispatch({ type: 'SIGNOUT' });
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: error,
    });
  }
};

const clear_error_message = (dispatch) => async () => {
  try {
    dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
  } catch (error) {
    dispatch({
      type: 'REJECTED',
      payload: error,
    });
  }
};

export const { Provider: UserProvider, Context: UserContext } =
  createDataContext(
    'USER',
    UserReducer,
    { save, logout, clear_error_message },
    INITIAL_STATE
  );

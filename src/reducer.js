import { notificationTypes as types, CLEAR, REMOVE } from './constants';

export const initialState = {
  notifications: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOADING:
    case types.ERROR:
    case types.INFO:
    case types.WARNING:
    case types.DEFAULT:
    case types.SUCCESS:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    case CLEAR:
      return initialState;
    case REMOVE:
      return {
        ...state,
        notifications: state.notifications.filter(record => record.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducer;

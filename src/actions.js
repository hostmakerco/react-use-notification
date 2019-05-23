import { REMOVE, CLEAR } from './constants';

const actions = (dispatch) => {
  return {
    show: (type, payload) => dispatch({ type, payload }),
    remove: (id) => dispatch({ type: REMOVE, payload: id }),
    clear: () => dispatch({ type: CLEAR })
  };
};

export default actions;

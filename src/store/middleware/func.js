//THUNK
//npm i redux-thunk
const func = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === "function") {
    action(dispatch, getState);
  } else {
    next(action);
  }
};

export { func };

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// import { reducer } from './bugs'
import { reducer } from "./reducer";
import { logger } from "./middleware/logger";
// import { func } from "./middleware/func";

// import { reducer as projectReducer } from './projects'

// const store = createStore(reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({ trace: true }))

// export default store;

export default function () {
  return configureStore({
    reducer,
    // middleware: [logger("console"), func],
    middleware: [...getDefaultMiddleware(), logger("console")]
  });
  // return configureStore({ reducer, projectReducer })
}

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';

// import { reducer } from './bugs'
import { reducer } from "./reducer";
import { logger } from "./middleware/logger";
import { toast } from "./middleware/toast";
import { api } from "./middleware/api";

// import logger from "redux-logger";
// import { func } from "./middleware/func";

// import { reducer as projectReducer } from './projects'

// const store = createStore(reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({ trace: true })

// export default store;

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(logger())
        .concat(toast())
        .concat(api()),
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(logger2({ destination: "Hi5" })),
    // middleware: [logger("console"), func],
    // middleware: [...getDefaultMiddleware(), logger({destination: "Hi5"})]
  });
  // return configureStore({ reducer, projectReducer })
}

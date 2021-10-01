import { configureStore } from '@reduxjs/toolkit';

// import { createStore } from 'redux'; 
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './bugs'

// const store = createStore(reducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     devToolsEnhancer({ trace: true }))

// export default store;

export default function () {
    return configureStore({ reducer })
}
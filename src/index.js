// import store from './store'
// import * as actions from './actionTypes'
// import { bugAdded, bugRemoved, bugResolved } from './actions'


// store.subscribe(() => {
//     console.log("Store changed!", store.getState())
// })

// store.dispatch(bugAdded("Bug 1"))

// // store.dispatch(bugRemoved(1))

// store.dispatch(bugResolved(1))

// console.log(store.getState())

import configureStore from './store/configureStore';
import * as actions from './store/bugs';

const store = configureStore()

store.subscribe(() => {
    console.log("Store changed!")
})

store.dispatch(actions.bugAdded({ description: "Bug 1" }))
store.dispatch(actions.bugAdded({ description: "Bug 2" }))
store.dispatch(actions.bugAdded({ description: "Bug 3" }))
store.dispatch(actions.bugResolved({ id: 1 }))

console.log(store.getState())
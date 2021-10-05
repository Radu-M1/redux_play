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

import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssigned,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import * as projectActions from "./store/projects";
import { userAdded, userRemoved } from "./store/users";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(userAdded({ name: "User 3" }));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugAssigned({ bugId: 2, userId: 1 }));

// store.dispatch(projectActions.projectAdded({ name: "Project 1" }));
// store.dispatch(projectActions.projectAdded({ name: "Project 2" }));
// store.dispatch(projectActions.projectAdded({ name: "Project 3" }));
// store.dispatch(projectActions.projectRemoved({ id: 2 }));

// console.log(store.getState())
// const unresolvedBugs =
//     store.getState().entities.bugs.filter(bug => !bug.resolved)
const unresolvedBugs = getUnresolvedBugs(store.getState());
const unresolvedBugs2 = getUnresolvedBugs(store.getState());

const user1Bugs = getBugsByUser(1)(store.getState());

// console.log(user1Bugs);
// console.log(store.getState())

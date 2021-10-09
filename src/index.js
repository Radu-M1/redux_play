import { createAction } from "@reduxjs/toolkit";
import configureStore from "./store/configureStore";

import * as actions from "./store/api";

// import {
//   bugAdded,
//   bugRemoved,
//   bugResolved,
//   bugAssigned,
//   getUnresolvedBugs,
//   getBugsByUser,
// } from "./store/bugs";
// import * as projectActions from "./store/projects";
// import { userAdded, userRemoved } from "./store/users";

// const store = configureStore();

// store.subscribe(() => {
//   console.log("Store changed!");
// });

// store.dispatch(userAdded({ name: "User 1" }));

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// const unresolvedBugs2 = getUnresolvedBugs(store.getState());

// const user1Bugs = getBugsByUser(1)(store.getState());

// // console.log(user1Bugs);
// // console.log(store.getState())

const store = configureStore();

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
//   console.log(getState());
// });

// store.dispatch({
//   type: "error",
//   payload: { message: "An error occured." },
// });

// const action = {
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     // method: "get",
//     // data: {},
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// };

const action = actions.apiCallBegan({
  url: "/bugs",
  onSuccess: "bugsReceived",
  // onError: actions.apiCallFailed.type
});

store.dispatch(action);

// const store = configureStore();

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
//   console.log(getState());
// });

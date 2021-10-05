import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
        // assignedMember: null
      });
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state.splice(index, 1);
    },
    bugAssigned: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.findIndex((bug) => bug.id === bugId);
      state[index].userId = userId;
    },
  },
});

// console.log(slice)

export const reducer = slice.reducer;
export const { bugAdded, bugRemoved, bugResolved, bugAssigned } = slice.actions;

//Selector function
// export const getUnresolvedBugs = state =>
//     state.entities.bugs.filter(bug => !bug.resolved)

//Memorization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    // state => state.entities.projects,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

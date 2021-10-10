import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

// let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (state, action) => {
      state.loading = true;
    },
    bugsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    bugsRequestFailed: (state, action) => {
      state.loading = false;
    },
    bugAdded: (state, action) => {
      // state.list.push({
      //   id: ++lastId,
      //   description: action.payload.description,
      //   resolved: false,
      //   // assignedMember: null
      // });
      state.list.push(action.payload);
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list.splice(index, 1);
    },
    bugAssigned: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);
      state.list[index].userId = userId;
    },
  },
});

// console.log(slice)

export const reducer = slice.reducer;
export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssigned,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;

//Action Creator
const url = "/bugs";

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  // console.log(lastFetch);

  const diffMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffMinutes < 10) {
    return;
  }

  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

// export const loadBugs = () =>
//   apiCallBegan({
//     url,
//     onStart: bugsRequested.type,
//     onSuccess: bugsReceived.type,
//     onError: bugsRequestFailed.type,
//   });

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

export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

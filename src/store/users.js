import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
    userRemoved: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const reducer = slice.reducer;
export const { userAdded, userRemoved } = slice.actions;

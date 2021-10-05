import { combineReducers } from "redux";
import { reducer as bugsReducer } from "./bugs";
import { reducer as projectsReducer } from "./projects";
import { reducer as userReducer } from "./users";

export const reducer = combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: userReducer,
});

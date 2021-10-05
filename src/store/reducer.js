// import { combineReducers } from "redux";
// import { reducer as bugsReducer } from "./bugs";
// import { reducer as projectsReducer} from "./projects"

// export const reducer = combineReducers({
//     bugs: bugsReducer,
//     projects: projectsReducer
// })

import { combineReducers } from "redux";
import { reducer as entitiesReducer } from "./entities";

export const reducer = combineReducers({
  entities: entitiesReducer,
});

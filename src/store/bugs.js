import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import produce from "immer";

// const bugUpdated = createAction("bugUpdated")
// console.log(bugUpdated)


//ACTION TYPES

// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

//ACTIONS

// export function bugAdded(description) {
//     return {
//         type: BUG_ADDED,
//         payload: {
//             description
//         }
//     }
// }

// export const bugAdded = createAction("bugAdded")
// export const bugRemoved = createAction("bugRemoved")
// export const bugResolved = createAction("bugResolved")

// export function bugRemoved(id) {
//     return {
//         type: BUG_REMOVED,
//         payload: {
//             id
//         }
//     }
// }

// export function bugResolved(id) {
//     return {
//         type: BUG_RESOLVED,
//         payload: {
//             id
//         }
//     }
// }

//REDUCER

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (state, action) => {
            state.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id)
            state[index].resolved = true;
        },
        bugRemoved: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id)
            state.splice(index, 1);
        }
    }
})

// console.log(slice)

export const reducer = slice.reducer;
export const {bugAdded, bugRemoved, bugResolved} = slice.actions;


// export const reducer = createReducer([], {
//     //key: value
//     // actions: functions( event => event handler)
//     [bugAdded.type]: (state, action) => {
//         state.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         })
//     },
//     [bugResolved.type]: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id)
//         state[index].resolved = true;
//     },
//     [bugRemoved.type]: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id)
//         state.splice(index, 1);
//     }
// })

// produce(initialState, draftState => {
//     draftState.x = 1;
// })

// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case bugAdded.type: {
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ]
//         }
//         case bugRemoved.type: {
//             return state.filter(bug => bug.id !== action.payload.id)
//         }
//         case bugResolved.type: {
//             return state.map(bug =>
//                 bug.id === action.payload.id ? { ...bug, resolved: true } : bug)
//         }
//         default: {
//             return state;
//         }
//     }
// }

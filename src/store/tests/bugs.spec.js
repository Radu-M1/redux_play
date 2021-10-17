import { addBug } from '../bugs'
import configureStore from '../configureStore'
import 'regenerator-runtime/runtime'

describe("bugSlice", () => {
    it("should handle the addBug action", () => {
        //dispatch(addBug) => store
        const store = configureStore();
        const bug = { description: 'asd' }
        store.dispatch(addBug(bug))
        console.log("state =", store.getState())
    })
})






// import { addBug } from '../bugs'
// import { apiCallBegan } from '../api'

// describe("bugSlice", () => {
//     describe("action creators", () => {
//         it("addBug", () => {
//             const bug = { description: 'A real bug description' }
//             const result = addBug(bug)
//             const expected = {
//                 type: apiCallBegan.type,
//                 payload: {
//                     url: '/bugs',
//                     method: 'post',
//                     data: bug,
//                     onSuccess: 'bugs/bugAdded'
//                 }
//             }
//             expect(result).toEqual(expected)
//         })
//     })
// })
import { addBug, resolveBug, loadBugs, getUnresolvedBugs } from '../bugs'
import configureStore from '../configureStore'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import 'regenerator-runtime/runtime'

describe("bugSlice", () => {
    let fakeAxios
    let store

    beforeEach(() => {
        fakeAxios = new MockAdapter(axios);
        store = configureStore();
    })

    const bugsSlice = () => {
        return store.getState().entities.bugs;
    }

    const createState = () => ({
        entities: {
            bugs: {
                list: []
            }
        }
    })

    it("should add the bug to the store if it's saved to the server", async () => {
        // Arrange
        const bug = { description: 'asd' };
        const savedBug = { ...bug, id: 1 }
        fakeAxios.onPost('/bugs').reply(200, savedBug)

        // Act
        await store.dispatch(addBug(bug));

        //Assert
        expect(bugsSlice().list).toContainEqual(savedBug)
    })

    it("should not add the bug to the store if it's not saved to the server", async () => {
        // Arrange
        const bug = { description: 'asd' };
        // const savedBug = { ...bug, id: 1 }
        fakeAxios.onPost('/bugs').reply(500)

        // Act
        await store.dispatch(addBug(bug));

        //Assert
        expect(bugsSlice().list).toHaveLength(0)
    })

    it("should resolve bug locally on server resolve", async () => {
        const id = 2;
        const bug = { id: id }
        const savedBug = { id: id, resolved: true }
        fakeAxios.onPost('/bugs').reply(200, bug)
        fakeAxios.onPatch(`/bugs/${id}`).reply(200, savedBug)

        await store.dispatch(addBug(bug));
        await store.dispatch(resolveBug(2))

        expect(bugsSlice().list[0].resolved).toBe(true)

    })

    it("should not resolve bug locally on server reject", async () => {
        const id = 2;
        const bug = { id: id }
        const savedBug = { id: id, resolved: true }
        fakeAxios.onPost('/bugs').reply(200, bug)
        fakeAxios.onPatch(`/bugs/${id}`).reply(500)

        await store.dispatch(addBug(bug));
        await store.dispatch(resolveBug(2))

        expect(bugsSlice().list).toContainEqual(bug)

    })

    describe("selectors", () => {
        it("getUnresolvedBugs", async () => {
            const state = createState();
            state.entities.bugs.list = [
                { id: 1, resolved: true },
                { id: 2, resolved: false },
                { id: 3 }
            ]

            const result = getUnresolvedBugs(state)
            
            expect(result).toHaveLength(2)
        })
    })

})

describe("loading bugs", () => {
    let fakeAxios
    let store

    beforeEach(() => {
        fakeAxios = new MockAdapter(axios);
        store = configureStore();
    })

    const bugsSlice = () => {
        return store.getState().entities.bugs;
    }
    describe("if the bugs exist in cache", () => {
        it("they should not be fetched from the server again", async () => {
            fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }])
            await store.dispatch(loadBugs())
            await store.dispatch(loadBugs())

            expect(fakeAxios.history.get.length).toBe(1)
        })
    })
    describe("if the bugs don't exist in cache", () => {
        it("they should be fetched from the server and put in store", async () => {
            fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }])
            await store.dispatch(loadBugs())
            expect(bugsSlice().list).toHaveLength(1)
        })
        describe("loading indicator", () => {
            it("should be true while fetching the bugs", () => {
                // fakeAxios.onGet("/bugs").reply(200, [{id: 1}])
                fakeAxios.onGet("/bugs").reply(() => {
                    expect(bugSlice().loading).toBe(true)
                    return [200, [{ id: 1 }]]
                })
                store.dispatch(loadBugs())
            })
            it("should be false after fetching the bugs", async () => {
                // fakeAxios.onGet("/bugs").reply(200, [{id: 1}])
                fakeAxios.onGet("/bugs").reply(() => {
                    // expect(bugsSlice().loading).toBe(true)
                    return [200, [{ id: 1 }]]
                })
                await store.dispatch(loadBugs())
                expect(bugsSlice().loading).toBe(false)
            })

            it("should be false if server return error", async () => {
                // fakeAxios.onGet("/bugs").reply(200, [{id: 1}])
                fakeAxios.onGet("/bugs").reply(() => {
                    // expect(bugsSlice().loading).toBe(true)
                    return 500
                })
                await store.dispatch(loadBugs())
                expect(bugsSlice().loading).toBe(false)
            })
        })
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
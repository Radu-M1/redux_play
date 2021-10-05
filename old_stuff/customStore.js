import reducer from './bugs'

function createStore(reducer) {
    let state;
    let listeners = [];

    
    function dispatch(action) {
        //call reduced to get the new state

        state = reducer(state, action);
        //notify the subscribers

        for (let i =0; i< listeners.length; i++) {
            listeners[i]()
        }
    
    }

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer)
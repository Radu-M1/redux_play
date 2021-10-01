function add (a, b) {
    return a + b;
}


function add(a) {
    return function(b) {
        return a + b;
    }
}

const add2 = a => b => a + b
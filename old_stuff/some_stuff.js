// // import { compose, pipe } from 'lodash/fp'
// let _ = require('lodash/fp')

// let compose = _.compose;
// let pipe = _.pipe;

// let input = "   Javascript     "
// let output = "<div>" + input.trim() + "</div>"


// //trim
// const trim = str => str.trim();

// const toLowerCase = str => str.toLowerCase()

// //wrap in div
// const wrapInDiv = str => `<div>${str}</div>`

// const wrapInSpan = str => `<span>${str}</span>`

// // wrap = (type, str) => `<${type}>${str}</${type}>`
// wrap = type => str => `<${type}>${str}</${type}>`
// //final func
// // const res = wrapInDiv(toLowerCase(trim(input)))

// // const transform = compose(wrapInDiv, toLowerCase, trim)
// const transform = pipe(trim, toLowerCase, wrap("span"))
// console.log(transform(input))


// const person = {
//     name: 'John',
//     address: {
//         country: "USA",
//         city: "San Francisco"
//     }
// }

// const updated = { ...person, 
//     name: "Bob",
//     address: {
//         ...person.address,
//         city: "New York"
//     }
// }

// // updated.address.city = "New Orleans"

// console.log(updated)

// const numbers = [1, 2, 3];

// const index = numbers.indexOf(2)
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]

// console.log(added)
// // const added = [...numbers, 4];

// //removing
// const removed = numbers.filter(n => n !== 2)

// //updating
// const updated = numbers.map(n => n === 2 ? 20 : n)

// const immutable = require('immutable')

// const immer = require('immer')

// const Map = immutable.Map

// const produce = immer.produce

// let book = { title: "Harry Potter" };

// function publish(book) {
//     // return book.set("isPublished", true); //returns a new object because Immutability -> DUH
//     return produce(book, draftBook => {
//         draftBook.isPublished = true;
//     })
// }

// let updated = publish(book);

// console.log(book)
// console.log(updated)

// function reducer(store, action) {
//     const updated = {...store}
// }

// {
//     bugs:[
//         {
//             id: 1,
//             description: "",
//             resolved: false
//         }
//     ],
//     currentUser: { }
// }

// {
//     type: "buggAdded",
//         payload: { id: 1 }
// }


// const { lastIndexOf } = require("lodash");
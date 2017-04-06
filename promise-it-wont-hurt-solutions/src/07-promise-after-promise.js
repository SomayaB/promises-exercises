require('es6-promise');
'use strict';

// ## Task
//
// This task will allow you to demonstrate an understanding how to chain promises
// together using then.
//
// Call first function in your program. first() will return a promise that
// will be fulfilled with a secret value.
//
// Call second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.
//
// Finally, print the fulfilled value of that new promise with console.log.



let first = () => {
  let promise = new Promise((resolve,reject) => {
  resolve("secret value")
  })
    return promise
}

let second = (first) => {
  return first
}

first()
.then(second)
.then(console.log)

require('es6-promise');
'use strict';

// ## Task
//
// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject ☺


let onResolve = Promise.resolve('Is this working?')

onResolve.then((result) => {
  console.log(result + " Yes")
})

onResolve = Promise.reject(new Error('This is not working'))

onResolve.catch((error) => {
    console.log("Error: " + error.message)
})

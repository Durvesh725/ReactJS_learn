// sunchronous code: Mainstack (call stack)
//async code: Node API (Side stack)

console.log("a")
console.log("b")
setTimeout(function(){
    console.log("c")
}, 0)
console.log("d")

// here, a, b and d are moved to the main stack and c is moved to the side stack
// when a, b and c completed there execution, then the main stack checks whether the side stack contains 
// anything, if so it bring it in the main stack

// observer output, as c is brought at last from side stack, it is printed at last



// whenever we use 
//fetch, XMLHttpRequest, axios, promises,, setTimeout and setInterval, we write async code

// now to receive the ans of above async code, we have 
// then catch, callbacks, async await


// CALLBACKS: these functions are executed whenever the asynchronous operations are completed
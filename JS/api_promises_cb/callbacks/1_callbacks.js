// callback in js: it is a function that is passed as a param to another func
// used to handle async operations
// like reading a file, network operations and db operations

// "hey, when you're done call this next "


//scene-1: assume your hello function takes more time to execute and you want to execute hello -> goodbye
// hello()
// goodbye();

// function hello(){
//     setTimeout(function(){
//         console.log("hello")
//     }, 3000)
// }


// function goodbye(){
//     console.log("goodbye")
// }

// scene - 2: you can pass goodbye as a callback to hello function
hello(goodbye)

// hello function when you're done, call the next goodbye function
function hello(cb){
    console.log("hello")
    cb()
}

function goodbye(){
    console.log("goodbye")
}


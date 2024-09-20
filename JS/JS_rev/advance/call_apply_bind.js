// in function scope, this refers to the window
// with the help of 'call', we can specify what the 'this' should point to

function abc(val1, val2, val3){
    console.log(this, val1 + val2 + val2);
}

var obj = {age: 22}

abc.call(obj, 1,2,3)


// apply says, the function should have only two arguments
function abcd(val1, val2, val3){
    console.log(this, val1 + val2 + val2);
}

var obj = {age: 22}

abcd.call(obj, [1,2,3])

// here, instead of indvidual params, we pass the params in arr []



// BIND: binds function to object, use case: when we dont want to invoke function immediately
// bind return a binded function

function xyz(){
    console.log(this)
}

var obj = {age: 22}
var bindedFunc = xyz.bind(obj)
bindedFunc()
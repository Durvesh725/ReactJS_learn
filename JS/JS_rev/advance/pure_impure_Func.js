// pure functions has these two features:
// 1. it should always return same output for same input
// 2. it will never change/update value of a global variable

function rand(val){
    console.log(Math.random() * val)
}

rand(2);
rand(2);
// here, the above function is a impure function because it gives diff value each time for same input



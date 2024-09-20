
// define
function firstClass(a){
    a();
}

// call
firstClass(function(){
    console.log("Hey!");
})

//here, the function is passed as a argument to 'FirstClass' function

// def: function can be treated as a value
// also, function expression
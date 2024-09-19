
// define
function firstClass(a){
    a();
}

// call
firstClass(function(){
    console.log("Hey!");
})

// function can be treated as a value
// also, function expression
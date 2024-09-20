// var is a func scope, let is block scope

function abc(){
    for(var i = 0; i < 12; i++){
        console.log(i);
    }
    console.log(i);
}

abc();
// here, var can be accessed anywhere in its parent function
// let: let can be accessed only inside {} block, as it is block scope


//
var a = 20;
var a = 25;
a = 20;

let b = 20;
// let b = 25; --> no redeclaration
b = 25;  // redefination allowed

//var adds itself to window object, let doesnt
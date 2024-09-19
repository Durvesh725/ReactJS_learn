// execution context: whenever we run our function, it creates its own imaginary container that contains
//1. variables
//2. functions inside that parent function
//3. lexical environment

function abc(){
    var a = 10;
    function def(){
        var b = 11;
    }
    console.log(b);
}

abc();

// abc() EC:
//1. variables - a
//2. functions = def
//3. LE: b is not accessible outside the def function 
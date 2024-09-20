//immediately invoked function expression
// function is immediately invoked
// use to define private values

// SYNTAX:
// (function(){

// })()


var obj = (function(){
    var a = 12;

    return{
        // object literal - method
        getter: function(){
            console.log(a);
        },

        // object literal
        setter: function(val){
            a = val;
        }
    }

})()

obj.getter();
obj.setter(222);
obj.getter();

// here, variables inside IIFE automatically becomes private variables, 
// we have object literals, getter and setter present


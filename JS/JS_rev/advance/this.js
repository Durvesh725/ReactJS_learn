// whenever we dont have things inside '{}', the things are said to be in GLOBAL SCOPE

// 1. this -> points to WINDOW in global scope
console.log(this)

// 2. this -> points to WINDOW in function scope
function abc(){
    console.log(this)
}
abc()


// 3. this -> points to OBJECT when in method scope
// in any method, this refers to the parent object
var obj = {
    name: "DJ",
    getter: function(){
        console.log(this)
    }
}

obj.getter()



// 4. this -> points to what is written before addEventListener in case of EVENTS

// var button = document.querySelector("button")
// button.addEventListener("click", function(){
//     console.log(this)
// })

// here, this refers to a button object
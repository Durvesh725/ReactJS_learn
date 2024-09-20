// destructuring is used to unpack the values 

// array destructuring
var arr = [1,2,3,4]
let [a,b,c] = arr
console.log(c)


//object destructuring
var obj = {
    name: "DJ",
    age: 22
}

let {name, age} = obj
//here, the variable names inside {} must be same as the object property names
console.log(age)
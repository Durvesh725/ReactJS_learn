// When you use the assignment operator (=) to copy an array, you are not actually copying the array. 
// Instead, you are assigning a reference to the original array. 

var a = [1,2,3];
var b = a;

console.log(a);
console.log(b);

a.pop();

console.log(a);
console.log(b);

//js doesnt expose memory addr


// with objects
let person1 = {
    id:2,
    name: "Durvesh"
};

console.log("Person1: ", person1);

// let person2 = person1
let person2 = person1
person2.name = "Manish"

console.log("person2: ", person2);
console.log("Person1: ", person1);
// NOTE:
// 1. Spread operator (...): Creates a shallow copy of the array, meaning a and b are independent. 
//    Changes in one do not affect the other.
// 2. Assignment (=): Creates a reference to the same array, meaning a and b point to the same memory location. 
//    Changes in one are reflected in the other.


//two data types - primitive and reference

//1. array

var a = [1,2,3,4]
var b = [...a]
a.pop();
console.log(a)
console.log(b)
//spread operator create the SHALLOW COPY - only top level entries are affected, if there would be any
// nested objects or arrays in 'a', a reference to that objects/arrays is created in a copied array

// Since numbers (and other primitive types like strings and booleans) are 'copied by value', 
// modifying a (like using pop()) only affects a, not b. The shallow copy of a (which is b) remains 
// unchanged because the primitives in b are separate from those in a.


var arr = [1,2,3, {name: 'DJ', age: 22}]

let arr2 = [...arr]

arr2[3].age = 18;
console.log(arr2)
console.log(arr)

//now here, the arr contains the reference type

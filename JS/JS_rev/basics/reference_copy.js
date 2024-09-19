var a = [1,2,3];
var b = a;

console.log(a);
console.log(b);

a.pop();

console.log(a);
console.log(b);

//change in original array affects the copy arr too because the ref of original array is passed
//js doesnt expose mem addr

let person1 = {
    id:2,
    name: "Durvesh"
};

console.log("Person1: ", person1);

// let person2 = person1
let person2 = {...person1}

console.log("person2: ", person2);
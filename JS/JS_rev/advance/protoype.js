// Prototype object: whenever we create our own object, the prototype object gets linked to it by 
// default and it contains prebuilt methods and properties that can be used on the original object as well.

var obj = {
    name: "DJ",
    age: 22
}

console.log(obj.hasOwnProperty("name"))

//here, 'hasOwnProperty' is a prototype object's method

// PROTOTYPAL INHERITANCE

var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    hasFourLegs: false
}

var Student1 = {
    canDance: true,
    canSing: true
}

// now, if we want properties of human in Student1, then
Student1.__proto__ = human

console.log("Protypal inheritance: ", Student1.canFly)

// we can see that, Student1 can now access the properties of human
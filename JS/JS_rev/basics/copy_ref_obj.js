var a = {
    name: "DJ",
    age: 22,
    addr: {
        flat: 201,
        street: "dwarka"
    }
}

let b = {...a}
b.addr.flat = 202
b.age = 18

console.log(a)
console.log(b)

//here, as b is a primitive value, the change in val of one object doesnt affect the other
//but as 'addr' is a nested object, its reference is copied into second object and change in properties
//of one object affects the other


//fundamentals
//top level att - att that arent nested
//next level - nested
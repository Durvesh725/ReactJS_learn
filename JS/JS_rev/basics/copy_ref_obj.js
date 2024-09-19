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
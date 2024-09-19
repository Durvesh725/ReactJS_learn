function abc(){
    this.age = 18;
    this.color = "black";
}

var p1 = new abc();
console.log(p1)

//working:
// whenever code encounters new, a blank obj is created
// {

// }

// and when abc() function is hit, control goes to abc and then "this: points to current empty object",
// so this.age = 18 inserts
// {
//     age: 18
// }

// in empty obj
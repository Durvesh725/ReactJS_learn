//Constructor function: whenever invoked with new keyword, return an object, this keyword is used inside function

//when you want to make many elements of same properties, that is when you use constructor function
//it is kind of template

function Car(c, m, y){
    this.color = c;
    this.model = m;
    this.year = y;
}

var car1 = new Car("Red", "Honda", 2018);
var car2 = new Car("White", "NSX", 2012);

console.log(car1);
console.log(car2);

//real time example: when you want to make multiple buttons with some property change like diff colors
//eg. music player attributes like: song name, artist, credits, genre, length, likes, dislikes
//for multiple songs, we can use constructor function as a template
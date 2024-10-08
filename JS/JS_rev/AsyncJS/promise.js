// a Promise in JavaScript accepts a callback function. This callback function is known as the executor 
// function and is passed to the Promise constructor. 
// The executor function contains the logic for resolving or rejecting the promise and is 
// executed immediately when the promise is created.

// syntax
let promise = new Promise((res, rej) => {
    let dataFetched = true

    setTimeout(() => {
        if(dataFetched){
            res("Promise is resolved")
        }
        else{
            rej("Failed to resolve")
        }
    }, 2000) 
});

promise
.then((data) => {console.log(data)})
.catch((err) => {console.log(err)});

//simutating successful api request
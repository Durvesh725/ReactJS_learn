var ans = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);

    if(num < 5){
        return resolve("Valid number");
    }
    else{
        return reject("Invalid number");
    }
}).then((resolve) => {console.log(resolve)})
.catch((reject) => {console.log(reject)});
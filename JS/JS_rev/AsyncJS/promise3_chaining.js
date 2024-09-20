// chaining promise

var t1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        return resolve("Make bed");
    })
})

var t2 = t1.then((data) => {
    console.log(data);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve("Get fresh");
        })
    })
})

var t3 = t2.then((data) => {
    console.log(data);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve("Go to college");
        })
    })
}).then((data) => {
    console.log(data);
})
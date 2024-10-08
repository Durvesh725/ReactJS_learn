// multiple then statements can be avoided with the help of async await

// 1. with then and variables---------------------------------------
// function getData(){
        //fetch return promise response, therefore its response needs to be handled by .then
//     let res = fetch(`https://randomuser.me/api/`)
//     let t1 = res.then((rawData) => {
//         return rawData.json();
//     })
//     let t2 = t1.then((data) => {
//         console.log(data)
//     })
// }

// getData()

// 2. with then and more short hand-----------------------------------
// function getData(){
//     fetch(`https://randomuser.me/api/`)
//     .then((rawData) => {
//         return rawData.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
// }

// getData()


// 3. with async await----------------------------------------------to avoid chain of .then statement
// make code more readable
async function getData(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let data = await raw.json();
    console.log(data)
}

getData()

// in above code, if we dont use await and direct write raw.json, console.log will give undefined because
// as fetch is aync code, it'll be in side stack and as next line is sync, it'll be immediately executed
// before converting undefined raw into json which will result in undefined.
sum(display, 1, 2)

// firstly the res id calculated and then the sum is displayed
function sum(callback, x, y){
    const res = x + y
    callback(res)
}

function display(res){
    console.log(res)
}
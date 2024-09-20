// in js, arrays are objects

var arr = [1,2,3]
arr[-1] = 2

console.log(arr)

// output:
// {
//     0: 1,
//     1: 2,
//     2: 3,
//     -1: 2
// }
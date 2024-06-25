let arr = [1,2,2,3,4,5,5,6,6,7,8,9]
// let arrSet = new Set()
// let result = arr.filter(item => {
//     if(!arrSet.has(item)) {
//         arrSet.add(item)
//         return item
//     } 
// })
// console.log(result);


// function unique (arr) {
//     return Array.from(new Set(arr))
// }

console.log([...new Set(arr)])
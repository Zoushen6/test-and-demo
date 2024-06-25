let loadash = require("./loadash")

let a = [1,[2,[3,6],4],5]

let b = loadash.flattenDeep(a)
console.log(b);
const arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
const flatten = (arr) => {
    const stack = [...arr]
    const res = []
    while(stack.length) {
        let item = stack.pop()
        if(Array.isArray(item)) {
            stack.push(...item)
        }else {
            res.push(item)
        }
    }
    return res.reverse()
}
// console.log(flatten(arr1));

function flattenOfSome(arr) {
    while (arr.some(item=> Array.isArray(item))) {
      console.log(...arr)
      arr = [].concat(...arr)
      console.log(arr)
    }
    return arr
  }

  flattenOfSome(arr1)
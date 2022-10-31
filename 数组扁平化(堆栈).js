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
console.log(flatten(arr1));
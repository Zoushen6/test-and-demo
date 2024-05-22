// 已知如下数组：
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

const map = new Map()
const flatten = (arr) => {
    let res = []
    arr.forEach(item => {
        if(Array.isArray(item)) {
            res = res.concat(flatten(item))
        } else {
            if(!map.has(item)) {
                res.push(item)
                map.set(item)
            }
        }
    })
    return res.sort((a, b) => a - b)
}
 
console.log(flatten([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10])); 
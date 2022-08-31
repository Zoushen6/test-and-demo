let a = {
    name: 'aaa',
    value: 123,
    do: function () {
        console.log('name:' + this.name+ ";" + "value:" + this.value);
    }
}
// a.do()
let test =  new Number(2);
console.log(test.constructor);
let b = JSON.parse(JSON.stringify(a))

// console.log(b) //do函数丢失

let c = Object.assign({},a)
c.name = "ccc"
// console.log(c);
// console.log(a);

// for(const key in [1,2,3,6,4,5]) {
//     console.log(key);
// }

function deepCopy(target) {
    if((typeof target !== 'object' || typeof target !== 'function') && target === null) return false
      let res = Array.isArray(target) ? [] : {}
        for(let k in target) {
          // 如果目标数据上有属性（键）(key)
          if(target.hasOwnProperty(k)) {
            // 如果目标数据上属性的值，为object，就递归，不是object，就取到属性值，并放入我们新建的空数组/对象中
            res[k] = typeof target[k] === 'object' ? deepCopy(target[k]) : target[k]
          }
       }
    return res
  }


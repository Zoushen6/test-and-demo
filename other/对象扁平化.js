let obj = {
    a: {
        b: 'hello ',
        c: {
            d: 'world'
        }
    },
    e: 'hello world'
}

const fun = (obj) => {
    let res = {}
    const flat = (key,value) => {
        if(typeof value == 'object') {
            let arr = Object.keys(value);
            for(let i of arr) {
                flat(key+ '.'+ i,value[i])
            }
        }else {
            res[key.slice(1)] = value
            return ;
        }
    }
    flat('',obj)
    return res
}

console.log(fun(obj));
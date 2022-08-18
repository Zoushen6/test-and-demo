let res = [{'carLicensenumber':'123465','name':'zhangsna'},{'carLicensenumber':'98746516','name':'lishi'}]
let js = JSON.stringify(res)
// console.log(JSON.parse(js));

let b = []

b = res.reduce((prev,next,index)=> {
    next.index = index;
    prev[next.carLicensenumber] = next;
    // console.log(prev);
    return prev
},{})

let key = 'carLicensenumber'

let a = {'carLicensenumber':'123465','name':'zhangsna'}
let f = {'name':'123465','dddd':'zhangsna','carLicensenumber':'zhangsna',}
f = Object.assign(a,f)
// console.log(f);

let d = a[key]


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



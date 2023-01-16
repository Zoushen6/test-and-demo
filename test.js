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


let add = function(...arguments) {
    console.log(arguments);
    let res = arguments.reduce((res,item) => 
    {
        return parseFloat(Number(res)+Number(item)).toFixed(2)
    }
    ,0)
    return res
}

// console.log(add(0.1,0.2,0.3));

const obj = {
    m:1,
    n:2,
    k:3
}
let {m,n,k} = obj || {}
m = 888

// if(obj.m??'' !== "") {
//     console.log(obj.m);
// }
console.log(obj.test?.());
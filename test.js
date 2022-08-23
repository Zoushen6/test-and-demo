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






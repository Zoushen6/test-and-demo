// let res = [{'carLicensenumber':'123465','name':'zhangsna'},{'carLicensenumber':'98746516','name':'lishi'}]
// let js = JSON.stringify(res)
// // console.log(JSON.parse(js));

// let b = []

// b = res.reduce((prev,next,index)=> {
//     next.index = index;
//     prev[next.carLicensenumber] = next;
//     // console.log(prev);
//     return prev
// },{})

// let key = 'carLicensenumber'

// let a = {'carLicensenumber':'123465','name':'zhangsna'}
// let f = {'name':'123465','dddd':'zhangsna','carLicensenumber':'zhangsna',}
// f = Object.assign(a,f)
// // console.log(f);

// let d = a[key]


// let add = function(...arguments) {
//     console.log(arguments);
//     let res = arguments.reduce((res,item) => 
//     {
//         return parseFloat(Number(res)+Number(item)).toFixed(2)
//     }
//     ,0)
//     return res
// }

// // console.log(add(0.1,0.2,0.3));

// const obj = {
//     m:1,
//     n:2,
//     k:3
// }
// let {m,n,k} = obj || {}
// m = 888

// // if(obj.m??'' !== "") {
// //     console.log(obj.m);
// // }
// console.log(obj.test?.());


// const arr = [
//     {
//         min: 1,
//         max: 2
//     },{
//         min: 4,
//         max: 9
//     },{
//         min: 5,
//         max: 6
//     },{
//         min: 7,
//         max: 8
//     },
// ]

// arr.forEach((item,index) => {
//     const next = arr[index+1]
//     console.log(index+':' + item.min,item.max);
//     if(item.min >= item.max) {
//         item.max = item.min + 1
//     }
//     if(next && next.min<=item.max) {
//         next.min = item.max + 1
//     }
// })
// console.log(arr);

const foo = () => {
    console.log(a);
}

global.name = 4
name = 6
 const bar = () => {
    this.name = 1
    console.log(this);
}
bar()
// console.log(this.name)

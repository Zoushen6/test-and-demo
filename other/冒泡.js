// let a = [1,5,8,6,7,3,3],temp;
// for(let i = 0;i < a.length-1;i++) {
//     let finish = true;
//     for(let j = 0;j < a.length-i-1;j++) {
//         if(a[j] > a[j+1]) {
//             [a[j],a[j+1]] = [a[j+1],a[j]] 
//             finish = false
//         }
//     }
//     if(finish) {
//         break
//     }
//     console.log(a,i+1);
// }

let a = [1,5,8,6,7,3,3];
for(let i = 0;i < a.length-1;i++) {
    let finish = true
    for(let j = 0;j < a.length-i-1;j++) {
        if(a[j] > a[j+1]) {
            [a[j],a[j+1]] = [a[j+1],a[j]]
            finish = false
        }
    }
    if(finish) {
        break
    }
}
console.log(a);
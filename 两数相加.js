l1 = [1,5,3,2];
l2 = [4,5,6,59];
let i = l1.length < l2.length ? l2.length : l1.length;
let res = [];
for(let j = 0;j < i;j++) {
    let l1num = l1[j] ? l1[j] : 0;
    let l2num = l2[j] ? l2[j] : 0;
    let sum =res[j] ? l1num + l2num + res[j] : l1num + l2num;
    if(sum >= 10){
        sum = sum.toString();
        res[j] = parseInt(sum.charAt(sum.length-1));
        res[j+1] = parseInt(sum.charAt(0));
    }else{
        res[j] = sum
    }
}
console.log(res);
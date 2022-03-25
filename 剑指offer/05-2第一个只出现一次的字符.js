// var firstUniqChar = function(s) {
//     if(!s) {
//         return ' '
//     }
//     let arr = [...s];
//     let map = new Array(arr.length).fill(0);
//     for(let i = 0;i < arr.length;i++) {
//         if(arr[i] = map[i]) {
//             map[i]++
//         }
//         map[i]++
//     }
//     console.log(map);
    
// };


//js用indexOf简单解题
// var firstUniqChar = function(s) {
//     for(let i=0;i<s.length;i++) {
//         k = s.indexOf(s[i]);
//         e = s.indexOf(s[i],k+1);
//         if(e == -1) return s[i];
//     }
//     return " ";
// };

//4行
// var firstUniqChar = function(s) {
//     for(let x of s){
//         if(s.indexOf(x) === s.lastIndexOf(x)) return x
//     }
//     return ' '
// };




//官方
var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return ch;
        }
    }
    return ' ';
};

console.log(firstUniqChar('ccc')); 
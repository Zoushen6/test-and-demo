// var missingNumber = function(nums) {
//     let arrSum = nums.reduce((res,next) => {
//         return res+next;
//     },0);
//     return  getSum(nums.length) - arrSum;  //缺失的数字 = 非缺失状态相加 - 缺失状态相加
// };

// var getSum = function(lastNum){
//     let i=0;
//     let sum = 0;
//     while(i<=lastNum){
//         sum += i++;
//     }
//     return sum
// }





//二分法
var missingNumber = function(nums) {
    let l = 0,r = nums.length;
    while(l<=r){
        let mid = parseInt((l+r)/2);
        if(nums[mid]!==mid) {
            r = mid - 1
        }else{
            l = mid + 1;
        }
    }
    return l;
};


//别人的56ms
// var missingNumber = function(nums) {
//     nums.push('x')//防止缺失的是最后一个
//     for(let i = 0 ; i < nums.length ; i++){
//         if(nums[i]!== i)
//         return i
//     }
// };

console.log(missingNumber([0,2]));
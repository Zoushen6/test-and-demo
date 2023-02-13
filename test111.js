/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    if(!nums.length) {
        return []
    }
    let temp;
    for(let i=0,j=i+1;j<nums.length;j++) {
        if(nums[i]%2 === 0 && nums[j]%2 !== 0) {
            //如果前面有代码 一定加上分号，不然报错
           [nums[j],nums[i]] = [nums[i],nums[j]];
        }
        if(nums[i]%2 !== 0) i++
    }
    return nums

};

// console.log(exchange([1,2,3,4]));
for(let i = 0;i<5;i++) {
    setTimeout(() => {
        // console.log(i)
    }, 1000);
}

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // 同样的变量!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }

  varTest()
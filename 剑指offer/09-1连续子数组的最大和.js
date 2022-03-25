/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     let max = 0;
     let maxres = Number.MIN_VALUE;
     for(let i = 0;i < nums.length;i++) {
         max = Math.max(nums[i],max+nums[i])
         maxres = Math.max(maxres,max)
     }
     return maxres
     console.log(maxres);
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
    let res = 0;
    for(let i = 0;i < nums.length;i++){
        let minVal = Number.MAX_VALUE, maxVal = -Number.MAX_VALUE;
        for(let j = i;j<nums.length;j++) {
            minVal = Math.min(minVal, nums[j]);
            maxVal = Math.max(maxVal, nums[j]);
            res += maxVal - minVal;
        }
    }
    return res
};
subArrayRanges([4,-2,-3,4,1])
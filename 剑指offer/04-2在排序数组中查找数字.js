var search = function(nums, target) {
    let i = 0,j = nums.length;
    while(i<j){
        if(nums[i] !== target){
            i++
        }
        if(nums[j] !== target){
            j--
        }
        if(nums[i]===target && nums[j]===target){
            return j-i+1
        }
    }
    return 0;
};
console.log(search([5,7,7,8,8,8,8,10],8));
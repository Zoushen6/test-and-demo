var findRepeatNumber = function(nums) {
    let map = [];
    for(let i = 0;i< nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else {
            return nums[i]
        }
    }


    //哈希
    // let map = new Map();
    // for(let i of nums){
    //     if(map.has(i)) return i;
    //     map.set(i, 1);
    // }

};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        let compliment = target-nums[i];
        if(obj[compliment] !== undefined){
            return [obj[compliment], i];
        }
        obj[nums[i]] = i;
    }
    
};
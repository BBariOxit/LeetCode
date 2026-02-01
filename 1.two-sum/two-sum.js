// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//cách 1: cách ngu với Brute Force
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) 
        return [i, j]
    }
  }
  return []
}

// cách 2: dùng object
const twoSum2 = function(nums, target) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let need = target - num
    // Phải check !== undefined, vì index 0 là falsy trong JS.
    if (obj[need] !== undefined) {
      return [obj[need], i]
    }
    obj[num] = i
  } return []
}

const nums_input = [2,7,11,15]
const target_input = 9
console.log(twoSum(nums_input, target_input))
console.log(twoSum2(nums_input, target_input))

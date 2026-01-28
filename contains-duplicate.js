// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// cách 1: cách ngu với Brute Force 
// 2 vòng lặp lồng nhau
// Time Complexity: O(n^2). 
// Space Complexity: O(1).
const containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  } return false
}
//cách ngu với arr
const containsDuplicate4 = function(nums) {
  const seen = []
  for (let i = 0; i < nums.length; i++) {
    if (seen.includes(nums[i])) //includes chạy từ đầu mảng đến cuối mảng nên ko tối ưu
      return true
    seen.push(nums[i])
  } return false
}
// cách ngu tiếp theo là sử dụng sort
const containsDuplicate2 = function(nums) {
  nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1])
      return true
  } return false
}
// cách tối ưu(khôn): sử dụng set(hash set)
const containsDuplicate3 = function(nums) {
  const seen = new Set()
  // for (let i of nums) // loop kiểu hiện đại 
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) //method has tương tự như in trong python
      return true
    seen.add(nums[i])
  } return false
}

// chạy
nums_input = [1,2,3,1]
console.log(containsDuplicate(nums_input))
console.log(containsDuplicate2(nums_input))
console.log(containsDuplicate3(nums_input))
console.log(containsDuplicate4(nums_input))
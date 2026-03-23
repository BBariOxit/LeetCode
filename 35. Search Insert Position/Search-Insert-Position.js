// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
 
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// cách 1: hơi ngu với BRUTE FORCE
// Logic: Duyệt tuần tự (Linear Search). Gặp thằng nào >= target thì dừng.
// Time Complexity: O(n) - Mảng có triệu phần tử thì lặp triệu lần
// Space Complexity: O(1) - ko tốn thêm bộ nhớ.
const searchInsert = function(nums, target) {
  for (let i =0; i< nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  } return nums.length
}

// Cách 2: dùng thư viện
// Logic: Dùng findIndex để tìm vị trí đầu tiên thỏa mãn điều kiện.
// Time Complexity: O(n) - Thằng findIndex bản chất vẫn là một cái vòng lặp ẩn
// Space Complexity: O(1).
const searchInsert2 = function(nums, target) {
   let index = nums.findIndex(n => n >= target)
   return index === -1 ? nums.length : index 
}
// chay
nums = [1,3,5,6]
target = 5
console.log(searchInsert(nums, target))
console.log(searchInsert2(nums, target))
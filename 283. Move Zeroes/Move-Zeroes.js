// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]


// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 
// Follow up: Could you minimize the total number of operations done?

// cách 1: splice - push
// logic: dùng splice để cắt rồi push vào cuối. Duyệt ngược (để tránh lỗi nhảy index), thấy 0 thì cắt ra ném xuống cuối.
// Time Complexity: $O(n^2)$ (Vòng lặp lồng trong thao tác mảng của JS).
// Space Complexity: $O(1)$.
const moveZeroes = (s) => {
  for (let i = s.length -1; i >= 0; i--) {
    if (s[i] == 0) {
      s.splice(i, 1)
      s.push(0)
    }
  }
}

// nếu đề ko yêu cầu in-place
const moveZeroes2 = (s) => {
  let nonZ = s.filter(x => x !== 0)
  let Z = s.filter(x => x === 0)
  let result = [...nonZ, ...Z]
  for (let i = 0; i < s.length; i++) {
    s[i] = result[i]
  }
}
// chạy
s = [0,1,0,3,12]
moveZeroes(s)
console.log(s)
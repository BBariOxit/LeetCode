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
// Time Complexity: O(n^2) (Vòng lặp lồng trong thao tác mảng của JS).
// Space Complexity: O(1).
const moveZeroes = (s) => {
  for (let i = s.length -1; i >= 0; i--) {
    if (s[i] == 0) {
      s.splice(i, 1)
      s.push(0)
    }
  }
}

// cách sai yêu cầu đề, ko in-place, giải cho vui
// Time Complexity: O(n).
// Space Complexity: O(n) (Tốn thêm đống bộ nhớ cho mảng phụ).
const moveZeroes2 = (s) => {
  let nonZ = s.filter(x => x !== 0)
  let Z = s.filter(x => x === 0)
  let result = [...nonZ, ...Z]
  for (let i = 0; i < s.length; i++) {
    s[i] = result[i]
  }
}

// cách đỡ hơn với two point - overwrite
// Logic: Dùng con trỏ pos để ghi đè, xong thì chạy while để dọn rác.
// Time Complexity: O(n).
// Space Complexity: O(1).
const moveZeroes3 = (s) => {
  let pos = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 0) {
      s[pos++] = s[i]
    }
  }
  while (pos < s.length) {
    s[pos++] = 0
  }
}
// cách tối ưu nhất với two pointer - swap
// Logic: Dùng kỹ thuật Destructuring của ES6 để swap trong 1 dòng. 
// Nếu i và pos trùng nhau thì ko làm gì, cực kỳ tiết kiệm thao tác ghi vào bộ nhớ.
// Time Complexity: O(n).
// Space Complexity: O(1).
const moveZeroes4 = (s) => {
  for (let i = 0, pos = 0; i < s.length; i++) {
    if (s[i] !== 0) {
      if (i !== pos) {
        [s[pos], s[i]] = [s[i], s[pos]]
      } pos ++
    }
  }
}

// sử dụng temp cho tối ưu hơn
// [a, b] = [b, a] nhìn thì sang nhưng nó tạo ra một cái mảng tạm ngầm bên dưới.
const moveZeroes5 = (s) => {
  for (let i = 0, pos = 0; i < s.length; i++) {
    if (s[i] !== 0) {
      if (i !== pos) {
        let temp = s[pos]
        s[pos] = s[i]
        s[i] = temp
      } pos ++
    }
  }
}
// chạy
let s = [0,1,0,3,12]
moveZeroes(s)
console.log(s)

let s2 = [0,1,0,3,12]
moveZeroes2(s2)
console.log(s2)

let s3 = [0,1,0,3,12]
moveZeroes3(s3)
console.log(s3)

let s4 = [0,1,0,3,12]
moveZeroes4(s4)
console.log(s4)

let s5 = [0,1,0,3,12]
moveZeroes5(s5)
console.log(s5)
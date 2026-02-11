// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

// cách 1: STRING REVERSE
// Logic: Tận dụng đống method split, reverse, join của JS. Viết thì ngắn đấy nhưng máy tính nó phải gồng mình ra mà chạy.
// Time Complexity: $O(n)$ - Mỗi hàm split, reverse, join đều phải duyệt qua toàn bộ các ký tự.
// Space Complexity: $O(n)$ - Tạo ra một đống mảng và chuỗi tạm bợ trong bộ nhớ (Heap).
const isPalindrome = (nums) => {
  return nums.toString() === nums.toString().split('').reverse().join('')
}

// cách 2: 
// Logic: So sánh cặp đôi ở hai đầu. Thấy ko ổn là return false ngay (Fail Fast), ko cần đảo ngược cả chuỗi cho mệt.
// Time Complexity: $O(n)$ - Thực tế là $n/2$, nhưng về lý thuyết vẫn là $O(n)$.
// Space Complexity: $O(n)$ - Vẫn phải tốn bộ nhớ để lưu cái toString().
const isPalindrome2 = (nums) => {
  const s = nums.toString()
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r-- 
  } return true
}
// chạy
let x = -121
console.log(isPalindrome(x))
console.log(isPalindrome2(x))
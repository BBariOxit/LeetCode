// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 
// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

//cách 1: Chaining Methods
// Logic:
// Dùng Regex để dọn rác và hạ lùn chuỗi.
// Biến chuỗi thành mảng -> Đảo ngược mảng -> Dán lại thành chuỗi. -> So sánh.
// Time: O(n)
// Space: O(n) - Tệ nhất là nó tạo ra 3-4 cái bản sao của chuỗi trong bộ nhớ.
const isPalindrome = (s) => {
  const clean_s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  return clean_s === clean_s.split('').reverse().join('') // tốn ram kinh 
}

// cách 2: duyệt một nửa chuỗi
// Logic:
// Dọn rác bằng Regex trước.
// Dùng vòng lặp chạy đến Length / 2.
// So sánh ký tự thứ i với ký tự thứ length - 1 - i.
const isPalindrome2 = (s) => {
  const clean_s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  const len = clean_s.length 
  for (let i = 0; i < (len / 2); i++) {
    if (clean_s[i] !== clean_s[len -1 -i]) {
      return false
    }
  } return true
}
//chạy
const s = " "
console.log(isPalindrome(s))
console.log(isPalindrome2(s))
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


// cách 1: dùng tool
var lengthOfLastWord2 = function(s) {
  // 1. trim(): Gọt sạch khoảng trắng thừa thãi ở 2 đầu chuỗi
  // 2. split(/\s+/): Băm chuỗi thành mảng. 
  // 3. pop(): Lôi cổ thằng cuối cùng trong mảng ra
  // 4. length: Đếm xem nó dài bao nhiêu
  return s.trim().split(/\s+/).pop().length;
}

// cách 2:  Tư duy "Đi lùi" (Tối ưu tuyệt đối - O(1) Space)
var lengthOfLastWord = function(s) {
  let count = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      count +=1
    } else if (count > 0) {
      break
    }
  } return count
}

let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))
console.log(lengthOfLastWord2(s))
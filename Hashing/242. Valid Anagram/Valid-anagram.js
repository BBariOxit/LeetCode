// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
 
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

//cách 1: cách đần: (Split - Sort - Join)
// Logic: Đưa về cùng một định dạng sắp xếp rồi so sánh 2 chuỗi kết quả.
// Time Complexity: O(n \log n) – Do thằng sort() nó gánh.
// Space Complexity: O(n) – Vì tạo ra một đống Array tạm thời trong bộ nhớ.
// chi tiết:
// .split(''): Chặt chuỗi ra thành từng ký tự rồi nhét vào một cái Array (Mảng)
// Vì trong JS, String là immutable (ko thể thay đổi) và nó ko có phương thức sort().
// Muốn sắp xếp thì phải biến nó thành Array trước.
// .sort(): Sắp xếp các phần tử trong mảng theo thứ tự bảng mã Unicode (mặc định là bảng chữ cái).
// .join(''): Gom tất cả phần tử trong mảng lại thành một chuỗi duy nhất. Cái dấu '' ở giữa nghĩa là ko có ký tự ngăn cách nào cả.
function isAnagram(s,t) {
  if(s.length != t.length) return false
  return s.split('').sort().join('') === t.split('').sort().join('')
}
// cách 2: Dùng Object làm Hash Map
// Logic: Dùng một Object để lưu tần suất. Cú pháp (count[char] || 0) là để tránh lỗi undefined khi ký tự chưa tồn tại
// Time Complexity: O(n).
// Space Complexity: O(1) hoặc O(k) (tối đa 26 ký tự nếu là alphabet).
function isAnagram2(s,t) {
  if(s.length != t.length) return false
  const count = {}
  for (let i of s) {
    count[i] = (count[i] || 0) + 1
  }
  for (let i of t) {
    if(!count[i]) return false // check undifined và 0(!undefined, !0 -> true -> return)
    count[i]--
  } return true
}

// cách 3: Tối ưu bộ nhớ (Dùng Typed Array - Int32Array)
// Logic: mapping trực tiếp ký tự vào chỉ số mảng (0 cho 'a', 1 cho 'b'...).
// Time Complexity: O(n).
// Space Complexity: O(1) – Mảng cố định 26 phần tử, ko tốn thêm RAM dù chuỗi dài bao nhiêu.
// Int32Array trong JS là một dạng Typed Array, nó lưu trữ dữ liệu cực kỳ thô và sát với tầng vật lý,
// giúp máy tính xử lý nhanh hơn cái Array thông thường.
function isAnagram3(s,t) {
  if (s.length != t.length) return false
  // Tạo mảng 26 phần tử toàn số 0, đại diện cho a-z
  const counts = new Int32Array(26)

  for (let i = 0; i< s.length; i++) {
    counts[s.charCodeAt(i) -97]++
    counts[t.charCodeAt(i) -97]--
  }
  return counts.every(num => num === 0)
}

const s_input = 'anagram'
const t_input = 'nagaram'
console.log(isAnagram(s_input, t_input))
console.log(isAnagram2(s_input, t_input))
console.log(isAnagram3(s_input, t_input))
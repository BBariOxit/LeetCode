// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Example 5:
// Input: s = "([)]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// cách 1: cách ngu với Replace chuỗi
/**
 * Cách này ngu vì mỗi lần replace là nó lại phải quét lại cái chuỗi.
 * chuỗi dài 10.000 ký tự thì máy nó nổ mẹ nó luôn.
 */
// Logic: Tìm cặp ngoặc hợp lệ gần nhau nhất, xóa sạch. Nếu chuỗi rỗng thì true, còn sót lại rác thì false.
// Trong một chuỗi ngoặc hợp lệ, kiểu gì cũng phải có ít nhất một cặp ngoặc nằm sát sạt nhau.
// Time Complexity: O(n^2) - Vì cái hàm replace và includes nó chạy đi chạy lại trong vòng lặp. Cực kỳ chậm
// Space Complexity: O(n) - Mỗi lần replace nó tạo ra một chuỗi mới (String trong JS là immutable).
const isValid = (s) => {
  while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
    s = s.replace('()', '').replace('{}', '').replace('[]', '')
  } return s.length === 0 
}

// cách 2: ổn hơn với Stack và if-else
// Logic: Dùng mảng làm Stack. Duyệt 1 vòng, mở thì push, đóng thì pop ra so sánh.
// Time Complexity: O(n) - Duyệt qua chuỗi đúng 1 lần.
// Space Complexity: O(n) - Trường hợp xấu nhất (toàn ngoặc mở) thì stack chứa hết mẹ nó chuỗi.
const isValid2 = (s) => {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      if (stack.length === 0) return false
      let a = stack.pop()
      if ((char === ')' && a !== '(') ||
          (char === '}' && a !== '{') ||
          (char === ']' && a !== '[')) {
        return false
      }
    }
  } return stack.length === 0
}

// cách 3: tối ưu với Stack + Hash Map
// Logic: Tương tự cách 2 nhưng dùng Object để lưu cặp. Khi gặp ngoặc đóng,
// chỉ cần check map[char] là ra ngay thằng ngoặc mở tương ứng.
// Time Complexity: O(n) - Tốc độ bàn thờ, duyệt 1 lần là xong.
// Space Complexity: O(n) - Tốn thêm tí bộ nhớ cho cái Stack và cái Map (nhưng Map thì cố định 3 cặp nên ko đáng kể).
const isValid3 = (s) => {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let stack = []
  for (let char of s) {
    if (map[char]) { // Nếu char là ngoặc đóng (có trong map)
      // Lấy thằng trên cùng stack ra, nếu ko khớp thì false
      if (stack.pop() !== map[char]) return false
    } else { // Nếu là ngoặc mở, ném vào stack
      stack.push(char)
    }
  } return stack.length === 0
}

//chạy
s = "([)]"
console.log(isValid(s))
console.log(isValid2(s))
console.log(isValid3(s))
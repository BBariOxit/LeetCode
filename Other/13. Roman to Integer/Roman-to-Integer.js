// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.\

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// cách 1: if-else
// Logic: Gọi hàm check từng ký tự một. Mỗi lần gọi hàm là một lần tốn mớ stack frame lăng nhăng.
// Time Complexity: O(n) - Duyệt qua chuỗi một lần.
// Space Complexity: O(1) - KO tốn thêm bộ nhớ là bao, nhưng code nhìn bẩn.
function getValue(char) {
  if (char === 'I') return 1
  if (char === 'V') return 5
  if (char === 'X') return 10
  if (char === 'L') return 50
  if (char === 'C') return 100
  if (char === 'D') return 500
  if (char === 'M') return 1000
  return 0
}

const romanToInt = (s) => {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    let curr = getValue(s[i])
    let next = getValue(s[i + 1])

    if ( curr < next) {
      total -= curr
    } else {
      total += curr
    }
  } return total
}

// cách 2: switch-case, tương tự if-else
function getValue2(char) {
  switch(char) {
    case 'I': return 1
    case 'V': return 5
    case 'X': return 10
    case 'L': return 50
    case 'C': return 100
    case 'D': return 500
    case 'M': return 1000
    default: return 0
  }
}

const romanToInt2 = (s) => {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    let curr = getValue2(s[i])
    let next = getValue2(s[i + 1])

    if (curr < next) {
      total -= curr
    } else {
      total += curr
    }
  } return total
}

// cách 3: đỡ ngu hơn 2 cách trước với object/hash map
// Logic: Dùng toán tử 3 ngôi (Ternary operator). Tra cứu giá trị trực tiếp từ Object mất O(1).
// Time Complexity: O(n) - Với n là độ dài chuỗi (max có 15 ký tự, lo gì).
// Space Complexity: O(1) - Cái Object sym kia cố định, đéo tăng theo đầu vào.
const romanToInt3 = (s) => {
  const obj = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  }
  let total = 0
  for (let i =0; i < s.length; i++) {
    obj[s[i]] < obj[s[i + 1]] ? total -= obj[s[i]] : total += obj[s[i]]
  } return total
}

// cách 4: tối ưu với duyệt ngược
// duyệt từ phải sang trái. Tại sao? Vì ko cần phải ngó thằng bên cạnh xem nó to hay nhỏ nữa. 
// Mà chỉ cần giữ một cái mốc "giá trị lớn nhất từng thấy".
// Logic: Duyệt từ cuối lên. Nếu gặp thằng nhỏ hơn thằng vừa duyệt (phía bên phải nó) thì chắc chắn là phải trừ.
// Cách này cực nhanh và sạch.
// Time Complexity: O(n).
// Space Complexity: O(1).
const romanToInt4 = (s) => {
  const obj = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  }
  let total = 0
  let preValue = 0
  for (let i = s.length -1; i >= 0; i--) {
    let currValue = obj[s[i]]
    if (currValue < preValue) {
      total -= currValue
    } else {
      total += currValue
      preValue = currValue
    }
  } return total
}

// chạy
s = "MCMXCIV"
console.log(romanToInt(s))
console.log(romanToInt2(s))
console.log(romanToInt3(s))
console.log(romanToInt4(s))
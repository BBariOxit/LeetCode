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
// cách 3: đỉnh cao với Two Pointers - No Regex, nhưng vẫn có cái xịn hơn :D
// Logic:
// Dùng hai con trỏ left và right.
// Viết một hàm phụ để check xem ký tự có phải là chữ/số không (dùng mã ASCII cho nó nhanh).
// Bỏ qua rác và so sánh.
// Time: O(n) - Duyệt đúng một vòng.
// Space: O(1) - Tuyệt phẩm! Ko tốn thêm bộ nhớ cho chuỗi phụ.
const isPalindrome3 = (s) => {
  let i = 0
  let j = s.length - 1

  const isAlnum = (char) => {
    const code = char.charCodeAt(0)
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
    // 0-9    A-Z     a-z
  }
  while (i < j) {
    while (i < j && !isAlnum(s[i])) i++
    while (i < j && !isAlnum(s[j])) j--
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false
    }
    i++
    j--
  } return true
}
// cách 4: hard
// Time Complexity: O(n), vẫn chỉ duyệt qua chuỗi đúng một lần. 
// Dù có thêm Lookup Table hay toán học thì nó vẫn là tuyến tính theo độ dài n của chuỗi s.
// Space Complexity: O(1)
// Đừng thấy tạo cái mảng isAlnum mà tưởng là O(n). 
// Cái mảng đó có kích thước cố định là 128, ko phụ thuộc vào độ dài chuỗi s. 
// Trong Big O, hằng số thì coi như O(1).

// 'A' là 65, 'a' là 97. Chênh lệch: 97 - 65 = 32.'B' là 66, 'b' là 98. Chênh lệch: 98 - 66 = 32.
// Quy luật: Hiệu số giữa chữ hoa và chữ thường luôn là 32.

// luồng chạy:
// Tiền xử lý: Tạo mảng isAlnum đánh dấu sẵn thằng nào là "hàng xịn".
// Hai con trỏ: i chạy từ đầu, j chạy từ cuối.
// Lọc rác siêu tốc: Dùng isAlnum[s.charCodeAt(i)] để nhảy qua dấu cách, dấu phẩy... mà ko cần Regex.
// So sánh "lười":
// Nếu mã ASCII giống hệt nhau (codeI === codeJ) -> Quá tốt, bước tiếp.
// Nếu khác nhau -> Kiểm tra xem có phải là một cặp Hoa-Thường không (dùng hiệu số 32).
// Nếu ko phải nữa thì return false luôn.
// Kết thúc: Nếu i >= j mà chưa thấy gì sai -> return true.
const isAlnum2 = new Uint8Array(128)
  for (let i = 48; i <= 57; i++) 
    isAlnum2[i] = 1
  for (let i = 65; i <= 90; i++) 
    isAlnum2[i] = 1
  for (let i = 97; i <= 122; i++) 
    isAlnum2[i] = 1

const isPalindrome4 = (s) => {
  let i = 0, j = s.length -1

  while (i < j) {
    // lấy chỉ số ASCII của thằng đầu và cuối chuỗi
    let codeI = s.charCodeAt(i)
    let codeJ = s.charCodeAt(j)

    // bỏ qua rác với lookup
    if (!isAlnum2[codeI]) {
      i++
      continue
    }
    if (!isAlnum2[codeJ]) {
      j--
      continue
    }

    // So sánh: Nếu không giống hệt thì mới bắt đầu xử lý chữ hoa/thường
    if (codeI !== codeJ) {
      // Check xem có phải là cùng một chữ nhưng khác case không
      // Trick: Chênh lệch giữa 'A' và 'a' là 32
      if (codeI >= 65 && codeJ >= 65) {//vì 65 là bắt đầu của chữ A...
        if (Math.abs(codeI - codeJ) !== 32) return false
      }
      // Chỉ áp dụng cho chữ cái, ko áp dụng cho số (nên check thêm)
      else {
        return false
      }
    }

    i++
    j--
  } return true
}

// //chạy
const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
console.log(isPalindrome2(s))
console.log(isPalindrome3(s))
console.log(isPalindrome4(s))
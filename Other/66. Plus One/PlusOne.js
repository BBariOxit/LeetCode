// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

//cách tối ưu: Digit-by-Digit Manipulation, dùng cho test phỏng vấn
const plusOne = function(digits) {
  for (let i = digits.length -1; i >= 0; i--) {
    // trường hợp 1:  
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    // trường hợp 2: Số hiện tại là 9.
    // ko cần phải if (digits[i] === 9) làm gì cho thừa vì code chạy xuống đây chắc chắn nó là 9.
    // Quy tắc "Viết 0 nhớ 1": Biến nó thành 0, rồi để vòng lặp quay lại xử lý thằng đằng trước.
    digits[i] = 0
  }
  // Trường hợp 3: Trùm cuối! (Ví dụ: [9, 9, 9] thành [0, 0, 0])
  // Nếu nó chạy thoát khỏi cái vòng lặp For kia, nghĩa là cả mảng toàn số 9.
  // Việc của mày là tọng thêm con số 1 vào đầu mảng. Hàm unshift() sinh ra để làm việc này.
  digits.unshift(1)
  return digits
}

// cách lười
var plusOne2 = function(digits) {
  // 1. digits.join(''): Biến mảng [1,2,3] thành chuỗi "123"
  // 2. BigInt(...): Ép cái chuỗi đó thành số nguyên lớn (chấp cả mảng dài 100 phần tử)
  // 3. + 1n: Cộng thêm 1 đơn vị kiểu BigInt (phải có chữ 'n' đằng sau nhé)
  let num = BigInt(digits.join('')) + 1n;

  // 4. String(num): Biến kết quả ngược lại thành chuỗi
  // 5. .split(''): Băm chuỗi thành mảng các ký tự
  // 6. .map(Number): Ép ngược từng ký tự thành kiểu số (number)
  return String(num).split('').map(Number);
};
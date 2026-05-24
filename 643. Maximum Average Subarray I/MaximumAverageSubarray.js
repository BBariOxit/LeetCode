// // You are given an integer array nums consisting of n elements, and an integer k.
// // Find a contiguous subarray whose length is equal to k that has the maximum average value 
// // and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// // Example 1:
// // Input: nums = [1,12,-5,-6,50,3], k = 4
// // Output: 12.75000
// // Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// // Example 2:
// // Input: nums = [5], k = 1
// // Output: 5.00000
 
// // Constraints:
// // n == nums.length
// // 1 <= k <= n <= 105
// // -104 <= nums[i] <= 104

// cách giải tối ưu với sliding window
// Tính tổng cửa sổ đầu tiên: Dùng một vòng lặp chạy từ vị trí 0 đến k-1 để tính tổng của k phần tử đầu tiên.
// Lưu giá trị này vào biến current_sum.
// Khởi tạo giá trị lớn nhất: Tạo biến max_sum và gán cho nó giá trị ban đầu chính là current_sum vừa tính được.
// Bắt đầu trượt cửa sổ: Chạy một vòng lặp từ vị trí i = k cho đến hết mảng nums.
// Cập nhật tổng trong mỗi bước trượt:
// Cập nhật current_sum = current_sum - nums[i - k] + nums[i].
// (Trong đó: nums[i - k] là phần tử bị văng ra khỏi cửa sổ ở bên trái,
// còn nums[i] là phần tử mới lọt vào cửa sổ ở bên phải).
// Ghi nhận kỷ lục: So sánh tổng hiện tại với kỷ lục cũ: max_sum = Math.max(max_sum, current_sum).
// Chốt hạ: Sau khi cửa sổ trượt đến cuối mảng,
// trả về kết quả bằng cách lấy max_sum / k (nhớ ép kiểu về số thực thập phân tùy theo ngôn ngữ lập trình).

// Time Complexity: O(N). Ta chỉ cần khởi tạo cửa sổ đầu tiên và trượt nó đi 1 vòng duy nhất từ trái sang phải, không có vòng lặp lồng nhau.
// Space Complexity: O(1). Thuật toán thao tác trực tiếp trên mảng gốc, chỉ sử dụng thêm vài biến cơ bản (current_sum, max_sum, i) nên không tốn thêm bộ nhớ đáng kể.

var findMaxAverage = function(nums, k) {
  let curr_sum = 0
  for (let i = 0; i < k; i++) {
    curr_sum += nums[i]
  }
  let max_sum = curr_sum
  for (let i = k; i< nums.length; i++) {
    curr_sum = curr_sum - nums[i-k] + nums[i]
    if(curr_sum > max_sum) max_sum = curr_sum
  } return max_sum / k
}
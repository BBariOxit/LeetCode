// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105


var threeSum = function(nums) {
  let res = [];
  
  // CHÚ Ý: Trong JS mà xài nums.sort() chay là vỡ mồm nhé!
  // Nó sẽ sort theo kiểu chữ cái (String). Phải có callback (a, b) => a - b
  nums.sort((a, b) => a - b);

  // Vòng lặp lấy thằng nums[i] làm CHỐT
  // Chạy tới nums.length - 2 thôi vì đằng sau phải chừa chỗ cho 2 thằng left, right
  for (let i = 0; i < nums.length - 2; i++) {
      
    // TỐI ƯU CỰC MẠNH: Vì mảng đã sort tăng dần, nếu thằng chốt mà > 0 
    // thì cộng mấy thằng đằng sau kiểu ko gì cũng > 0. Dừng luôn (Break)!
    if (nums[i] > 0) break;

    // LỌC TRÙNG CHO THẰNG CHỐT (Bỏ qua nếu giống thằng trước đó)
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Dựng 2 con trỏ kẹp chả
    let left = i + 1;
    let right = nums.length - 1;

    // Bắt đầu ép vào giữa
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // BINGO! Bỏ vào rổ
        res.push([nums[i], nums[left], nums[right]]);
        
        // LỌC TRÙNG CHO 2 CON TRỎ (Cái bẫy ăn tiền là ở đây)
        // Cứ thấy thằng kế tiếp giống y hệt thì nhích qua, ko tính
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        // Tránh xa đống trùng lặp xong thì nhích 2 con trỏ đi tiếp tìm bộ khác
        left++;
        right--;
      } 
      else if (sum < 0) {
        // Yếu quá thì kéo thằng bé lên
        left++;
      } 
      else {
        // To quá thì hạ thằng lớn xuống
        right--;
      }
    }
  }

  return res;
};
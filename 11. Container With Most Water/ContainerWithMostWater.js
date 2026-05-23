// You are given an integer array height of length n. There are n 
// vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104


// cách two pointer: 
// Khi mày nhích bất kỳ con trỏ nào vào giữa, chiều rộng (width) CẦM CHẮC 100% sẽ bị giảm đi 1 đơn vị.
// Vì chiều rộng bị thóp lại, nên mày CẦN TÌM MỘT CHIỀU CAO LỚN HƠN để vớt vát lại cái diện tích,
// hi vọng diện tích mới sẽ to hơn diện tích cũ.
// Giờ nhìn vào 2 cái vách hiện tại (ví dụ vách Trái cao 3, vách Phải cao 8).
// Nước đang bị giới hạn bởi thằng lùn hơn là thằng Trái (chiều cao = 3).
// Nếu mày dời thằng Phải (thằng cao): Chiều rộng giảm. Mày có tìm được thằng mới cao đến tận trời xanh đi nữa,
// thì mực nước vẫn bị giới hạn bởi thằng Trái (cao 3). 
// Tức là chiều rộng giảm + chiều cao đéo thể tăng = Diện tích chắc chắn GIẢM. Ngu gì mà dời thằng cao!
// Nếu mày dời thằng Trái (thằng lùn): Chiều rộng giảm, nhưng mày CÓ CƠ HỘI tìm được một vách mới cao hơn số 3 lúc nãy.
// Lúc đó mực nước sẽ dâng lên cao hơn, bù lại được cái chiều rộng bị mất, và diện tích có cơ hội TO HƠN!

var maxArea = function(height) {
  let s = 0
  let i = 0
  let j = height.length -1
  while (i < j) {
      let r = j - i
      let h = Math.min(height[i], height[j])
      let curr_s = r * h
      s = Math.max(curr_s, s)
      if (height[i] < height[j]) {
          i++
      } else j--
  } return s
}
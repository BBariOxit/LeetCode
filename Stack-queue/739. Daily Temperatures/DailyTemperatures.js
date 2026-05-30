// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, 
// keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:
// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

// cách tối ưu với satck: Monotonic Decreasing Stack (Stack giảm dần)
// Setup state: Tạo một mảng answer rỗng, nhét sẵn toàn số 0 vào, độ dài bằng đúng mảng temperatures.
// (Tý nữa thằng nào ko tìm được ngày nóng hơn thì nó mặc định là 0 luôn, đỡ phải xử lý).

// Khởi tạo một cái mảng làm stack. Lưu ý cực kỳ quan trọng: Stack này ko lưu "nhiệt độ",
// mà nó phải lưu cái Index (Vị trí/Chỉ số của ngày đó).
// Phải giữ index thì tý nữa mới làm phép trừ để tính ra "khoảng cách bao nhiêu ngày" được!

// Duyệt mảng (Loop): Chạy vòng lặp từ ngày đầu tiên i = 0 đến cuối mảng.
// Mỗi bước lặp, cầm trong tay nhiệt độ của ngày hôm nay là currTemp.

// Check hàng trong Stack (Core Logic):
// nhìn vào thằng nằm trên đỉnh Stack. Hỏi xem:
// "Ê, nhiệt độ ngày hôm nay (currTemp) có nóng hơn nhiệt độ của hồi xưa không?"

// Trong khi (while) Stack ko rỗng VÀ currTemp lớn hơn nhiệt độ của cái ngày đang nằm trên đỉnh Stack:
// Chúc mừng, đã tìm thấy "chân ái" cho cái ngày lạnh kia rồi!
// Lôi cổ thằng đỉnh Stack ra (gọi là prevIndex).
// Tính khoảng cách: daysToWait = i - prevIndex.
// Cập nhật ngay vào mảng kết quả: answer[prevIndex] = daysToWait.

// Vòng lặp while tiếp tục kiểm tra thằng tiếp theo trong Stack, vì biết đâu ngày hôm nay nóng kinh,
// giải cứu được cả 1 đống ngày lạnh lẽo trong quá khứ thì sao.
// Nhét vào Stack: Sau khi giải quyết xong xuôi bước 3 (hoặc ko có thằng nào ở đỉnh Stack thỏa mãn),
// ném luôn cái i (index của ngày hôm nay) vào Stack để nó chờ thời.
// Biết đâu tương lai có ngày nóng hơn sẽ đến cứu nó.
// Return: Chạy hết mảng thì quăng cái answer ra là xong kèo.

const dailyTemperatures = function(temperatures) {
  let stack = []
  let n = temperatures.length
  let answer = new Array(n).fill(0)
  for (let i = 0; i<n; i++) {
    let currTemp = temperatures[i]
    while (stack.length > 0 && currTemp > temperatures[stack[stack.length - 1]]) {
      let prevIndex = stack.pop()
      answer[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }
  return answer
}
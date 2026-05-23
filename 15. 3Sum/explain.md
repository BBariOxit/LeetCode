### Bước 1: Sắp xếp mảng (Sort)
Bài toán này bắt buộc phải sắp xếp mảng ban đầu để áp dụng thuật toán Two Pointers hiệu quả. Đoạn code `nums.sort((a,b) => a - b)` sẽ biến mảng đầu vào thành:
`[-2, -2, 0, 0, 2, 2, 2]` (Độ dài mảng = 7).

### Bước 2: Chạy vòng lặp `for`

**🔥 Lặp lần 1 (`i = 0`):**
* `nums[0] = -2`. Giá trị nhỏ hơn 0, tiếp tục xử lý.
* Kiểm tra trùng lặp `i`: Vì `i = 0` nên bỏ qua điều kiện `continue`.
* Khởi tạo hai con trỏ: `left = 1` (giá trị -2), `right = 6` (giá trị 2).
* **Vòng lặp `while (left < right)`:**
    * Tính tổng: `sum = -2 + (-2) + 2 = -2`.
    * `sum < 0` -> Chuyển sang nhánh `else left++`. Lúc này `left = 2` (giá trị 0).
    * Vòng lặp tiếp theo: `sum = -2 + 0 + 2 = 0`. Thỏa mãn điều kiện `if (sum === 0)`.
    * Thêm mảng con `[-2, 0, 2]` vào mảng kết quả `res`.
    * Xử lý loại bỏ trùng lặp ở hai đầu con trỏ (2 vòng `while` lồng bên trong):
        * `nums[left] === nums[left+1]` (tức là `nums[2] === nums[3]`, giá trị 0 = 0). Thỏa mãn điều kiện, tăng `left++` thành 3.
        * `nums[right] === nums[right-1]` (tức là `nums[6] === nums[5]`, giá trị 2 = 2). Thỏa mãn điều kiện, giảm `right--` thành 5. Ở vòng tiếp theo, phần tử tiếp tục trùng lặp: `nums[5] === nums[4]` -> giảm tiếp `right--` thành 4.
        * Cuối cùng cập nhật `left++` (thành 4) và `right--` (thành 3). Lúc này `left > right` (4 > 3), kết thúc vòng `while` của `i = 0`.

**🔥 Lặp lần 2 (`i = 1`):**
* `nums[1] = -2`.
* Thỏa mãn điều kiện `if (i > 0 && nums[i] === nums[i-1])` vì `nums[1] === nums[0]` (đều có giá trị là -2).
* Kích hoạt lệnh `continue`, bỏ qua phần logic phía dưới và chuyển sang vòng lặp tiếp theo nhằm tối ưu hiệu suất thực thi.

**🔥 Lặp lần 3 (`i = 2`):**
* `nums[2] = 0`.
* Khởi tạo: `left = 3` (giá trị 0), `right = 6` (giá trị 2).
* **Vòng lặp `while (left < right)`:**
    * Tính tổng: `sum = 0 + 0 + 2 = 2`.
    * `sum > 0` -> Chuyển sang nhánh `else if (sum > 0)`. Thực thi `right--`, lúc này `right = 5`.
    * (Quá trình này lặp lại với điều kiện `sum > 0` và `right--` liên tục giảm cho đến khi `left` không còn nhỏ hơn `right`).

**🔥 Lặp lần 4 (`i = 3`):**
* `nums[3] = 0`.
* Thỏa mãn điều kiện `if (i > 0 && nums[i] === nums[i-1])` vì trùng giá trị với phần tử liền trước (0 = 0). Thực thi lệnh `continue`.

**🔥 Lặp lần 5 (`i = 4`):**
* `nums[4] = 2`.
* Kích hoạt điều kiện tối ưu đầu tiên: `if (nums[i] > 0) break`.
* **Giải thích:** Do mảng đã được sắp xếp tăng dần, nếu phần tử hiện tại mang giá trị dương thì toàn bộ các phần tử phía sau chắc chắn cũng là số dương. Tổng của 3 số dương không thể bằng 0. Việc dùng `break` tại đây giúp thuật toán thoát sớm (early exit), tiết kiệm tối đa tài nguyên tính toán.

### Bước 3: Trả về kết quả
Thoát khỏi vòng lặp `for`, hàm `return res` trả về mảng kết quả cuối cùng: `[[-2, 0, 2]]`.
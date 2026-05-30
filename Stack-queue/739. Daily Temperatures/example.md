### Chạy thử thuật toán Monotonic Stack (Dry-run)

**Dữ liệu đầu vào (Test case):**
* `temperatures = [75, 71, 69, 72, 76]`. 
*(Đầu vào này bao phủ đủ các trường hợp: nhiệt độ giảm dần, tăng đột ngột và phần tử lớn nhất nằm ở cuối).*

### 1. Khởi tạo (Initial State)
* `n = 5` (Độ dài mảng).
* `answer = [0, 0, 0, 0, 0]` (Mảng kết quả ban đầu, mặc định là `0` nếu không tìm thấy ngày nóng hơn).
* `stack = []` (Chỉ lưu **chỉ số - index**, không lưu trực tiếp giá trị nhiệt độ).

---

### 2. Vòng lặp chạy từng bước

**👉 Bước 1: `i = 0` (Ngày 0, nhiệt độ 75)**
* `currentTemp = 75`.
* Kiểm tra `while`: `stack` đang rỗng $\rightarrow$ Bỏ qua vòng lặp.
* Lưu chỉ số vào stack: `stack.push(0)`.
* **Trạng thái:**
  * `stack = [0]`
  * `answer = [0, 0, 0, 0, 0]`

**👉 Bước 2: `i = 1` (Ngày 1, nhiệt độ 71)**
* `currentTemp = 71`.
* Đỉnh stack đang là index `0` (nhiệt độ 75).
* Kiểm tra `while`: 71 > 75? **Sai** (Nhiệt độ giảm) $\rightarrow$ Bỏ qua vòng lặp.
* Lưu chỉ số vào stack: `stack.push(1)`.
* **Trạng thái:**
  * `stack = [0, 1]`
  * `answer = [0, 0, 0, 0, 0]`

**👉 Bước 3: `i = 2` (Ngày 2, nhiệt độ 69)**
* `currentTemp = 69`.
* Đỉnh stack đang là index `1` (nhiệt độ 71).
* Kiểm tra `while`: 69 > 71? **Sai** $\rightarrow$ Bỏ qua vòng lặp.
* Lưu chỉ số vào stack: `stack.push(2)`.
* **Trạng thái:**
  * `stack = [0, 1, 2]`
  * `answer = [0, 0, 0, 0, 0]`

**👉 Bước 4: `i = 3` (Ngày 3, nhiệt độ 72) - Bắt đầu xử lý chuỗi ngày lạnh**
* `currentTemp = 72`.
* **Vào vòng lặp `while` (Lần 1):**
  * Đỉnh stack là `2` (nhiệt độ 69). 72 > 69? **Đúng!**
  * Lấy index ra: `prevIndex = stack.pop()` $\rightarrow$ Lấy `2` ra.
  * Tính toán khoảng cách: `answer[2] = i - prevIndex = 3 - 2 = 1`.
  * *`stack` lúc này: `[0, 1]`*
* **Vào vòng lặp `while` (Lần 2):**
  * Đỉnh stack mới là `1` (nhiệt độ 71). 72 > 71? **Đúng!**
  * Lấy index ra: `prevIndex = stack.pop()` $\rightarrow$ Lấy `1` ra.
  * Tính toán khoảng cách: `answer[1] = i - prevIndex = 3 - 1 = 2`.
  * *`stack` lúc này: `[0]`*
* **Vào vòng lặp `while` (Lần 3):**
  * Đỉnh stack mới là `0` (nhiệt độ 75). 72 > 75? **Sai** $\rightarrow$ Thoát vòng lặp.
* Lưu ngày hiện tại vào stack: `stack.push(3)`.
* **Trạng thái:**
  * `stack = [0, 3]` (Đã loại bỏ các ngày 1, 2 khỏi stack vì đã tìm được đáp án).
  * `answer = [0, 2, 1, 0, 0]` (Đã cập nhật kết quả cho ngày 1 và ngày 2).

**👉 Bước 5: `i = 4` (Ngày 4, nhiệt độ 76) - Xử lý phần tử lớn nhất**
* `currentTemp = 76`.
* **Vào vòng lặp `while` (Lần 1):**
  * Đỉnh stack là `3` (nhiệt độ 72). 76 > 72? **Đúng!**
  * Lấy index ra: `prevIndex = stack.pop()` $\rightarrow$ Lấy `3` ra.
  * Tính toán khoảng cách: `answer[3] = i - prevIndex = 4 - 3 = 1`.
  * *`stack` lúc này: `[0]`*
* **Vào vòng lặp `while` (Lần 2):**
  * Đỉnh stack mới là `0` (nhiệt độ 75). 76 > 75? **Đúng!**
  * Lấy index ra: `prevIndex = stack.pop()` $\rightarrow$ Lấy `0` ra.
  * Tính toán khoảng cách: `answer[0] = i - prevIndex = 4 - 0 = 4`.
  * *`stack` lúc này: `[]` (Rỗng)*
* **Vào vòng lặp `while` (Lần 3):** `stack` rỗng $\rightarrow$ Thoát vòng lặp.
* Lưu ngày hiện tại vào stack: `stack.push(4)`.
* **Trạng thái:**
  * `stack = [4]`
  * `answer = [4, 2, 1, 1, 0]`

---

### 3. Kết quả (Output)
* Kết thúc vòng lặp `for`, trả về mảng `answer`. 
* Phần tử cuối cùng (`index = 4`) vẫn nằm kẹt lại trong `stack`. Giá trị tương ứng của nó trong mảng `answer` vẫn giữ nguyên là `0` (hoàn toàn đúng với logic vì không có ngày nào trong tương lai nóng hơn nó).
* **Kết quả trả về:** `[4, 2, 1, 1, 0]`.
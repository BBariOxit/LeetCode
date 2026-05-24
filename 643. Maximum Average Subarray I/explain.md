### Chạy thử thuật toán Sliding Window (Dry-run)

**Dữ liệu đầu vào (Test case):**
* `nums = [1, 12, -5, -6, 50, 3]`
* `k = 4`

**Khởi tạo ban đầu:**
* `curr_sum = 0`

---

### Bước 1: Tính tổng cửa sổ đầu tiên
Chạy vòng lặp `for` từ `i = 0` đến `i = 3` (vì `k = 4`):
* **i = 0:** `curr_sum` = 0 + 1 = 1
* **i = 1:** `curr_sum` = 1 + 12 = 13
* **i = 2:** `curr_sum` = 13 + (-5) = 8
* **i = 3:** `curr_sum` = 8 + (-6) = 2

**Chốt khung cửa sổ đầu tiên:** * `curr_sum = 2` (Tổng của mảng con `[1, 12, -5, -6]`).
* Thiết lập kỷ lục ban đầu: `max_sum = curr_sum = 2`.

---

### Bước 2: Bắt đầu trượt cửa sổ
Chạy vòng lặp `for` từ `i = 4` đến hết mảng (i = 5).

**🔥 Lặp lần 1 (`i = 4`):**
* Khung cửa sổ trượt sang phải 1 bước.
* Phần tử bị văng ra phía sau: `nums[i - k]` tức là `nums[0] = 1`.
* Phần tử mới lọt vào khung: `nums[4] = 50`.
* Cập nhật tổng: `curr_sum = 2 - 1 + 50 = 51`. (Tương đương tổng của `[12, -5, -6, 50]`).
* Kiểm tra kỷ lục: 51 > `max_sum` (2) -> Cập nhật `max_sum = 51`.

**🔥 Lặp lần 2 (`i = 5`):**
* Khung cửa sổ tiếp tục trượt sang phải 1 bước.
* Phần tử bị văng ra phía sau: `nums[i - k]` tức là `nums[1] = 12`.
* Phần tử mới lọt vào khung: `nums[5] = 3`.
* Cập nhật tổng: `curr_sum = 51 - 12 + 3 = 42`. (Tương đương tổng của `[-5, -6, 50, 3]`).
* Kiểm tra kỷ lục: 42 không lớn hơn `max_sum` (51) -> Giữ nguyên `max_sum = 51`.

---

### Bước 3: Trả về kết quả
* Vòng lặp kết thúc vì đã duyệt hết mảng.
* Tính trung bình cộng lớn nhất: `max_sum / k` = `51 / 4` = `12.75`.
* Trả về kết quả: **12.75**.
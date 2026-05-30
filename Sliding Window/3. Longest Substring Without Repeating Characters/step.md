### Chạy thử thuật toán Longest Substring (Dry-run)

**Dữ liệu đầu vào (Test case):**
* Chuỗi `s = "abcba"` (Độ dài `n = 5`).
*(Test case này bao phủ toàn diện 3 kịch bản cốt lõi: Ký tự mới hoàn toàn, Ký tự trùng lặp nằm trong cửa sổ, và Cạm bẫy ký tự trùng lặp nhưng đã nằm ngoài cửa sổ).*

### 1. Khởi tạo (Initial State)
* `map = {}` (Dùng để lưu trữ ký tự và vị trí xuất hiện mới nhất của nó).
* `left = 0` (Con trỏ mép trái của cửa sổ).
* `maxLength = 0` (Lưu kỷ lục độ dài chuỗi con dài nhất).

---

### 2. Quá trình trượt cửa sổ (Duyệt con trỏ `right`)

**👉 Bước 1: `right = 0`, Ký tự `char = 'a'` (Kịch bản 1: Ký tự mới)**
* Kiểm tra: Map chưa có `'a'` $\rightarrow$ Thêm vào cửa sổ an toàn.
* Cập nhật vị trí: `map.set('a', 0)`. $\rightarrow$ `map = { a: 0 }`
* Tính độ dài hiện tại: `right - left + 1` = `0 - 0 + 1 = 1`.
* Cập nhật kỷ lục: `maxLength = 1`.
* **Trạng thái Cửa sổ:** `[a]bcba` (Đang chứa `"a"`).

**👉 Bước 2: `right = 1`, Ký tự `char = 'b'` (Kịch bản 1: Ký tự mới)**
* Kiểm tra: Map chưa có `'b'` $\rightarrow$ Thêm vào cửa sổ an toàn.
* Cập nhật vị trí: `map.set('b', 1)`. $\rightarrow$ `map = { a: 0, b: 1 }`
* Tính độ dài hiện tại: `1 - 0 + 1 = 2`.
* Cập nhật kỷ lục: `maxLength = 2`.
* **Trạng thái Cửa sổ:** `[ab]cba` (Đang chứa `"ab"`).

**👉 Bước 3: `right = 2`, Ký tự `char = 'c'` (Kịch bản 1: Ký tự mới)**
* Kiểm tra: Map chưa có `'c'` $\rightarrow$ Thêm vào cửa sổ an toàn.
* Cập nhật vị trí: `map.set('c', 2)`. $\rightarrow$ `map = { a: 0, b: 1, c: 2 }`
* Tính độ dài hiện tại: `2 - 0 + 1 = 3`.
* Cập nhật kỷ lục: `maxLength = 3`.
* **Trạng thái Cửa sổ:** `[abc]ba` (Đang chứa `"abc"`).

**👉 Bước 4: `right = 3`, Ký tự `char = 'b'` (Kịch bản 2: Trùng lặp NGAY TRONG cửa sổ)**
* Kiểm tra: Map **đã có** `'b'` tại `index = 1`.
* Đánh giá vị trí: `index (1) >= left (0)` là **ĐÚNG**. Tức là ký tự `'b'` cũ vẫn đang nằm trong phạm vi cửa sổ hiện tại.
* **Xử lý (Thu hẹp cửa sổ):** Kéo mép trái vượt qua vị trí của ký tự `'b'` cũ để loại bỏ sự trùng lặp.
  * `left = map.get('b') + 1` = `1 + 1 = 2`.
  * *(Cửa sổ nhảy cóc từ 0 lên 2, loại bỏ cụm "ab" ra khỏi phạm vi).*
* Cập nhật vị trí mới cho `'b'`: `map.set('b', 3)`. $\rightarrow$ `map = { a: 0, b: 3, c: 2 }`
* Tính độ dài hiện tại: `3 - 2 + 1 = 2`.
* Cập nhật kỷ lục: `maxLength = Math.max(3, 2) = 3` (Giữ nguyên kỷ lục cũ).
* **Trạng thái Cửa sổ:** `ab[cb]a` (Cửa sổ giờ chỉ còn chứa `"cb"`).

**👉 Bước 5: `right = 4`, Ký tự `char = 'a'` (Kịch bản 3 - Cạm bẫy: Trùng lặp NGOÀI cửa sổ)**
* Kiểm tra: Map **đã có** `'a'` tại `index = 0`.
* Đánh giá vị trí (Logic then chốt): `index (0) >= left (2)` là **SAI** (`0 < 2`).
* **Giải thích:** Chữ `'a'` từng xuất hiện ở vị trí `0`, nhưng mép trái (`left`) của cửa sổ hiện tại đã bị dịch chuyển đến vị trí `2` từ bước trước. Tức là ký tự `'a'` cũ đã **bị loại ra khỏi cửa sổ**. Cửa sổ hiện tại hoàn toàn hợp lệ và không bị trùng lặp.
* **Xử lý:** Bỏ qua, **không** cập nhật con trỏ `left`.
* Cập nhật vị trí mới cho `'a'`: `map.set('a', 4)`. $\rightarrow$ `map = { a: 4, b: 3, c: 2 }`
* Tính độ dài hiện tại: `4 - 2 + 1 = 3`.
* Cập nhật kỷ lục: `maxLength = Math.max(3, 3) = 3`.
* **Trạng thái Cửa sổ cuối cùng:** `ab[cba]` (Cửa sổ chứa `"cba"`).

---

### 3. Kết luận
* Kết thúc vòng lặp, hàm trả về `maxLength = 3`. 
* **Bài học rút ra:** Điều kiện `map.get(char) >= left` là chốt chặn quan trọng nhất của thuật toán. Nếu thiếu nó (chỉ check xem ký tự có trong map hay không), ở Bước 5, con trỏ `left` sẽ bị kéo giật lùi về vị trí `0 + 1 = 1`, làm hỏng hoàn toàn logic của cửa sổ trượt.
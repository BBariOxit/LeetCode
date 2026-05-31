### Chạy thử thuật toán Đảo ngược Danh sách liên kết (Dry-run)

**Dữ liệu đầu vào (Test case):**
* Xét một Linked List gồm 3 phần tử: `1 -> 2 -> 3 -> null`.

**Khởi tạo ban đầu (Initial State):**
* `prev = null` (Con trỏ lưu phần tử phía trước, ban đầu chưa có gì).
* `curr` trỏ vào `Node 1` (Con trỏ duyệt chuỗi, xuất phát từ đầu danh sách).
* Cấu trúc chuỗi hiện tại: `1 -> 2 -> 3 -> null`.

---

### Quá trình đảo ngược (Vòng lặp `while`)

**👉 Vòng lặp 1: `curr` đang ở `Node 1`**
* **Bước 1:** `let nextTemp = curr.next` $\rightarrow$ `nextTemp` lưu vị trí của `Node 2`. (Bước này để giữ liên kết, tránh mất dấu phần còn lại của danh sách).
* **Bước 2:** `curr.next = prev` $\rightarrow$ Bẻ hướng con trỏ của `Node 1` trỏ ngược về `null`. (Lúc này chuỗi bị tách làm đôi: `1 -> null` và `2 -> 3 -> null`).
* **Bước 3:** `prev = curr` $\rightarrow$ Tiến con trỏ `prev` lên vị trí của `Node 1`.
* **Bước 4:** `curr = nextTemp` $\rightarrow$ Tiến con trỏ `curr` sang `Node 2` (nhờ biến tạm đã lưu).
* **Trạng thái sau vòng 1:**
  * Đoạn đã đảo ngược: `null <- 1` (Con trỏ `prev` đang đứng ở `1`).
  * Đoạn chờ xử lý: `2 -> 3 -> null` (Con trỏ `curr` đang đứng ở `2`).

**👉 Vòng lặp 2: `curr` đang ở `Node 2`**
* **Bước 1:** `nextTemp = curr.next` $\rightarrow$ Lưu `Node 3`.
* **Bước 2:** `curr.next = prev` $\rightarrow$ Bẻ hướng con trỏ của `Node 2` trỏ về `prev` (đang là `Node 1`). Ta có chuỗi: `2 -> 1 -> null`.
* **Bước 3:** `prev = curr` $\rightarrow$ Tiến con trỏ `prev` lên vị trí của `Node 2`.
* **Bước 4:** `curr = nextTemp` $\rightarrow$ Tiến con trỏ `curr` sang `Node 3`.
* **Trạng thái sau vòng 2:**
  * Đoạn đã đảo ngược: `null <- 1 <- 2` (Con trỏ `prev` đang đứng ở `2`).
  * Đoạn chờ xử lý: `3 -> null` (Con trỏ `curr` đang đứng ở `3`).

**👉 Vòng lặp 3: `curr` đang ở `Node 3` (Node cuối cùng)**
* **Bước 1:** `nextTemp = curr.next` $\rightarrow$ Lưu `null` (Vì phía sau `Node 3` là kết thúc chuỗi).
* **Bước 2:** `curr.next = prev` $\rightarrow$ Bẻ hướng con trỏ của `Node 3` trỏ về `Node 2`. Ta có chuỗi hoàn chỉnh: `3 -> 2 -> 1 -> null`.
* **Bước 3:** `prev = curr` $\rightarrow$ Tiến con trỏ `prev` lên vị trí của `Node 3`.
* **Bước 4:** `curr = nextTemp` $\rightarrow$ Tiến con trỏ `curr` sang `null`.
* **Trạng thái sau vòng 3:**
  * Đoạn đã đảo ngược: `null <- 1 <- 2 <- 3` (Con trỏ `prev` đang đứng ở `3`, đây chính là `Head` mới).
  * `curr` lúc này mang giá trị `null`.

---

### Kết thúc thuật toán
* Vòng lặp `while (curr !== null)` kiểm tra thấy `curr` đã chạm `null`, lập tức dừng vòng lặp.
* Lệnh `return prev;` trả về `Node 3`. Vì các liên kết đã được bẻ nối tiếp nhau thành `3 -> 2 -> 1 -> null`, hệ thống sẽ nhận được trọn vẹn danh sách liên kết mới đã được đảo ngược.
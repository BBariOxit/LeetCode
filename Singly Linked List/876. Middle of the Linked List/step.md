### Hiểu bản chất bộ nhớ của Linked List trong JavaScript

Trước khi chạy thuật toán, cần nắm rõ cấu trúc thực tế của Linked List `1 -> 2 -> 3` trong bộ nhớ JavaScript:

```javascript
let head = { val: 1, next: { val: 2, next: { val: 3, next: null } } }
```

Khi khởi tạo `let slow = head`, bản chất là biến `slow` đang trỏ đến địa chỉ vùng nhớ của Object đầu tiên (`Node 1`). Khi thực thi lệnh `slow = slow.next`, `slow` sẽ từ bỏ `Node 1` và chuyển sang nắm giữ địa chỉ bộ nhớ được lưu trong thuộc tính `next` (tức là `Node 2`).

---

### CASE 1: Danh sách có số lượng nút LẺ (5 Node)

**Đầu vào (Input):** `1 -> 2 -> 3 -> 4 -> 5 -> null`

**🚀 Trạng thái khởi tạo (Trước vòng lặp):**
- `slow` trỏ vào `Node 1` (`slow.val = 1`).
- `fast` trỏ vào `Node 1` (`fast.val = 1`).
- Kiểm tra điều kiện `while`: 
  - `fast !== null` (Đúng, đang là `Node 1`).
  - `fast.next !== null` (Đúng, `fast.next` là `Node 2`).
  - -> Hợp lệ! Bắt đầu vòng lặp.

**🕒 Vòng lặp số 1:**
- `slow = slow.next` -> `slow` tiến 1 bước sang `Node 2`.
- `fast = fast.next.next` -> `fast` nhảy cóc 2 bước qua `Node 2`, đáp xuống `Node 3`.
- Cập nhật trạng thái: `slow.val = 2`, `fast.val = 3`.
- Kiểm tra điều kiện `while`: `fast !== null` và `fast.next !== null` (vì `fast.next` là `Node 4`). -> Hợp lệ.

**🕒 Vòng lặp số 2:**
- `slow = slow.next` -> `slow` tiến sang `Node 3`.
- `fast = fast.next.next` -> `fast` nhảy cóc qua `Node 4`, đáp xuống `Node 5`.
- Cập nhật trạng thái: `slow.val = 3`, `fast.val = 5`.
- Kiểm tra điều kiện `while`: 
  - `fast !== null` (Đúng, đang là `Node 5`).
  - `fast.next !== null` (**Sai!** Vì `Node 5` là phần tử cuối cùng, `next` của nó trỏ vào `null`).
  - -> Điều kiện sai, vòng lặp dừng lại ngay lập tức.

**🏁 Kết thúc:**
Hàm thực thi lệnh `return slow`. Lúc này `slow` đang trỏ vào `Node 3`. Kết quả trả về chính xác là nút ở giữa danh sách.

---

### CASE 2: Danh sách có số lượng nút CHẴN (6 Node)

**Đầu vào (Input):** `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null`

**🚀 Trạng thái khởi tạo (Trước vòng lặp):**
- `slow` và `fast` đều trỏ vào `Node 1`. Điều kiện `while` ban đầu hợp lệ.

**🕒 Vòng lặp số 1:**
- `slow` tiến sang `Node 2`.
- `fast` nhảy cóc sang `Node 3`.
- Cập nhật trạng thái: `slow.val = 2`, `fast.val = 3`. -> Điều kiện `while` hợp lệ.

**🕒 Vòng lặp số 2:**
- `slow` tiến sang `Node 3`.
- `fast` nhảy cóc sang `Node 5`.
- Cập nhật trạng thái: `slow.val = 3`, `fast.val = 5`. -> Điều kiện `while` vẫn hợp lệ (vì `fast.next` là `Node 6`).

**🕒 Vòng lặp số 3 (Bước quyết định):**
- `slow = slow.next` -> `slow` tiến sang `Node 4`.
- `fast = fast.next.next` -> `fast.next` đang là `Node 6`. Do đó, thuộc tính `next` của `Node 6` sẽ trỏ vào `null`. Con trỏ `fast` chính thức bước ra khỏi danh sách và mang giá trị `null`.
- Cập nhật trạng thái: `slow.val = 4`, `fast = null`.
- Kiểm tra điều kiện `while`:
  - `fast !== null` (**Sai!** `fast` hiện tại đã là `null`).
  - -> Vòng lặp dừng lại ngay lập tức.

**🏁 Kết thúc:**
Hàm thực thi lệnh `return slow`. Lúc này `slow` đang giữ `Node 4`. Theo yêu cầu của đề bài: *"Nếu có 2 nút giữa (3 và 4), hãy trả về nút thứ hai"*. Kết quả trả về `Node 4` là hoàn toàn chính xác.

---

### 💡 Bài học rút ra (Key Takeaways)

Sự phối hợp nhịp nhàng giữa hai con trỏ giúp xác định chính xác điểm dừng của thuật toán:
1. **Nếu danh sách có số lượng nút LẺ:** Con trỏ `fast` sẽ dừng lại ngay tại phần tử cuối cùng của mảng (Dừng vì điều kiện `fast.next !== null` bị vi phạm).
2. **Nếu danh sách có số lượng nút CHẴN:** Con trỏ `fast` sẽ vượt qua phần tử cuối cùng và rơi vào vùng `null` (Dừng vì điều kiện `fast !== null` bị vi phạm).

Do đó, bắt buộc phải có đủ cả hai chốt chặn `fast !== null` và `fast.next !== null` trong điều kiện của vòng lặp `while`. Nếu thiếu một trong hai, chương trình sẽ gặp lỗi Runtime Error (truy xuất thuộc tính `next` của một đối tượng `null`).
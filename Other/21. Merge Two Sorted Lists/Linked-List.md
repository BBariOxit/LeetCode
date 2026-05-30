## Linked List là gì?
Linked List (Danh sách liên kết) là một cấu trúc dữ liệu tuyến tính dùng để lưu trữ các phần tử.
Khác với mảng (array) – nơi các phần tử nằm liên tiếp trong bộ nhớ – Linked List gồm nhiều node (nút) rời rạc, mỗi node chứa:
- Data (dữ liệu)
- Reference/Pointer (con trỏ) trỏ đến node tiếp theo
Các node được nối với nhau như một chuỗi.

## Cấu trúc của một Node
Một node trong Linked List thường gồm:
- data: giá trị lưu trữ (ví dụ: số nguyên, chuỗi, object…)
- next: địa chỉ của node kế tiếp
Ví dụ: [10 | next] → [20 | next] → [30 | null]
- Node đầu tiên gọi là head
- Node cuối cùng có next = null

## Đặc điểm của Linked List
- Không cần bộ nhớ liên tiếp
Khác với Array, Linked List không cần cấp phát vùng nhớ liền nhau. Mỗi node có thể nằm ở vị trí khác nhau trong RAM.
- Kích thước linh hoạt
Có thể thêm hoặc xóa phần tử dễ dàng mà không cần tạo mảng mới.
- Truy cập chậm hơn mảng
Muốn lấy phần tử thứ 5, phải duyệt từ đầu → không truy cập trực tiếp bằng chỉ số như Array.

## Các loại Linked List
# 1. Singly Linked List (Danh sách liên kết đơn)
Mỗi node chỉ trỏ đến node tiếp theo.
VD: A → B → C → null
Chỉ duyệt theo 1 chiều.

# 2. Doubly Linked List (Danh sách liên kết đôi)
Mỗi node có 2 con trỏ:
- next: trỏ tới node sau
- prev: trỏ tới node trước
VD: null ← A ↔ B ↔ C → null
Có thể duyệt 2 chiều.

# 3. Circular Linked List (Danh sách liên kết vòng)
Node cuối trỏ lại node đầu.
VD: A → B → C
    ↑       ↓
    ← ← ← ← ←
Dùng trong các bài toán vòng tròn (ví dụ: vòng chơi game).

## Các thao tác cơ bản
Thêm phần tử
- Thêm đầu
- Thêm cuối
- Thêm vào vị trí bất kỳ
Xóa phần tử
- Xóa đầu
- Xóa cuối
- Xóa theo giá trị
Duyệt danh sách
- Dùng vòng lặp để đi từ head đến khi next = null.

## So sánh Linked List và Array
| Tiêu chí         | Array       | Linked List     |
| ---------------- | ----------- | --------------- |
| Bộ nhớ           | Liên tiếp   | Không liên tiếp |
| Truy cập phần tử | Nhanh O(1)  | Chậm O(n)       |
| Thêm/Xóa giữa    | Tốn chi phí | Nhanh hơn       |
| Kích thước       | Cố định     | Linh hoạt       |

## Khi nào nên dùng Linked List?
Nên dùng khi:
- Cần thêm/xóa dữ liệu thường xuyên
- Không biết trước số lượng phần tử
- Không cần truy cập ngẫu nhiên nhiều
Không nên dùng khi:
- Cần truy cập phần tử theo chỉ số nhanh
- Cần hiệu năng cao cho tìm kiếm
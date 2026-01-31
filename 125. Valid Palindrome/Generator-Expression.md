# Bản chất: "Kẻ hứa lèo" vĩ đại
cứ tưởng tượng thế này:
- List Comprehension ([]): Là một thằng đầu bếp nấu sẵn 100 bát phở rồi bày ra bàn. Mày chưa kịp ăn nó đã bắt dọn chỗ để đặt 100 cái bát đó rồi. Tốn không gian kinh.

- Generator Expression (()): Là một thằng đầu bếp chỉ đứng đợi. Khi nào mày bảo "Cho tao một bát", nó mới bắt đầu trụng bánh, chan nước dùng rồi đưa cho mày. Ăn xong bát đó mày mới bảo nó làm bát tiếp theo.

=> Kết quả: Mày chỉ tốn chỗ cho đúng 1 cái bát trên bàn, thay vì 100 cái. Đó chính là sự khác biệt giữa O(n) space và O(1) space (về mặt lưu trữ phần tử).

# Cú pháp và sự ảo diệu của bộ nhớ
Nhìn cái ví dụ này để thấy sự khác biệt về "độ nặng":

import sys
`Tạo một List 1 triệu số`
list_comp = [i for i in range(1000000)]
`Tạo một Generator 1 triệu số`
gen_exp = (i for i in range(1000000))
print(sys.getsizeof(list_comp)) => Nặng khoảng 8,000,000 bytes (8MB)
print(sys.getsizeof(gen_exp))  => Nặng khoảng 112 bytes (Đéo bằng một cái ảnh mờ)

=> 1 triệu phần tử mà cái Generator nó nặng có 112 bytes. Tại sao? Vì nó ko chứa phần tử nào cả, nó chỉ chứa thuật toán để tạo ra phần tử tiếp theo.

# Cơ chế hoạt động: Giao thức Iterator
Thằng Generator này nó hoạt động dựa trên cơ chế next().
Khi tạo ra nó, nó đứng ở vạch xuất phát.
Khi gọi next(gen), nó chạy cái vòng lặp for bên trong, tìm đến thằng thỏa mãn điều kiện if, rồi yield (nhả) kết quả đó ra.
Sau đó nó đứng im tại chỗ đó, đóng băng trạng thái lại, ko chạy tiếp cho đến khi gọi next() lần nữa.
Khi hết hàng để nhả, nó ném ra cái lỗi StopIteration.
Thằng "".join() viết ở trên thực chất là nó cứ liên tục gọi next() cái Generator đó để lấy từng chữ cái rồi dán vào chuỗi kết quả.

# Tại sao nó lại "ngon" hơn trong bài Palindrome?
Quay lại cái dòng: "".join(char.lower() for char in s if char.isalnum())
- Nếu dùng [], Python phải: Quét s -> Lọc rác -> Tạo List sạch -> Đưa List vào join.
- Nếu dùng (), Python làm kiểu: join bảo "Cho tao 1 chữ", Generator quét s tìm thấy chữ đầu tiên, đưa cho join. join lại bảo "Thêm chữ nữa", Generator quét tiếp từ vị trí cũ...

Sự thật phũ phàng: Generator chỉ dùng được `MỘT LẦN`. Mày mà dùng nó để duyệt qua một lần rồi, muốn dùng lại thì phải tạo cái mới. Nó ko lưu lại gì đâu, giống như tờ giấy nháp dùng xong là vứt ấy.

# Khi nào dùng cái nào?
## List Comprehension []
- Tốc độ:	Nhanh hơn nếu cần duyệt đi duyệt lại nhiều lần.	
- Bộ nhớ:	Tốn RAM kinh.	
- Tính chất: Có thể truy cập index (list[5]), dùng lại nhiều lần.
## Generator Expression ()
- Tốc độ:	Chậm hơn một chút do overhead của việc gọi hàm.
- Bộ nhớ:	Cực kỳ tiết kiệm.	
- Tính chất: Chỉ đọc từ đầu đến cuối, dùng một lần là biến mất.

=> Nếu chỉ cần lọc dữ liệu để đưa vào một cái hàm khác (như sum, max, min, join), hãy dùng Generator. Đừng có làm thằng đần thừa RAM.
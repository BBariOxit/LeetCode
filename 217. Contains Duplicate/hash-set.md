## Hash Set (Bảng Băm)
MÔ HÌNH: CÁI TỦ GỬI ĐỒ SIÊU THỊ

Tưởng tượng cái RAM máy tính là một dãy Tủ Gửi Đồ trong siêu thị (đây chính là cái Array nền tảng bên dưới). Giả sử dãy tủ này có 10 ngăn, đánh số từ 0 đến 9.
Làm sao để cất cái cặp (dữ liệu) vào tủ và lấy ra trong 1 nốt nhạc mà không cần đi mở từng ngăn để tìm?

## 1.HASH FUNCTION
Đây là trái tim của cả hệ thống. Hàm băm là một cái máy xay thịt toán học.
Input: Bất cứ cái gì (Số, Chuỗi, Object...).
Output: Một con số nguyên (gọi là Hash Code).
Quy tắc vàng: Cùng một đầu vào, luôn luôn ra cùng một đầu ra.

Ví dụ:
hash(100) -> ra số 2384
hash(100) -> lần sau chạy lại vẫn phải ra 2384.

## 2.QUY TRÌNH CẤT ĐỒ (INSERT/ADD)
Giả sử muốn cất số 105 vào Set.

Bước 1 (Băm): Máy tính chạy hàm hash: hash(105). Giả sử nó ra số to tổ bố là 9876543.
Bước 2 (Tính chỉ số - Modulo): Cái tủ chỉ có 10 ngăn (0-9). Làm sao nhét số 9876543 vào?
Dùng phép chia lấy dư (%): index = 9876543 % 10 = 3 ->Số dư là 3.
Bước 3 (Cất): đi thẳng đến ngăn tủ số 3, mở ra, ném số 105 vào đó.
Độ phức tạp: Tính toán hash + chia dư + ném vào = O(1)

## 3. QUY TRÌNH TÌM ĐỒ (LOOKUP/CONTAINS)
Giờ hỏi: if 105 in my_set:
Bước 1: Máy tính lại băm 105: hash(105) -> Vẫn ra 9876543.
Bước 2: Lại chia dư: 9876543 % 10 = 3.
Bước 3: Máy tính lao thẳng đến ngăn tủ số 3.
Mở ra thấy có số 105 nằm chềnh ềnh trong đó.
Kết luận: TRUE (Có hàng).

=> Nó ko cần ngó sang ngăn số 0, 1, 2, 4... làm gì cả. Nó biết chính xác địa chỉ nhà thằng 105 ở đâu. Đó là lý do nó nhanh :D

## 4. VẤN ĐỀ HÓC BÚA: ĐỤNG ĐỘ (COLLISION)
Giả sử muốn cất thêm số 253.
hash(253) -> ra 12343
index = 12343 % 10 = 3.
Ngăn số 3 đang chứa thằng 105 rồi. Giờ thằng 253 cũng đòi chui vào ngăn số 3. Hai thằng đực rựa chung một phòng à? Đây gọi là Collision (Đụng độ).

Cách giải quyết (phổ biến nhất - Chaining): Biến cái ngăn tủ số 3 thành một cái Danh sách liên kết (Linked List).
Ngăn 3: [105] -> [253].
Lúc này, nếu tìm 105 hay 253, máy tính sẽ đến ngăn 3, rồi duyệt qua cái danh sách ngắn ngủn này.Tuy là phải duyệt, nhưng vì danh sách này rất ngắn (thường chỉ 1-2 phần tử), nên nó vẫn coi là O(1).

## Tại sao Hash Set tốn RAM?
Vì chúng ta phải xây một cái dãy tủ (Array) đủ to để hạn chế việc "chung phòng" (Collision). Nếu tủ quá bé, chúng nó chen chúc nhau thì Hash Set sẽ biến thành Linked List và chậm như rùa (O(n)). Nên máy tính luôn tự động phóng to cái tủ ra khi thấy sắp đầy.

BẢN CHẤT: NÓ LÀ MỘT CÁI MẢNG "RỖNG RUỘT"
Bên dưới nó (Under the hood), nó vẫn được xây dựng trên một cái Mảng (Array) bình thường thôi.
Nhưng sự khác biệt giữa Mảng thường (List) và Mảng của Hash Set nằm ở cách sử dụng không gian:

VD
Muốn lưu 5 phần tử để tra cứu O(1)?
Thằng Hash Set nó sẽ ko bao giờ tạo cái mảng độ dài 5. 
Nó sẽ tạo cái mảng độ dài 8, 16, hoặc to hơn.Tại sao? 
Để đảm bảo các phần tử nằm dãn ra, hạn chế việc chúng nó "đụng hàng" (Collision).
Quy tắc: Để đạt tốc độ O(1), cái mảng nền tảng của Hash Set LÚC NÀO CŨNG PHẢI CÓ RẤT NHIỀU CHỖ TRỐNG (Empty Slots).

`LOAD FACTOR (HỆ SỐ TẢI)`
Đây là lý do chính khiến RAM bị ăn mòn. Trong Khoa học máy tính,
có một chỉ số gọi là Load Factor (thường là 0.75 hay 75%).
Nghĩa là: Nếu cái thùng rác đầy 75%, máy tính coi như nó ĐÃ ĐẦY và bắt buộc phải mở rộng. 

VD
Giả sử Hash Set đang có dung lượng (Capacity) là 100 ô.
Khi nhét đến phần tử thứ 76.
Máy tính hét lên: "chật quá rồi ( > 75%), bọn nó đánh nhau (collision) rồi!".
HÀNH ĐỘNG CỦA NÓ (RESIZING):
- Nó tạo ra một cái mảng mới, to gấp đôi: 200 ô.
- Nó copy toàn bộ 76 thằng cũ sang nhà mới 200 ô này (Rehashing).
- Nó xóa cái mảng 100 ô cũ đi.

Chỉ lưu có 76 số, nhưng bộ nhớ đang phải ôm một cái mảng 200 ô.
=> 124 ô bộ nhớ đang để trống, ko làm gì cả :D.
=> Đó chính là sự lãng phí RAM để đổi lấy sự "thông thoáng" cho tốc độ tìm kiếm.

`TẠI SAO PHẢI LÀM THẾ? (COLLISION HELL)`
"Sao ko để đầy 100% (100 ô) rồi hãy mở rộng?"
Nếu để cái mảng đầy ắp:Tỉ lệ Đụng độ (Collision) sẽ tăng vọt.
Hàm Hash tính ra index nào cũng thấy có người ngồi rồi. 
Lúc đó, các phần tử chen chúc nhau tại một index, tạo thành một dây xích dài (Linked List)
Khi tìm kiếm in, lại phải mò mẫm trong cái dây xích đó.
=> TỐC ĐỘ SỤT GIẢM: Từ O(1) (lao phát đến ngay) thành mẹ nó O(n) (đi dò từng thằng).
=> Hash Set biến thành cái Linked List trá hình. Phế luôn
## Typed Arrays là cái gì?
Bình thường, mảng trong JS ([]) cực kỳ tốn RAM vì nó phải lưu đủ thứ: giá trị, kiểu dữ liệu, các thuộc tính linh tinh. Nó ko được lưu liên tục trong bộ nhớ đâu, nên truy cập chậm kinh.

Typed Arrays thì khác. Nó là một vùng nhớ liền mạch (Buffer), thô và cực kỳ sát với phần cứng. Nó ko chứa object, nó chỉ chứa số nhị phân.

## Ý nghĩa của những cái tên
Uint8Array:
- U: Unsigned (Không dấu, chỉ có số dương).
- int: Integer (Số nguyên).
- 8: 8-bit (Mỗi phần tử chiếm đúng 8 bit = 1 byte).
- Giá trị: Từ 0 đến 255. Thích hợp làm Lookup Table cho ASCII vì mã ASCII cũng chỉ từ 0-255.

Uint16Array: 
- Kích thước (Byte): 2
- Số nguyên không dấu
- Khoảng giá trị: 0 đến 65,535

Int32Array:
- Số nguyên có dấu (có cả âm cả dương).
- 32-bit (Mỗi phần tử chiếm 4 bytes).
- Giá trị: Khoảng +- 2 tỷ. Dùng để xử lý số lớn hoặc tọa độ trong Game.

Float64Array:
- Số thực (có dấu phẩy động).
- 64-bit (8 bytes). Giống hệt kiểu Number mặc định trong JS nhưng được lưu liên tục.

BigInt64Array:
- Kích thước (Byte): 8
- Số nguyên 64-bit (Dùng cho số cực lớn)
- Khoảng giá trị: -2^63 đến 2^63-1
...
## Cấu trúc bên dưới: Buffer và View
Typed Array ko hoạt động một mình. Nó gồm 2 phần:
- ArrayBuffer: Cái đống dữ liệu thô (mớ nhị phân).
- Typed Array (View): Cái "kính lúp" để nhìn vào đống nhị phân đó theo kiểu gì (8-bit, 32-bit hay 64-bit).

## Sự thật phũ phàng
ko phải lúc nào dùng Typed Array cũng nhanh. Nếu chỉ làm mấy cái web bán hàng, hiển thị dăm ba cái text thì dùng mảng [] cho nó nhàn cái thân.

Nhưng nếu làm:
- Xử lý ảnh/video trực tiếp trên trình duyệt.
- Làm Game (WebGL/WebGPU).
- Tính toán ma trận, AI trong JS.

=> thì Typed Arrays là bắt buộc.

## Giải thích hiện tượng "Tràn số" (Overflow)
Nếu dùng Uint8Array (giới hạn 0-255) mà nhét số 256 vào:
- JS sẽ làm gì? Nó thực hiện phép chia lấy dư: 256 (mod 256) = 0.
- Kết quả: Số 256 biến thành 0, 257 biến thành 1.
Đây là lý do vì sao khi làm việc với Typed Arrays, phải cực kỳ tỉnh táo về cái `(Range)` của dữ liệu. Nhét con voi (Int32) vào cái tủ lạnh mini (Uint8) là con voi nó biến thành con kiến ngay lập tức.
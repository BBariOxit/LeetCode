## Lookup Table (LUT) là gì?
Lookup Table (LUT) thực chất là một cái chiêu trò đổi Không gian (Space) lấy Thời gian (Time). Thay vì bắt cái CPU phải vắt óc ra tính toán hoặc chạy logic if-else lồng nhằng thì m tính sẵn kết quả rồi vứt vào một cái mảng. Khi cần, chỉ việc thò tay vào bốc ra là xong.

## Bản chất: "Mua sẵn thay vì tự nấu"
Tưởng tượng đi ăn phở:
- Cách ko dùng LUT: khi vào quán, ông chủ mới bắt đầu đi xay gạo, tráng bánh, ninh xương... Đợi đến mùa quýt mới có ăn. Đây là cách dùng logic tính toán phức tạp hoặc gọi hàm liên tục.
- Cách dùng LUT: Ông chủ đã làm sẵn 100 bát phở để trên kệ. khi vào, ổng chỉ việc bốc một bát đưa cho ăn. Cực nhanh! Cái kệ đó chính là Lookup Table.

## Tại sao nó lại "vả chết" mọi loại logic thông thường?
Trong máy tính, phép toán Truy cập mảng theo chỉ số (Index Access) là một trong những phép toán nhanh nhất quả đất (O(1)).
- Logic if-else / switch: CPU phải thực hiện các lệnh so sánh, nhảy nhánh (branching). Nếu dữ liệu đầu vào lộn xộn, CPU sẽ bị "vấp" (Branch Misprediction), làm giảm hiệu năng thê thảm.
- Lookup Table: Ko cần so sánh gì hết. Mày đưa tao cái "chỉ số" (ví dụ mã ASCII), tao nhảy thẳng tới ô nhớ đó và lụm kết quả. Ko có sai số, Ko có vấp váp.

## Phân loại Lookup Table
- `A. Static Lookup Table (Bảng tĩnh)`
Được tạo sẵn từ lúc viết code. 
Ứng dụng: Check ký tự hợp lệ, bảng mã màu, bảng tính sẵn các giá trị lượng giác (sin, cos).
- `Dynamic Lookup Table (Bảng động / Memoization)`
Vừa chạy vừa điền vào bảng. Cái gì tính rồi thì lưu lại, lần sau gặp lại thì bốc ra dùng luôn.
Ứng dụng: Quy hoạch động (Dynamic Programming), Caching.

## Ưu điểm và Hạn chế (Sự thật phũ phàng)
`Ưu điểm:`
- Tốc độ: Nhanh kinh hoàng, tiệm cận giới hạn vật lý của RAM.
- Đơn giản hóa code: Dẹp bỏ đống if-else rác rưởi.
`Hạn chế:`
- Tốn bộ nhớ: Mày phải dành ra một khoảng RAM để chứa cái bảng. Nếu cái "chỉ số" của mày lên tới hàng tỷ (ví dụ check số điện thoại), mày ko thể tạo một cái mảng 1 tỷ phần tử được. Lúc đó phải dùng Hash Map (nhưng Hash Map lại chậm hơn LUT một tí).
- Khởi tạo: Mất một khoảng thời gian cực ngắn lúc đầu để xây dựng bảng.

## Khi nào nên dùng?
- Dữ liệu đầu vào có giới hạn nhỏ: Ví dụ: 256 ký tự ASCII, 65536 giá trị màu, v.v.
- Cần hiệu năng cực cao: Trong Game Engine, xử lý tín hiệu số
- Hàm tính toán quá nặng: Ví dụ cần tính căn bậc hai của 10.000 số thường xuyên, hãy tính sẵn rồi nhét vào bảng.

## Ví dụ thực tế: Check ký tự Alphanumeric
- Khi ko dùng LTU
function isAlnum(char) {
  return /[a-z0-9]/i.test(char)
  // Chậm vì khởi động máy ảo Regex
}
- Cách dùng Lookup Table
const lut = new Uint8Array(256); // Tạo bảng cho toàn bộ 256 ký tự ASCII mở rộng
for(let i=0; i<256; i++) {
  const c = String.fromCharCode(i)
  if (/[a-zA-Z0-9]/.test(c)) lut[i] = 1 // Đánh dấu hàng xịn là 1
}

// Lúc dùng:
if (lut[s.charCodeAt(i)]) { 
    // Nhảy thẳng tới ô nhớ, tốc độ bàn thờ!
}

## Tại sao dùng Uint8Array cho cái Lookup Table?
- Tiết kiệm RAM kinh khủng: Một mảng [] chứa 128 số có thể ngốn vài KB. Một Uint8Array(128) chỉ tốn đúng 128 bytes. ko hơn, ko kém.

- Tốc độ bàn thờ: Vì nó lưu liên tục trong RAM, CPU của mày có thể đọc một lúc cả cụm phần tử vào Cache. Truy cập vào isAlnum[code] lúc này nhanh ko khác gì dùng ngôn ngữ C hay C++.

- ko có Garbage Collection (GC) làm phiền: Dùng mảng thường mà cứ tạo rồi xóa liên tục là thằng GC của JS sẽ nhảy vào dọn dẹp, làm lag máy. Typed Array ổn định hơn nhiều.
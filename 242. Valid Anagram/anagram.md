## anagram là gì?
Anagram (đảo chữ) hiểu đơn giản là hai chuỗi y hệt nhau về nguyên liệu nhưng khác nhau về cách chế biến.

Để một thằng là Anagram của thằng kia, nó phải thỏa mãn 2 điều kiện bắt buộc:
- Dùng chung các loại ký tự: Thằng này có chữ a thì thằng kia cũng phải có chữ a.
- Số lượng mỗi ký tự phải bằng khít nhau: Thằng này có 3 chữ a thì thằng kia cũng phải có đúng 3 chữ a, ko được thừa cũng ko được thiếu.

## ví dụ
Ví dụ 1: s = "anagram", t = "nagaram"
Cả hai thằng đều được cấu tạo từ: 3 chữ a, 1 chữ n, 1 chữ g, 1 chữ r, 1 chữ m.
Thứ tự sắp xếp kệ mẹ nó, miễn là "nguyên liệu" giống nhau là được. -> TRUE.

Ví dụ 2: s = "rat", t = "car"
Thằng rat có chữ t nhưng ko có chữ c.
Thằng car có chữ c nhưng ko có chữ t.

Nguyên liệu khác nhau hoàn toàn. -> FALSE.

## Tư duy "Thợ Code" (Visualized)
Cứ tưởng tượng có một cái túi đựng các chữ cái bằng gỗ. Bốc các chữ cái trong từ s bỏ vào túi, sau đó lấy các chữ cái từ trong t ra khỏi túi đó.
Nếu cuối cùng cái túi trống rỗng => đó là Anagram.
Nếu cuối cùng trong túi vẫn còn thừa chữ, hoặc đang cần lấy chữ c mà trong túi ko có => thì đó là hàng pha fake.
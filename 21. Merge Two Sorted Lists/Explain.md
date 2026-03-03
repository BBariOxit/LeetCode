## cách 2
const mergeTwoLists2 = (list1, list2) => {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists2(list1, list2.next)
    return list2
  }
}

## 1. GIAI ĐOẠN ĐI VÀO (RECURSION CALLS)
Mỗi bước là một lần hàm tự gọi chính nó. Máy tính sẽ "đóng băng" trạng thái hiện tại để nhảy vào tầng sâu hơn.

Bước 1: list1 = [1,2,4], list2 = [1,3,4]
- So sánh: 1 (l1) vs 1 (l2). Bằng nhau thì theo code nó rơi vào else (chọn list2).
- Treo máy: Node(1 của l2).next = mergeTwoLists([1,2,4], [3,4])
- Trạng thái: Đang đợi kết quả để nối vào sau con số 1 của list2.

Bước 2: list1 = [1,2,4], list2 = [3,4]
- So sánh: 1 (l1) vs 3 (l2). 1 nhỏ hơn.
- Treo máy: Node(1 của l1).next = mergeTwoLists([2,4], [3,4])
- Trạng thái: Đang đợi để nối vào sau con số 1 của list1.

Bước 3: list1 = [2,4], list2 = [3,4]
- So sánh: 2 (l1) vs 3 (l2). 2 nhỏ hơn.
- Treo máy: Node(2 của l1).next = mergeTwoLists([4], [3,4])
- Trạng thái: Đang đợi để nối vào sau con số 2.

Bước 4: list1 = [4], list2 = [3,4]
- So sánh: 4 (l1) vs 3 (l2). 3 nhỏ hơn.
- Treo máy: Node(3 của l2).next = mergeTwoLists([4], [4])
- Trạng thái: Đang đợi để nối vào sau con số 3.

Bước 5: list1 = [4], list2 = [4]
- So sánh: 4 (l1) vs 4 (l2). Rơi vào else (chọn list2).
- Treo máy: Node(4 của l2).next = mergeTwoLists([4], null)

Bước 6 (Chạm đáy): list1 = [4], list2 = null
- Gặp: if (!list2) return list1;

HÀNH ĐỘNG: Trả về nguyên cái Node(4) của list1. BẮT ĐẦU QUAY XE!

## 2. GIAI ĐOẠN QUAY VỀ (BACKTRACKING & RETURNING)
Bây giờ là lúc "trả nợ". Kết quả từ tầng dưới sẽ được ném lên tầng trên để nối xích.

Tầng 5 nhận về Node(4):
- Nối: Node(4 của l2).next = Node(4).
- Return: 4 -> 4

Tầng 4 nhận về 4 -> 4:
- Nối: Node(3 của l2).next = (4 -> 4).
- Return: 3 -> 4 -> 4

Tầng 3 nhận về 3 -> 4 -> 4:
- Nối: Node(2 của l1).next = (3 -> 4 -> 4).
- Return: 2 -> 3 -> 4 -> 4

Tầng 2 nhận về 2 -> 3 -> 4 -> 4:
- Nối: Node(1 của l1).next = (2 -> 3 -> 4 -> 4).
- Return: 1 -> 2 -> 3 -> 4 -> 4

Tầng 1 nhận về 1 -> 2 -> 3 -> 4 -> 4:
- Nối: Node(1 của l2).next = (1 -> 2 -> 3 -> 4 -> 4).
- Return: 1 -> 1 -> 2 -> 3 -> 4 -> 4 (Đây là kết quả cuối cùng nhận được).

## cách 3
const mergeTwoLists3 = (list1, list2) => {
  let dummy = new ListNode(-1)
  let curr = dummy

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1
      list1 = list1.next
    } else {
      curr.next = list2
      list2 = list2.next
    }
    curr = curr.next 
  }
  curr.next = list1 || list2
  return dummy.next
}

Với list1 = [1, 2, 4], list2 = [1, 3, 4].

Khởi tạo:
- dummy = [-1]
- curr trỏ vào dummy.

Vòng lặp 1:
- So sánh 1 (l1) và 1 (l2). Bằng nhau, nhảy vào if.
- curr.next nối vào 1 (l1). Đoàn tàu hiện tại: [-1] -> [1(l1)].
- list1 tiến lên 2. curr tiến lên 1(l1).

Vòng lặp 2:
- So sánh 2 (l1) và 1 (l2). 1 (l2) nhỏ hơn, nhảy vào else.
- curr.next nối vào 1 (l2). Đoàn tàu: [-1] -> [1(l1)] -> [1(l2)].
- list2 tiến lên 3. curr tiến lên 1(l2).

Vòng lặp 3:
- So sánh 2 (l1) và 3 (l2). 2 (l1) nhỏ hơn.
- curr.next nối vào 2 (l1). Đoàn tàu: ... -> [1(l2)] -> [2(l1)].
- list1 tiến lên 4. curr tiến lên 2(l1).

Vòng lặp 4:
- So sánh 4 (l1) và 3 (l2). 3 (l2) nhỏ hơn.
- curr.next nối vào 3 (l2). Đoàn tàu: ... -> [2(l1)] -> [3(l2)].
- list2 tiến lên 4. curr tiến lên 3(l2).

Vòng lặp 5:
- So sánh 4 (l1) và 4 (l2). Bằng nhau, chọn l1.
- curr.next nối vào 4 (l1). Đoàn tàu: ... -> [3(l2)] -> [4(l1)].
- list1 tiến lên null. curr tiến lên 4(l1).

Kết thúc lặp:
- while dừng vì list1 đã là null.
- Vét máng: curr.next = list2 (thằng list2 vẫn còn con số 4 cuối cùng).
- Đoàn tàu hoàn chỉnh: [-1] -> [1] -> [1] -> [2] -> [3] -> [4] -> [4].
# Giải thích thuật toán

- Hàm `twoSum` được cài đặt để giải bài toán "Two Sum," trong đó bạn được cung
  cấp một mảng `nums` và một số nguyên `target`, và nhiệm vụ là tìm hai phần tử
  trong mảng `nums` mà tổng của chúng bằng `target`.

- Dưới đây là giải thích cách thuật toán hoạt động:

1. Chúng ta khởi tạo một đối tượng `visitedNums` (hoặc một loại bản đồ) để lưu
   trữ giá trị của các phần tử trong mảng `nums` và vị trí của chúng trong mảng.

2. Chúng ta sử dụng một vòng lặp `for` để duyệt qua từng phần tử trong
   mảng `nums`.

3. Đối với mỗi phần tử `nums[i]` mà chúng ta đang xem xét, chúng ta tính giá
   trị `indexOfNeededNum` bằng cách lấy `target` trừ đi `nums[i]`. Giá trị này
   là số mà nếu chúng ta tìm thấy trong `visitedNums`, thì tổng của nó
   và `nums[i]` sẽ bằng `target`.

4. Chúng ta kiểm tra xem `indexOfNeededNum` có tồn tại trong `visitedNums`
   không. Nếu tồn tại (nghĩa là chúng ta đã gặp phần tử trước đó có giá trị
   là `indexOfNeededNum`), chúng ta trả về một mảng chứa vị trí
   của `indexOfNeededNum` và vị trí hiện tại của `nums[i]`. Điều này thỏa mãn
   yêu cầu tìm hai phần tử có tổng bằng `target`.

5. Nếu sau khi duyệt qua toàn bộ mảng mà không tìm thấy cặp số nào thỏa mãn yêu
   cầu, chúng ta ném ra một lỗi thông báo rằng không có giải pháp nào tồn tại.

- Thuật toán này hoạt động với độ phức tạp thời gian O(n), với n là số lượng
  phần tử trong mảng `nums`. Điều này là do chúng ta duyệt qua mảng một lần và
  sử dụng một đối tượng để kiểm tra sự tồn tại của giá trị cần tìm mà không cần
  phải duyệt qua toàn bộ mảng lần nữa.

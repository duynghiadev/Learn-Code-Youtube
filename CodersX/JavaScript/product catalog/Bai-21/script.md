## Đoạn code trên thực hiện các công việc sau:

- Khai báo một mảng products chứa các đối tượng sản phẩm với các thuộc tính như `name`, `unitPrice`, `quantity`, và `category`.

- Định nghĩa một hàm `filterProducts()` để lọc và hiển thị các sản phẩm dựa trên danh mục (`category`) được chọn từ một phần tử `<select>` có `id` là `categoryFilter`.

  - Lấy giá trị danh mục được chọn từ phần tử `<select>`.
  - Xóa danh sách hiện tại trong phần tử có `id` là `filteredProductsList`.
  - Nếu danh mục được chọn là `"all"`, hiển thị tất cả các sản phẩm bằng cách sử dụng vòng lặp `forEach()` để tạo các phần tử `<li>` chứa tên sản phẩm và thêm chúng vào danh sách.
  - Nếu danh mục được chọn khác `"all"`, lọc các sản phẩm có danh mục khớp và thêm chúng vào danh sách tương tự như trên.

- Tính `tổng` giá trị hàng hóa còn trong kho bằng cách sử dụng phương thức `reduce()` trên mảng `products`. Ban đầu, giá trị khởi tạo là `0` và mỗi sản phẩm được nhân giá `unitPrice` với `quantity` và `cộng` vào giá trị hiện tại.

- Lấy phần tử có `id` là `totalValue` và gán giá trị `tổng` giá trị hàng hóa vào thuộc tính `textContent` để hiển thị.

- Lọc các sản phẩm có `tổng` giá trị hàng hóa (unitPrice \* quantity) lớn hơn 500 bằng cách sử dụng phương thức `filter()` trên mảng `products`. Mỗi sản phẩm thỏa mãn điều kiện sẽ được thêm vào mảng `highValueProducts`.

- Lấy phần tử có `id` là `highValueProductsList` và sử dụng vòng lặp `forEach()` để tạo các phần tử `<li>` chứa tên của các sản phẩm có giá trị hàng hóa lớn hơn 500 và thêm chúng vào danh sách.

- Đoạn code trên cung cấp một giao diện đơn giản để lọc và hiển thị danh sách sản phẩm, tính tổng giá trị hàng hóa và hiển thị các sản phẩm có giá trị hàng hóa lớn hơn 500.

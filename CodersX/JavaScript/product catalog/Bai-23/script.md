## Giải thích code chi tiết:

- Trong đoạn code trên, chúng ta có một mảng products chứa các đối tượng sản phẩm với các thuộc tính như tên (name), giá (price), và số lượng tồn kho (instock).

- Hàm displayProductList được sử dụng để hiển thị danh sách sản phẩm lên giao diện người dùng. Đầu tiên, nó lấy phần tử có id "productList" để chứa danh sách sản phẩm. Sau đó, nó tạo một thẻ <ul> và sử dụng vòng lặp forEach để tạo các thẻ <li> chứa thông tin của từng sản phẩm và thêm chúng vào thẻ <ul>. Cuối cùng, thẻ <ul> được thêm vào phần tử "productList" để hiển thị lên giao diện.

- Có ba hàm sắp xếp danh sách sản phẩm:

  - sortByPriceDescending: Sắp xếp theo giá từ cao đến thấp bằng cách sử dụng phương thức sort trên mảng products và truyền vào một hàm so sánh để so sánh giá của hai sản phẩm.
  - sortByInventoryDescending: Sắp xếp theo số lượng tồn kho từ cao đến thấp bằng cách sử dụng phương thức sort và truyền vào một hàm so sánh để so sánh số lượng tồn kho của hai sản phẩm.
  - sortByInventoryAscending: Sắp xếp theo số lượng tồn kho từ thấp lên cao bằng cách sử dụng phương thức sort và truyền vào một hàm so sánh để so sánh số lượng tồn kho của hai sản phẩm.

- Cả hai nút "sortInventoryDescButton" và "sortInventoryAscButton" được lấy thông qua phương thức getElementById và được gán các sự kiện "click" để gọi các hàm sắp xếp tương ứng.

- Cuối cùng, chúng ta gọi hàm displayProductList(products) để hiển thị danh sách sản phẩm mặc định ban đầu lên giao diện người dùng.

## Trong đoạn code trên, ta khai báo một đối tượng myDog để mô tả một chú chó với các thuộc tính như weight, name, age và các phương thức như bark và eat.

- Thuộc tính weight được khởi tạo với giá trị là 5.

- Thuộc tính name được khởi tạo với giá trị là "Dog".

- Thuộc tính age được khởi tạo với giá trị là 1.

- Phương thức bark là một hàm không tên (anonymous function) được gắn vào thuộc tính bark của đối tượng myDog. Phương thức này sẽ in ra một chuỗi ký tự trên console, nói rằng chú chó đang sủa và tên của chú chó là gì.

- Phương thức eat cũng là một hàm không tên (anonymous function), được gắn vào thuộc tính eat của đối tượng myDog. Phương thức này nhận đối số là một đối tượng bone mô tả một cái xương, với thuộc tính weight là trọng lượng của xương. Phương thức eat sẽ thay đổi trọng lượng của chú chó bằng cách cộng trọng lượng của xương vào trọng lượng hiện tại của chú chó (biến weight). Sau đó, phương thức eat trả về chính đối tượng myDog để cho phép ta gọi liên tiếp nhiều phương thức trên đối tượng myDog.

- Ta khởi tạo một đối tượng bone với trọng lượng là 0.5.

- Ta in ra trọng lượng của chú chó trước khi chú ăn xương bằng câu lệnh console.log('Before eating', myDog.weight).
Sau đó, ta gọi phương thức eat trên đối tượng myDog và truyền vào đối tượng bone để chú chó có thể ăn xương. Kết quả là trọng lượng của chú chó được cập nhật lại và in ra bằng câu lệnh console.log('After eating', myDog.weight).

- Ta có thể thấy rằng trọng lượng của chú chó đã tăng lên 0.5 so với giá trị ban đầu là 5, tức là chú chó đã ăn được một cái xương có trọng lượng là 0.5.

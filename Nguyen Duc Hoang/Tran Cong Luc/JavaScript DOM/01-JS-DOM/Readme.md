# Bài này chúng ta học về: Javascript DOM - #16 - Truy xuất phần tử HTML bằng Javascript DOM


Qua bài học này mình học được:
I.Các cách để truy xuất phần tử trong html

1. Truy xuất thông qua class

- lấy các phần tử bằng tên class  (dịch sang ing lịch là:  get elements by class name)

=> document.getElementsByClassName('xxx')

=> với việc truy xuất này ta sẽ thu được kết quả là 1 collection bao gồm tập hợp tất cả html có class là XXX

- collection là gì thì cuối bài sẽ rõ

2. Truy xuất thông qua id

- lấy phần tử bằng tên id ( get element by id)

- nhiều bạn thắc mắc là tại sao không phải là elements (các phần tử ) như trên mà là element?

- lý do : id là duy nhất ( mỗi sản phẩm thì chỉ có 1 mã id) nếu bạn cố tình đặt các thẻ html đều có id='X' , khi bạn truy xuất thì kết quả trả về chỉ là 1 thằng duy nhất ( thẻ html đầu tiên có id này) chính lý do này=>element không có ''s" đằng sau

=> document.getElementById('x')

3. Truy xuất thông qua tên thẻ

- lấy các phần tử bằng tên thẻ ( get elements by tag name )

=> document.getElementsByTagName('div');   ( ngoài ra còn có các thẻ khác : p, span, a, ul , li, …..)

=> kết quả trả về những thằng html có tên thẻ là div
II .collection

collection ?

-  giống như mảng collection có thể chứa các phần tử bên trong nó( do đó có thể sử dụng được Phương thức length với cú pháp a.length (a : kết quả truy xuất). Tuy nhiên khác với mảng là các phần tử này không chỉ là dữ liệu thông thường ( integer, string, Boolean, … ) mà còn cả các object ( đối tượng ) , object là gì bạn search google nha.

- collection có gì hay ?

  => nếu có phương pháp gì chuyển collection sang array, array có gì hay? tại sao phải chuyển sang array? Trả lời là array có cả 1 rừng method hỗ trợ ta thao tác với nó 1 cách nhanh chóng.

=> cách chuyển ? => Array.from(X);

var x = document.getElementsByClass('money');

x_array = Array.from(x); // vậy là ta chuyển xong ,giờ ta chỉ search các method thao tác với mảng!! Là ta đã dễ dàng

xử lí collection rồi!!

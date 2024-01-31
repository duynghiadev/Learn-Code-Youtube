## Đoạn code này thực hiện các bước sau để tính tổng các chữ số lẻ trong một chuỗi:

- Step 1: Hàm splitString(str) nhận vào một chuỗi str và trả về một mảng các ký tự trong chuỗi đó bằng cách sử dụng phương thức split("").

- Step 2: Hàm filterOdds(arr) nhận vào một mảng arr và trả về một mảng mới chỉ chứa các phần tử là chữ số lẻ. Để làm được điều này, hàm này sử dụng phương thức filter() để lọc các phần tử trong mảng arr theo điều kiện là phần tử đó phải nằm trong mảng ["1", "3", "5", "7", "9"].

- Step 3: Hàm toNumber(arr) nhận vào một mảng arr chứa các ký tự số và trả về một mảng mới các số tương ứng. Để làm được điều này, hàm này sử dụng phương thức map() để chuyển đổi mỗi phần tử trong mảng arr thành một số bằng cách sử dụng hàm Number().

- Step 4: Hàm sum(arr) nhận vào một mảng arr các số và trả về tổng của chúng bằng cách sử dụng phương thức reduce().

## Cuối cùng, hàm sumOddsInString(str) là hàm lắp ráp gọi các hàm trên để tính tổng các chữ số lẻ trong chuỗi str. Nó sử dụng splitString() để tách chuỗi thành mảng các ký tự, filterOdds() để lọc ra các phần tử là chữ số lẻ, toNumber() để chuyển đổi các phần tử thành số và cuối cùng là sum() để tính tổng các số đó. Kết quả được trả về từ hàm này là tổng của các chữ số lẻ trong chuỗi str.

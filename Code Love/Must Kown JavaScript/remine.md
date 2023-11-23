# Variable trong JavaScript 

> 1. Memory trong JavaScript

- Biến được lưu trữ trong bộ nhớ RAM, bộ nhớ tạm thời được sử dụng để thực thi chương trình được gọi là bộ nhớ truy cập ngẫu nhiên (Random Access Memory - RAM). Khi một chương trình thực thi, hệ điều hành dành riêng một phần RAM vật lí của máy tính để chương trình sử dụng riêng. Đơn vị cơ bản của bộ nhớ này là byte. Như chúng ta đã biết tất cả các biến chỉ đơn giản là tập hợp của một số byte, ví dụ 1 int (integer) là 4 byte, doube là 8 byte.

- Như bạn có thể thấy, trong khối bộ nhớ, mỗi byte có một địa chỉ liên quan được đánh số bằng hệ thống đánh số thập lục phân.

> 2. Khai báo biến

```js
var username = 'Duy Nghia' 
```

- This statement consists of a few part:
  - The declaration of a variable using the var keyword
  - The variable name (or identifier), username
  - The assignment operation, represented by the = syntax
  - The value being assigned, "username"

> 3. Demo by C về địa chỉ của biến

- Input 🤷‍♂️:

```c
#include <stdio.h>
int main()
{
  int var = 5;
  printf("var: %d\n", var);

  // Notice the use of & before var
  printf("address of var: %p", &var);  
  return 0;
}
```

- Output 🤷‍♀️:

```md
var: 5 
address of var: 2686778
```
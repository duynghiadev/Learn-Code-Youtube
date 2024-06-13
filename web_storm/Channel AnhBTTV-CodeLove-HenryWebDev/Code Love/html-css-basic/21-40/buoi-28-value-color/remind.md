# Cách xác định giá trị value color hợp lệ

1. **Color keywords**

- Bạn có thể dùng tên tiếng anh của màu sắc

```css
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

2. **Giá trị hàm RGB thập lục phân**

- Giá trị tiếp theo bạn có thể gặp là mã thập lục phân
- Mỗi giá trị value màu sắc bắt đầu bằng dấu # và theo sau là 6 số thập lục phân
- Số thập lục phân nằm trong các giá trị: **0123456789abcdef**
- Mỗi cặp value đại diện cho **red, green, and blue (đỏ 🟥, xanh lá cây 🟩, và xanh da trời 🟦)**
- Mỗi cặp được random từ 16 x 16 = 256 giá trị khác nhau
- 256 x 256 x 256 = 16,777,216 màu riêng

```css
.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

3. **Hàm RGB and RGBA values**

- rgb là 1 hàm nhận vào 3 tham số red, green, and blue values
- Sự khác nhau của rgb và # là không lấy 2 chữ số mà lấy số đại diện từ **0 đến 255**
- Có tham số thứ 4 kiểm soát độ trong suốt từ 0 đến 1

```css
.one {
  background-color: rgb(2, 112, 155);
}

.two {
  background-color: rgb(20, 123, 240);
}

.three {
  background-color: rgb(10, 63, 122);
}
```

4. **HSL and HSLA values**

- Một cách khác để set màu sắc là dùng hàm HSL
- Thay vì các giá trị màu sắc red, green, blue thì hàm nhận vào các giá trị màu sắc (hue), độ bão hòa (saturation) và độ sáng (lightness) dùng để phân biệt 256 x 256 x 256 = 16,777,216 màu riêng
- Có 256 x 256 x 256 = 16,777,216 màu

* Hue: The base shade of the color. This takes a value between 0 and 360
* Saturation: How saturated is the color ? this takes a value from 0-100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation
* Lightness: How light or bright is the color ? This takes a value 0-100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear complete white)

```css
.one {
  background-color: hsl(188, 97%, 28%);
}

.two {
  background-color: hsl(20, 9%, 30%);
}

.three {
  background-color: hsl(188, 97%, 28%);
}
```

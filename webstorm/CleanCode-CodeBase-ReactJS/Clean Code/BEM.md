# BEM

- Là tiêu chuẩn đặt tên class khi viết CSS

## Ý nghĩa:

- Viết tắt của: Block Element Modifier
- Block: khối
- Element: thành phần trong khối
- Modifier: bổ sung ý nghĩa cho `Block` hoặc `Element`

## Tại sao phải dùng BEM:

- Mỗi người đặt mỗi kiểu
- Members đặt class trùng nhau, CSS đè lên nhau

## Cú pháp

- .block
- .block_element
- .block--modifier
- block_element--modifier

## Tính ứng dụng

- Xây dựng layout website
- Xây dựng thành phần trên website

## Ưu điểm

- Tính rõ ràng
- Tái sử dụng dễ dàng
- Giúp cả team làm việc với nhau dễ dàng
- Tính Module, không lo CSS của class này ảnh hưởng lên CSS của class khác

## Nhược điểm

- Tên class dài
- Một số người cho là xấu

## Khi nào dùng BEM là PHÙ HỢP ?

- Dự án nhiều members
- Dự án lớn, số lượng pages nhiều hoặc số lượng các thành phần trên giao diện nhiều

## Thực hành

- Làm Button
- Làm Message
- Làm 1 thành phần trên website

## Trường hợp Block lồng block

- Block con là thành phần dùng chung
- Block con chứa nhiều elements

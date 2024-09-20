# Nếu có thời gian rãnh thì tìm hiểu về chủ đề này (`Debounce`)

- `debounce` áp dụng nhiều trong tính năng search trong ô input.
- Nếu không có `debounce` thì data của api sẽ gọi thường xuyên và có thể gây giật lag website.
- Nếu mình sử dụng `debounce` thì khi người dùng nhập xong sản phẩm và không còn gõ phím nữa thì lúc đó api mới gọi

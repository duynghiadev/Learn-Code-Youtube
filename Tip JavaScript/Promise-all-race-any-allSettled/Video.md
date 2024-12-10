# Promise sử dụng khi nào với từng trường hợp all, race, any và allSettled trong ứng dụng Nodejs

Promise sử dụng khi nào với từng trường hợp all, race, any và allSettled trong ứng dụng Nodejs

Timline:

```bash
00:00 Sự khác nhau giữa async/await và promise?
06:40 Khi nào sử dụng promise.all()
09:49 Khi nào sử dụng promise.any()
11:46 Khi nào sử dụng promise.race()
13:28 Khi nào sử dụng promise.allSettled()
```

[Link video](https://www.youtube.com/watch?v=fnOg4DF-t7U&list=PLw0w5s5b9NK7yTyd1K_Q06V9VYbhsK5FB&index=40)

---

## promise.all

- khi mình dùng `promise.all` thì nó sẽ chạy qua tất cả các promise. Nếu tất cả promise thành công hết thì nó sẽ trả về `success`. Nếu như 1 trong những promise nào mà mình gọi bị false thì promise sẽ trả về `error` ngay

## promise.any

- Khi mình dùng `promise.any`, thì khi nó chạy có bất kì thằng nào thành công thì nó sẽ trả về success lun
- Thằng any này nó không quan tâm những thằng trả về reject. Nó chỉ quan tâm là nếu trong hàm mình gọi có 1 cái resolve là nó sẽ trả về thành công lun
- Mà điều đáng quan tâm ở đây là, nó sẽ trả về thằng thành công có số giây set timeout thấp nhất

## promise.race

- Khi mình dùng `promise.race`, thì cái tên nói lên tất cả (race: có nghĩa là cuộc đua 😆). Thành công hay là thất bại thì nó lấy ra hết. Nó không quan tâm thằng nào thành công thằng nào thất bại. Nó chỉ quan tâm thằng nào có thời gian sớm nhất có thể

- Thằng này nó đơn thuần là vậy thôi. Thằng nào nó trả về thời gian nhanh nhất thì nó sẽ lấy thằng đó

## promise.allSettled

- Còn thằng này thì nó còn được gọi là trùm cuối 😆. Nó là lấy hết tất cả, dù đúng hay sai thì nó lấy hết, không chừa cái nào

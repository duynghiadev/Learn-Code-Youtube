# Tốc độ giảm 100 lần nếu không sử dụng bất đồng bộ async/ await

Đặc biệt là với những bạn tự học lập trình, hoặc những bạn học lập trình tay ngang, khi mà kiến thức bắt đầu từ con số 0, thì việc tiếp cận và hiểu biết về các kỹ thuật lập trình hiện đại là chìa khóa quan trọng giúp tăng kỹ năng và tối ưu tốc độ của thực thi lên cả trăm lần. Trong đó, kỹ thuật sử dụng bất đồng bộ (asynchronous programming) qua từ khoá async await là một ví dụ điển hình. Đây không chỉ là một bí mật tự học lập trình mà còn là một phần quan trọng trong tư duy lập trình và tư duy giải thuật của mọi lập trình viên.

Sử dụng bất đồng bộ trong lập trình giúp chương trình của bạn thực hiện nhiều tác vụ cùng một lúc mà không cần phải chờ đợi từng tác vụ hoàn thành. Điều này đặc biệt hữu ích khi làm việc với các tác vụ I/O-bound như giao tiếp mạng, truy xuất dữ liệu từ cơ sở dữ liệu, hoặc đọc ghi file, nơi mà thời gian chờ làm giảm đáng kể hiệu suất của ứng dụng.

Trong lập trình đồng bộ, code được thực thi tuần tự từ trên xuống dưới. Mỗi dòng lệnh phải chờ dòng trước đó hoàn thành trước khi nó có thể bắt đầu. Trong một số trường hợp, điều này có thể gây ra hiện tượng "blocking", làm chậm toàn bộ quá trình thực thi của chương trình, đặc biệt khi gặp phải tác vụ có thời gian chờ dài.

Tuy nhiên, với kỹ thuật bất đồng bộ, bạn có thể yêu cầu chương trình tiếp tục thực hiện các tác vụ khác trong khi đang chờ đợi. Điều này được thực hiện thông qua việc sử dụng từ khoá async và await.

Để thành thạo kỹ thuật bất đồng bộ, việc hiểu rõ cấu trúc if else và cách thức hoạt động của các lệnh điều khiển luồng là rất quan trọng. Nắm vững những kiến thức cơ bản này sẽ giúp bạn phát triển tư duy lập trình, từ đó có thể áp dụng linh hoạt các kỹ thuật nâng cao như bất đồng bộ trong việc giải quyết vấn đề.

Không chỉ giới hạn ở việc tăng tốc độ thực thi code, kỹ thuật bất đồng bộ còn các lập trình viên trong việc xây dựng ứng dụng phức tạp, đa nhiệm, đem lại hiệu suất tối ưu và trải nghiệm người dùng mượt mà. Đối với những ai đang trong quá trình tự học dev, việc áp dụng thành thạo các kỹ thuật này không chỉ giúp tăng hiệu suất làm việc mà còn là bước đệm quan trọng để tiến xa hơn trên con đường trở thành một lập trình viên cao cấp

![run code async](image.png)

---

[Link video](https://s.net.vn/UIfA)

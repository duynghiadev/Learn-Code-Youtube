import React from 'react';
import classNames from 'classnames/bind';
import styles from './style/Privacy.module.scss';

const cx = classNames.bind(styles);

function Privacy() {
  return (
    <div className={cx('wrapper')}>
      <div className='mb-16'>
        <h1 className='mb-8'>Chính sách bảo vệ thông tin (Privacy)</h1>
        <p>Chính sách bảo mật</p>
      </div>

      <div className='mb-16'>
        <h2 className='mb-8'>I. Thu thập thông tin</h2>
        <p>
          GoLive sẽ thu thập thông tin của Khách hàng bao gồm: Tên đầy đủ; Địa
          chỉ liên lạc; Email; Số điện thoại; Tên đăng nhập; Mật khẩu đăng nhập
          để thiết lập hồ sơ cá nhân. Nội dung bao gồm các thông tin bắt buộc
          khai báo của Khách hàng khi đăng ký tài khoản trên GoLive; Khi thu
          thập các thông tin cá nhân của Khách hàng, GoLive mong muốn cung cấp
          những tiện ích thiết thực nhất tới Khách hàng, bảo vệ quyền lợi và đảm
          bảo tôn trọng sự riêng tư cho Khách hàng. Trong phạm vi điều khoản,
          GoLive cam kết sẽ không bán, cho thuê hay trao đổi dữ liệu thông tin
          Khách hàng đã thu thập cho các đối tượng nào khác ngoài đối tượng được
          liệt kê trong Quy chế này.
        </p>
      </div>

      <hr className='mb-16' />

      <div className='mb-16'>
        <h2 className='mb-8'>II. Sử dụng thông tin cá nhân</h2>
        <p>Thông tin thu thập từ Khách hàng được sử dụng trong phạm vi:</p>
        <ul>
          <li>
            Cung cấp dịch vụ tư vấn cho Khách hàng theo thông tin Khách hàng
            cung cấp;
          </li>
          <li>
            Gửi Khách hàng các thông báo về hoạt động trao đổi thông tin giữa
            GoLive và thành viên;
          </li>
          <li>
            Đảm bảo an toàn cho Khách hàng khi có nguy cơ phá hủy, chiếm đoạt
            tài khoản của Khách hàng và hoạt động giả mạo Khách hàng;
          </li>
          <li>
            Liên lạc với Khách hàng để cung cấp hàng hóa/dịch vụ khi Khách hàng
            mua các sản phẩm hàng hóa/dịch vụ trên website của GoLive. Xác nhận
            thông tin khi thực hiện hoạt động mua, giao hàng;
          </li>
          <li>
            Thực hiện các cuộc khảo sát; các hoạt động quảng bá, cung cấp các
            thông tin cập nhật về điều khoản hoạt động của website có ảnh hưởng
            đến Khách hàng; Bảo mật thông tin Khách hàng là ưu tiên hàng đầu của
            GoLive khi thu thập dữ liệu thông tin Khách hàng. GoLive luôn cố
            gắng bắt kịp các tiêu chuẩn bảo vệ thông tin các nhân của khách
            hàng; GoLive yêu cầu xác nhận lại mật khẩu khi đăng nhập để chống
            lại những truy cập trái phép vào hệ thống thông tin cá nhân Khách
            hàng. Trong trường hợp Khách hàng rời máy tính và chưa đăng xuất
            trên website, hệ thống sẽ tự động đăng xuất sau một khoảng thời
            gian.
          </li>
        </ul>
      </div>

      <hr className='mb-16' />

      <div className='mb-16'>
        <h2 className='mb-8'>III. Thơi gian lưu trữ thông tin</h2>
        <ul>
          <li>
            GoLive sẽ lưu trữ thông tin thu thập từ Khách hàng từ thời điểm
            Khách hàng khai báo thông tin đến khi tài khoản của Khách hàng ngừng
            hoạt động.
          </li>
          <li>
            GoLive sẽ lưu giữ và sử dụng thông tin của khách hàng khi cần tuân
            theo nghĩa vụ pháp lý, giải quyết tranh chấp và thực thi các thoả
            thuận của GoLive.
          </li>
          <li>
            Khách hàng cũng có thể rút lại sự đồng ý cho phép thu thập, sử dụng
            và/hoặc tiết lộ dữ liệu cá nhân của khách hàng mà GoLive đang lưu
            giữ hoặc kiểm soát bằng cách gửi email cho Bộ phận Chăm sóc khách
            hàng của ban quản trị GoLive tại địa chỉ email
            contact@fullstack.edu.vn hoặc qua số điện thoại, và chúng tôi sẽ xử
            lý các yêu cầu này theo Chính Sách Bảo Mật cũng như quy định pháp
            luật có liên quan. Tuy nhiên, việc khách rút lại sự đồng ý có thể có
            nghĩa là GoLive sẽ không thể tiếp tục cung cấp Các Dịch Vụ cho khách
            hàng, và ban quản trị GoLive có thể cần phải chấm dứt quan hệ hiện
            tại của bạn và/hoặc hợp đồng của bạn với GoLive
          </li>
        </ul>
      </div>

      <hr className='mb-16' />

      <div className='mb-16'>
        <h2 className='mb-8'>
          IV. Thay đổi hoặc loại bỏ thông tin hồ sơ cá nhân
        </h2>
        <p>
          Khách hàng có thể tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông
          tin cá nhân của mình bằng các cách sau đây:
        </p>
        <ul>
          <li>
            Khách hàng tự đăng nhập vào tài khoản của mình, vào mục cài đặt và
            chỉnh sửa thông tin cá nhân;
          </li>
          <li>
            Khách hàng gọi điện đến số điện thoại hỗ trợ/email hỗ trợ của Ban
            quản trị GoLive và yêu cầu được chỉnh sửa thông tin cá nhân.
          </li>
        </ul>
      </div>

      <hr className='mb-16' />

      <div className='mb-16'>
        <h2 className='mb-8'>
          V. Chính sách bỏa vệ thông tin khách hàng cá nhân
        </h2>
        <p>
          Ban quản trị GoLive cam kết bảo mật thông tin cá nhân của Khách hàng
          theo những nội dung sau:
        </p>
        <ul>
          <li>
            Cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân
            của GoLive;
          </li>
          <li>
            Cam kết bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của
            Khách hàng bao gồm các thông tin về lịch sử giao dịch; thông tin về
            chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn;
          </li>
          <li>
            Cam kết không sử dụng, không chuyển giao, không cung cấp hay tiết lộ
            cho bên thứ ba nào khác về thông tin cá nhân của Khách hàng khi
            không có sự cho phép từ Khách hàng ngoại trừ điều khoản khác được
            quy định trong Quy chế này và theo quy định của Pháp luật;
          </li>
          <li>
            Trong trường hợp phát sinh các lỗi kỹ thuật hoặc bị tấn công dữ
            liệu, Ban quản trị GoLive có trách nhiệm thông báo cho cơ quan chức
            năng và Khách hàng trong thời gian 03 ngày kể từ khi có sự cố xảy
            ra.
          </li>
        </ul>
      </div>

      <hr className='mb-16' />

      <div className='mb-16'>
        <h2 className='mb-8'>VI. Chính sách bảo vệ thông tin thanh toán</h2>
        <p>
          GoLive cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần
          thiết cho mọi hoạt động thanh toán thực hiện trên website/ứng dụng của
          GoLive. Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội
          địa (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các
          Đối Tác Cổng Thanh Toán gồm:
        </p>
        <ul>
          <li>
            Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá
            trình giao dịch bằng giao thức SSL (Secure Sockets Layer).
          </li>
          <li>
            • Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI
            DSS) do Trustwave cung cấp.
          </li>
          <li>
            Mật khẩu sử dụng một lần (OTP) được gửi qua mail để đảm bảo việc
            truy cập tài khoản được xác thực.
          </li>
          <li>Tiêu chuẩn mã hóa MD5 128 bit.</li>
          <li>
            Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính
            ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.
          </li>
        </ul>

        <p>
          Chính sách bảo mật giao dịch trong thanh toán của GoLive áp dụng với
          Khách hàng:
        </p>
        <ul>
          <li>
            GoLive chỉ lưu chuỗi đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung
            cấp cho GoLive. GoLive không trực tiếp lưu trữ thông tin thẻ khách
            hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực
            hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.
          </li>
          <li>
            Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có
            khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống
            của GoLive. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.
          </li>
          <li>
            Đối với thẻ nội địa (internet banking), GoLive chỉ lưu trữ mã đơn
            hàng, mã giao dịch và tên ngân hàng.
          </li>
        </ul>
      </div>

      <hr className='mb-16' />

      <div className='mb-16'>
        <h2 className='mb-8'>VII. Đối tượng chia sẻ thông tin cá nhân</h2>
        <ul>
          <li>
            Ban quản trị GoLive có thể chia sẻ, tiết lộ thông tin cá nhân của
            Khách hàng khi tin rằng việc làm đó là cần thiết để bảo vệ các quyền
            lợi của Khách hàng, đảm bảo sự an toàn giao dịch cho Khách hàng và
            theo yêu cầu của bên thứ 3 có thẩm quyền.
          </li>
          <li>
            Ban quản trị GoLive có thể chia sẻ thông tin cá nhân của Khách hàng
            tới nhóm các Công ty nằm trong Tổ hợp Công nghệ Giáo dục GoLive
            Group để nghiên cứu và giới thiệu tới Khách hàng những sản phẩm hàng
            hóa và dịch vụ tốt hơn tới từng cá nhân Khách hàng.Trong trường hợp
            Khách hàng không muốn chia sẻ thông tin, GoLive hoàn toàn đồng ý khi
            nhận được yêu cầu từ Khách hàng.
          </li>
          <li>
            GoLive có thể tiết lộ thông tin cá nhân của khách hàng theo yêu cầu
            của luật sư cũng như cơ quan chức năng có thẩm quyền.
          </li>
          <li>
            Nếu GoLive tham gia vào sát nhập hoặc được mua lại một phần hay toàn
            bộ tài sản, khách hàng sẽ được thông báo qua email hoặc qua tin tức
            chính thức trên trang web của GoLive về bất kì sự thay đổi quyền sở
            hữu hoặc sử dụng thông tin cá nhân của khách hàng, cũng như bất kì
            quyền của khách hàng nào liên quan đến thông tin cá nhân của khách
            hàng, tới bất kì bên thứ 3 nào với sự đồng ý của khách hàng.
          </li>
          <li>
            GoLive và các đối tác sử dụng Cookies để ghi nhớ thông tin khách
            hàng khi bạn truy cập vào trang web. Cookies là một mẩu thông tin mà
            trang web lưu trữ lại ở trình duyệt máy tính hoặc trên ổ cứng của
            khách hàng khi khách hàng truy cập vào trang web bất kì.
          </li>
          <li>
            GoLive sử dụng dịch vụ của bên thứ 3 để giám sát tính hữu dụng của
            công ty để theo dõi hành vi khách hàng truy cập vào trang web của
            chúng tôi. Tuy nhiên, chúng tôi không có quyền tham gia hoặc điều
            chỉnh Cookies của họ. Thông tin chúng tôi thu được thông qua sự theo
            dõi của bên thứ 3, hoàn toàn ẩn danh và sử dụng để cải thiện dịch vụ
            và hiệu quả marketing.
          </li>
          <li>
            Như hầu hết các trang web khác, chúng tôi tự động tổng hợp thông tin
            và lưu trữ chúng trên tập tin lịch sử lưu trữ.Thông tin này bao gồm
            địa chỉ Internet, loại trình duyệt và ngôn ngữ, nhà cung cấp dịch vụ
            Internet, trang đến và trang đi, hệ thống vận hành, ngày tháng và
            thông tin về click chuột. Chúng tôi sử dụng thông tin này để tìm
            hiểu và phân tích xu hướng, để quản trị trang web đồng thời nghiên
            cứu hành vi khách hàng, thu thập thông tin cá nhân của người dùng.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Privacy;

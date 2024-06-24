import routes from '@/configs/routes';
import React from 'react';
import { Link } from 'react-router-dom';

function FooterLayout({ onlineUsers = [] }) {
  return (
    <div className='footer-container'>
      <div className='social-link'></div>
      <ul className='footer-link'>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Trung tâm trợ giúp
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Thẻ tặng quà
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Trung tâm đa phương tiện
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Quan hệ với nhà đầu tư
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Cơ hội việc làm
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to={routes.terms.path} target='_blank'>
            Điều khoản sử dụng
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to={routes.privacy.path} target='_blank'>
            Quyền riêng tư
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Thông báo pháp lý
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            Tùy chọn cookie
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='https://vuluu2k.vercel.app' target='_blank'>
            Liên hệ với chúng tôi
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='https://www.dmca.com/r/yzy77ql' target='_blank'>
            Chứng chỉ DMCA
          </Link>
        </li>
        <li className='footer-link-wrapper'>
          <Link to='#' rel='noreferrer' target='_blank'>
            {onlineUsers.length} Đang hoạt động (Không tính nặc danh)
          </Link>
        </li>
      </ul>
      <div className='footer-service'>
        <button className='service-code'>Mã dịch vụ</button>
      </div>
      <div className='footer-copyright'>
        <span>© 2023 Golive, Dev2000</span>
      </div>
    </div>
  );
}

export default FooterLayout;

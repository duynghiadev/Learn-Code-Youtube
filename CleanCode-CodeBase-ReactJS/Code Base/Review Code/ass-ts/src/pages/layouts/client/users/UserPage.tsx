import React from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticate } from '../../../../untils/localStorage';

type UserPageProps = {};

const UserPage = (props: UserPageProps) => {
    const {user} = isAuthenticate();
    console.log(user)
  return (
    <div>
        <div className="banner_content">
          <div className="d-flex m-[20px] p-[30px] bg-while bg-opacity-75 ">
              <div className="w-[350px] h-[500px] mx-[200px]">
                  <img className='w-[350px] h-[500px] rounded' src={user?.img} alt="" />
              </div>
              <div className="media-body">
                <div className="personal_text  text-left p-[20px]">
                    <h6 className='text-center fs-1 my-[10px] text-decoration-underline text-info'>Thông Tin Tài Khoản</h6>
                    <h3 className='fs-3 my-[10px]'>{user?.name}</h3>
                    {/* <h4>Junior UI/UX Developer</h4> */}
                    <p className='w-[500px]'>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the
                    ghost showing Scrooge some different futures)</p>
                    <ul className="list basic_info">
                    <li className='p-2 w-[400px]'><a href="#"><i className="lnr lnr-calendar-full" />{user?.address}</a></li>
                    <li className='p-2'><a href="#"><i className="lnr lnr-phone-handset" />{user?.phone}</a></li>
                    <li className='p-2'><a href="#"><i className="lnr lnr-envelope" />{user?.email}</a></li>
                    <li className='p-2'><a href="#"><i className="lnr lnr-home" />{user?.phone}</a></li>
                    </ul>
                    {/* <ul className="list personal_social">
                    <li><a href="#"><i className="fa-brands fa-facebook-square"/></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fas fa-linkedin" /></a></li>
                    </ul> */}
                </div>
                <Link className='p-2 bg-red-500 rounded text-light' to={`#`}>Chỉnh sửa</Link>
                </div>

          </div>
      </div>
    </div>
  )
}

export default UserPage
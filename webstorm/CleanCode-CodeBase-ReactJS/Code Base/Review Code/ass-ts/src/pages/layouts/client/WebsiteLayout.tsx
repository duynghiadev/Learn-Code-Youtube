import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { UserType } from '../../../types/user';
import { isAuthenticate } from '../../../untils/localStorage';

type WebsiteLayoutProps = {};


const WebsiteLayout = (props: WebsiteLayoutProps) => {
  const {user} = isAuthenticate();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const authEmail = async (email: string) => {
    try {
      const auth = await localStorage.getItem("user");
      console.log(auth);
      if (auth) {
        const email = document.querySelector('#email');

        if (email) {
          email.innerHTML = JSON.parse(auth).email;
        }
      }
      console.log(auth);
    } catch (error: any) {
      console.log(error.response)
      if (error.response.status === 400) {
        setError(error.response.data);
      }
    }
  }

  const logout = document.querySelector("#logout");
  if (logout) {
    logout.addEventListener('click', function () {
      localStorage.removeItem('user');
      navigate('/');
    })
  }
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <Link className='navbar-brand' to={`/`}>BAKERY.COM</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className='nav-link pr-10' to={`/`}>Home</Link></li>
                <li className="nav-item"><Link className='nav-link pr-10' to={`/product`}>Product</Link></li>
                {/* <li className="nav-item"><a className="nav-link" href="contact.html">About</a></li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <li><a className="dropdown-item" href="/post">Blog Home</a></li>
                    {/* <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li> */}
                  </ul>
                </li>
                {user &&
                <li className="nav-item dropdown">
                  <a id='email' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{user.name}</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <li><Link id='email' className="dropdown-item" to={`user`}>Thông tin tài khoản</Link></li>
                    <li><Link className="dropdown-item" to={`signup`}>Signup</Link></li>
                    <li><Link to={``} id='logout' className="dropdown-item">Logout</Link></li>
                  </ul>
                </li>
                }
                {!user &&
                <li className="nav-item dropdown">
                  <a id='email' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <li><Link className="dropdown-item" to={`/signin`}>Signin</Link></li>
                    <li><Link className="dropdown-item" to={`signup`}>Signup</Link></li>
                  </ul>
                </li>
                }
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright © Your Website 2021</div></div>
            <div className="col-auto">
              <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">·</span>
              <a className="link-light small" href="#!">Terms</a>
              <span className="text-white mx-1">·</span>
              <a className="link-light small" href="#!">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WebsiteLayout
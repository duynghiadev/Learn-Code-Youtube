import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../redux/slices/userSlice';

const initialState = {
  username: '',
  password: '',
  isMember: true,
};

const LoginForm = () => {
  const [values, setValues] = useState(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      toast.error('Please fill out all Fields');
    } else if (values.isMember) {
      dispatch(loginUser({ username, password }));
    } else {
      dispatch(registerUser({ username, password }));
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
      navigate('/');
    }
  }, [navigate, isAuthenticated]);
  return (
    <div className="  flex w-full">
      {isLoggedIn ? (
        <div className="flex">
          <span className="loading loading-dots loading-lg" />
          <span className="loading loading-dots loading-lg" />
          <span className="loading loading-dots loading-lg" />
        </div>
      ) : (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-vs-car-sharing/car-keys.jpg)' }}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text lg:text-left">
              <h1 className="text-5xl font-bold text-green-500">VEHICLE APPOINTMENT!</h1>
              <p className="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary-content">
              <form
                onSubmit={onSubmit}
                className="card-body"
              >
                <h3 className="text-center text-3xl ">
                  {values.isMember ? 'Login' : 'Register'}
                </h3>
                <div className="w-full  grid gap-5 ">
                  {/* eslint-disable jsx-a11y/label-has-associated-control */}
                  <div className="form-control">
                    <label className="input-group input-group-vertical">
                      <span className="bg-green-500 text-white font-bold">Username</span>
                      <input
                        type="text"
                        value={values.username}
                        name="username"
                        onChange={handleChange}
                        className="input input-bordered focus:outline-none"
                      />
                    </label>
                  </div>
                  <label className="input-group input-group-vertical">
                    <span className="bg-green-500 text-white font-bold">Password</span>
                    <input
                      type="password"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      className="input input-bordered focus:outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn bg-green-500 hover:text-green-500 hover:border hover:border-green-500 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="btn btn-outline loading loading-spinner text-primary text-xl" />
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
                <p className="text-center">
                  {values.isMember
                    ? 'Not a member yet? '
                    : 'Already a member? '}
                  <button
                    type="button"
                    onClick={toggleMember}
                    className="link link-success"
                  >
                    {values.isMember ? 'Register' : 'Login'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

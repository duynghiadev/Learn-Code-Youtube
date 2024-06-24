import React, { useEffect } from "react";

const ForgetPassword = () => {
  useEffect(() => {
    document.title = "Airbnb - Admin - Quên mật khẩu";
  }, []);
  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img aria-hidden='true' className='object-cover w-full h-full dark:hidden' src='/images/forgot-password-office.jpeg' alt='Office' />
            <img
              aria-hidden='true'
              className='hidden object-cover w-full h-full dark:block'
              src='/images/forgot-password-office-dark.jpeg'
              alt='Office'
            />
          </div>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>Forgot password</h1>
              <label className='block text-sm'>
                <span className='text-gray-700 dark:text-gray-400'>Email</span>
                <input
                  className='block w-full mt-1 text-sm  border-[1px] p-2 rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input'
                  placeholder='Jane Doe'
                />
              </label>

              {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
              <a
                className='block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-purple-600 hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple'
                href='./login.html'
              >
                Recover password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

export default function FooterFixed() {
  return (
    <>
      <div className='mt-0 lg:mt-12'></div>
      <div className='hidden lg:block fixed left-0 bottom-0 bg-[#f9fafb] text-gray-500 w-full z-40'>
        <div className='mx-auto w-[95%] py-3 flex justify-between items-center'>
          <div>
            <span>© 2023 Airbnb, Inc.</span>
            <a href='https://www.airbnb.com/help/article/2855' target='blank' className='px-3 hover:underline cursor-pointer'>
              Quyền riêng tư
            </a>
            .
            <a href='https://www.airbnb.com/help/article/2908' target='blank' className='px-3 hover:underline cursor-pointer'>
              Điều khoản
            </a>
            .
            <a href='https://www.airbnb.com/sitemaps/v2' target='blank' className='px-3 hover:underline cursor-pointer'>
              Sơ đồ trang web
            </a>
            .
          </div>
          <div className='text-gray-700 flex items-center'>
            <span className='flex'>
              <svg
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='presentation'
                focusable='false'
                className='inline-block h-4 w-4 text-current fill-current'
              >
                <path d='m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z'></path>
              </svg>
            </span>
            <span className='hover:underline cursor-pointer px-3 font-medium mr-12'>Tiếng Việt(VN)</span>
            <FontAwesomeIcon icon={faDollar} />
            <span className='hover:underline cursor-pointer px-2 font-medium mr-12'>USD</span>
            <div className='flex justify-center items-center space-x-3'>
              <a href='https://www.facebook.com/airbnb' target='blank'>
                <svg
                  className='opacity-50 hover:opacity-100 duration-300 cursor-pointer w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  viewBox='0 0 320 512'
                >
                  <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
                </svg>
              </a>
              <a href='https://twitter.com/airbnb' target='blank'>
                <svg
                  className='opacity-50 hover:opacity-100 duration-300 cursor-pointer w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  viewBox='0 0 512 512'
                >
                  <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
                </svg>
              </a>
              <a href='https://www.instagram.com/airbnb' target='blank'>
                <svg
                  className='opacity-50 hover:opacity-100 duration-300 cursor-pointer w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  viewBox='0 0 448 512'
                >
                  <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

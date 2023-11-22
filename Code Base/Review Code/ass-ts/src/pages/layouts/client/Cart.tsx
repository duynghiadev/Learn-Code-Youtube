import React from 'react'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div>
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-[20px] h-[700px]">
  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div className="grid-cols-2 git shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">STT</th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th scope="col" className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead><tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">${'{'}index + 1{'}'}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">${'{'}item.title{'}'}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-20 w-36">
                  <img className="h-20 w-36" src="${item.img}" alt="" />
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">${'{'}item.price{'}'} $</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap"> 
              <span className="px-2 inline-flex text-xl leading-5 font-semibold rounded-full "> ${'{'}item.quantity{'}'}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button data-id="${item.id}" className="text-3xl text-green-500 btn btn-increase">+</button>
              <button data-id="${item.id}" className="text-3xl text-red-500 btn btn-decrease">-</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <p hidden>${'{'}tong = item.price * item.quantity{'}'}</p><p hidden>${'{'}thanhTien += item.price * item.quantity{'}'}</p>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
                ${'{'}tong{'}'}$</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" className="text-indigo-600 hover:text-indigo-900"><button data-id="${item.id}" className="btn btn-remove">Xóa</button></a>
            </td>
          </tr>
        </tbody></table>
      <hr />
      <div className="pt-2 ml-24 grid grid-cols-2 text-4xl">
        <h3 className="">Tổng tiền</h3>
        <h3 className="text-red-500">${'{'}thanhTien{'}'}  $</h3>
      </div><br />
    </div>
  </div>
  {/* <form className="pt-10 px-10" id="formSignup">
    <div className="shadow overflow-hidden sm:rounded-md">
      <h1 className="text-4xl">Vui Lòng Điền Đầy Đủ Thông Tin</h1>
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input type="text" name="last-name" id="name" autoComplete="family-name" className="border border-black bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md" />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="text" name="email" id="email" autoComplete="email" className="border border-black bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md" />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" name="phone" id="phone" autoComplete="family-name" className="border border-black bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md" />
          </div>
          <div className="col-span-6">
            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Địa chỉ</label>
            <input type="text" name="street-address" id="address" autoComplete="street-address" className="border border-black bg-gray-50 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md" />
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button type="submit" className="py-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
          Thanh toán
        </button>
      </div>
    </div>
  </form> */}
</div>

    </div>
  )
}

export default Cart
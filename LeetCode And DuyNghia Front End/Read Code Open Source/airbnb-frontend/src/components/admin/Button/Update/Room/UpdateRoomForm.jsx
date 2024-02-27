import React, { useState } from 'react'
import { Form, Input, Radio, Select, message } from 'antd'
import { roomServ } from '../../../../../api/api'

const UpdateRoomForm = ({ closeUpdateForm, room, fetch, locations }) => {
  const [form] = Form.useForm()
  const [isChange, setIsChange] = useState(false)

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo)
  }

  const handleChangeHinhPhong = (evt) => {
    let files = evt.target.files
    let f = files[0]

    // show preview
    let reader = new FileReader()
    reader.readAsDataURL(f)
    reader.onload = function (oFREvent) {
      document.getElementById('showHinhPhongUpdate').src = oFREvent.target.result
    }
    setIsChange(true)
  }
  const onFinish = (room) => {
    if (isChange) {
      // upload hinh
      const input = document.querySelector('#hinhPhong')
      var dataPhoto = new FormData()
      dataPhoto.append('formFile', input.files[0])

      roomServ
        .uploadPhotoRoom(room.id, dataPhoto)
        .then((res) => {
          const processValues = {
            ...room,
            banUi: room.banLa,
            hinhAnh: res.data.content.hinhAnh
          }

          roomServ
            .updateRoom(processValues)
            .then((result) => {
              message.success(result.data.message)
              fetch()
              setIsChange(false)
              closeUpdateForm()
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => {
          message.error(error.response.data.content)
        })
    } else {
      const processValues = {
        ...room,
        banUi: room.banLa
      }

      roomServ
        .updateRoom(processValues)
        .then((result) => {
          message.success(result.data.message)
          fetch()
          closeUpdateForm()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div
      className='fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'
      style={{ marginLeft: 0 }}
    >
      <div
        className='w-full px-6 py-4 overflow-scroll max-h-[70vh] bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl'
        role='dialog'
        id='modal'
      >
        <header className='flex justify-end'>
          <button
            className='inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700'
            aria-label='close'
            onClick={closeUpdateForm}
          >
            <svg
              className='w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              role='img'
              aria-hidden='true'
            >
              <path
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
                fillRule='evenodd'
              ></path>
            </svg>
          </button>
        </header>
        <div className='mt-4 mb-6'>
          <p className='mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300'>
            Cập nhật phòng thuê
          </p>

          <div className='mb-10'>
            <img
              src={room.hinhAnh}
              className='h-[200px] w-full object-cover rounded-[3px]'
              alt='hinh anh phong thue'
              id='showHinhPhongUpdate'
            />

            <div>
              <label
                htmlFor='hinhPhong'
                className=' bg-gray-300 rounded-[3px] px-3 inline-block cursor-pointer hover:text-white hover:bg-slate-500 mt-3'
              >
                Change
              </label>
              <input
                type='file'
                name='hinhPhong'
                id='hinhPhong'
                className='hidden'
                onChange={handleChangeHinhPhong}
              />
            </div>
          </div>

          <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
              <Form.Item name='id' label='Mã phòng thuê' initialValue={room?.id}>
                <Input name='id' disabled placeholder='Điền tên vào đây...' />
              </Form.Item>
              <Form.Item
                name='tenPhong'
                label='Tên phòng thuê'
                initialValue={room?.tenPhong}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng ghi tên phòng thuê!',
                    whitespace: true
                  }
                ]}
              >
                <Input name='tenPhong' placeholder='Điền tên vào đây...' />
              </Form.Item>

              <Form.Item
                name='moTa'
                label='Mô tả'
                initialValue={room.moTa}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập Mô tả!',
                    whitespace: true
                  }
                ]}
              >
                <Input name='moTa' placeholder='Điền Mô tả...' />
              </Form.Item>

              <Form.Item
                name='maViTri'
                label='Vị trí'
                initialValue={room.maViTri}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Vị trí!'
                  }
                ]}
              >
                <Select placeholder='Chọn Vị trí'>
                  {locations.map((item, index) => {
                    return (
                      <Select.Option value={item.id} key={index}>
                        {item.tenViTri}
                      </Select.Option>
                    )
                  })}
                </Select>
              </Form.Item>

              <Form.Item
                label='Số khách'
                name='khach'
                initialValue={room?.khach}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số khách!'
                  }
                ]}
              >
                <Input name='khach' type='number' placeholder='2' />
              </Form.Item>
              <Form.Item
                label='Số phòng ngủ'
                name='phongNgu'
                initialValue={room?.phongNgu}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số phòng ngủ!'
                  }
                ]}
              >
                <Input name='phongNgu' type='number' placeholder='2' />
              </Form.Item>

              <Form.Item
                label='Số giường'
                name='giuong'
                initialValue={room?.giuong}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số giường!'
                  }
                ]}
              >
                <Input name='giuong' type='number' placeholder='2' />
              </Form.Item>

              <Form.Item
                label='Số phòng tắm'
                name='phongTam'
                initialValue={room?.phongTam}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số phòng tắm!'
                  }
                ]}
              >
                <Input name='phongTam' type='number' placeholder='2' />
              </Form.Item>

              <Form.Item
                label='Giá phòng'
                name='giaTien'
                initialValue={room?.giaTien}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập giá phòng!'
                  }
                ]}
              >
                <Input name='giaTien' type='number' placeholder='Đơn vị $' />
              </Form.Item>

              <Form.Item
                name='mayGiat'
                label='Máy giặt'
                initialValue={room?.mayGiat}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Máy giặt!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='mayGiat' value={true}>
                    Có
                  </Radio>
                  <Radio name='mayGiat' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='banLa'
                label='Bàn là'
                initialValue={room?.banLa}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Bàn là!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='banLa' value={true}>
                    Có
                  </Radio>
                  <Radio name='banLa' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='tivi'
                label='Tivi'
                initialValue={room?.tivi}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Tivi!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='tivi' value={true}>
                    Có
                  </Radio>
                  <Radio name='tivi' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='dieuHoa'
                label='Điều hoà'
                initialValue={room?.dieuHoa}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Điều hoà!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='dieuHoa' value={true}>
                    Có
                  </Radio>
                  <Radio name='dieuHoa' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='wifi'
                label='Wifi'
                initialValue={room?.wifi}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Wifi!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='wifi' value={true}>
                    Có
                  </Radio>
                  <Radio name='wifi' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='bep'
                label='Bếp'
                initialValue={room?.bep}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Bếp!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='bep' value={true}>
                    Có
                  </Radio>
                  <Radio name='bep' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='doXe'
                label='Đỗ xe'
                initialValue={room?.doXe}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Đỗ xe!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='doXe' value={true}>
                    Có
                  </Radio>
                  <Radio name='doXe' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='hoBoi'
                label='Hồ bơi'
                initialValue={room?.hoBoi}
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Hồ bơi!'
                  }
                ]}
              >
                <Radio.Group>
                  <Radio name='hoBoi' value={true}>
                    Có
                  </Radio>
                  <Radio name='hoBoi' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              {/* <Form.Item
                label="Email"
                name="email"
                initialValue={user?.email}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },
                  {
                    type: "email",
                    message: "Không đúng định dạng email!",
                  },
                ]}
              >
                <Input placeholder="example@gmail.com" />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Giới tính"
                initialValue={user?.gender ? "male" : "female"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn giới tính!",
                  },
                ]}
              >
                <Select placeholder="Chọn giới tính">
                  <Select.Option value="male">Nam</Select.Option>
                  <Select.Option value="female">Nữ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="birthday"
                label="Ngày sinh"
                initialValue={user?.birthday}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh!",
                  },
                ]}
              >
                <Input placeholder="22/02/2022" />
              </Form.Item>
              <Form.Item
                name="role"
                label="Chức vụ"
                initialValue={user?.role}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn chức vụ!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio name="role" value="ADMIN">
                    Admin
                  </Radio>
                  <Radio name="role" value="USER">
                    User
                  </Radio>
                </Radio.Group>
              </Form.Item> */}
            </div>
            <footer className='flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800 mt-5'>
              <button
                onClick={closeUpdateForm}
                className='w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'
              >
                Huỷ
              </button>
              <button className='w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple'>
                Cập nhật
              </button>
            </footer>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UpdateRoomForm

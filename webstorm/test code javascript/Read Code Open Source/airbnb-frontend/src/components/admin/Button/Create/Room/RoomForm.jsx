import React, { useEffect, useState } from 'react'
import { Form, Input, Radio, Select, message } from 'antd'
import { locationServ, roomServ } from '../../../../../api/api'
import { useDispatch } from 'react-redux'
import { reloadData } from '../../../../../redux/roomSlice'

const RoomForm = ({ closeModal }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [locations, setLocations] = useState(null)
  const [isSelectedPhoto, setIsSelectedPhoto] = useState(false)
  const [errHinhAnh, setErrHinhAnh] = useState(null)

  useEffect(() => {
    locationServ
      .getAllLocations()
      .then((response) => {
        setLocations(response.data.content)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleChangeHinhAnh = (evt) => {
    let files = evt.target.files
    let f = files[0]

    // show preview
    let reader = new FileReader()
    reader.readAsDataURL(f)
    reader.onload = function (oFREvent) {
      document.getElementById('showHinhPhong').src = oFREvent.target.result
    }

    setIsSelectedPhoto(true)
    setErrHinhAnh(null)
  }

  const onFinishFailed = (errorInfo) => {
    if (!isSelectedPhoto) {
      setErrHinhAnh('Vui lòng chọn hình ảnh!')
    }
    console.error('Failed:', errorInfo)
  }

  const onFinish = (values) => {
    if (!isSelectedPhoto) {
      setErrHinhAnh('Vui lòng chọn hình ảnh!')
      return
    }

    const processData = { ...values, banUi: values.banLa }
    roomServ
      .createRoom(processData)
      .then((response) => {
        const mess = response.data.message
        const { id } = response.data.content

        // upload hinh
        const input = document.querySelector('#hinhAnh')

        var dataPhoto = new FormData()
        dataPhoto.append('formFile', input.files[0])

        roomServ
          .uploadPhotoRoom(id, dataPhoto)
          .then((res) => {
            dispatch(reloadData())
            message.success(mess)
            closeModal()
          })

          .catch((error) => {
            roomServ.deleteRoom(id)
            message.error(error.response.data.content)
          })
      })
      .catch((error) => {
        message.error(error.response.data.content)
      })
    // const processValues = {
    //   ...values,
    //   gender: values.gender === "male" ? true : false,
    // };

    // userServ
    //   .createNewUser(processValues)
    //   .then((result) => {
    //     message.success(
    //       `Người dùng ${result.data.content.name} đã được thêm thành công.`
    //     );
    //     closeModal();
    //     // load lai du lieu moi
    //     userServ
    //       .getUsersPage(1)
    //       .then((res) => {
    //         dispatch(getAllUsers(res.data.content.data));
    //         dispatch(setTotalUsers(res.data.content.totalRow));
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <div className='fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'>
      <div
        className='w-full px-6 py-4 overflow-scroll bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl max-h-[70vh] overflow-y-scroll'
        role='dialog'
        id='modal'
      >
        <header className='flex justify-end'>
          <button
            className='inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700'
            aria-label='close'
            onClick={closeModal}
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
          <p className='mb-4 text-lg font-semibold text-black dark:text-gray-300'>
            Thêm phòng thuê
          </p>

          <div className='mb-5'>
            <p>Thêm hình phòng</p>

            <img id='showHinhPhong' className=' rounded-[5px]' />

            {!isSelectedPhoto ? (
              <label
                htmlFor='hinhAnh'
                className='w-[50px] h-[50px] border-[1px] border-primary rounded-[3px] block text-center leading-[50px] cursor-pointer'
              >
                +
              </label>
            ) : (
              <label
                htmlFor='hinhAnh'
                className=' bg-gray-300 rounded-[3px] px-3  mt-2 inline-block cursor-pointer'
              >
                change
              </label>
            )}
            <input
              type='file'
              id='hinhAnh'
              name='hinhAnh'
              className='hidden'
              onChange={handleChangeHinhAnh}
            />
            {errHinhAnh && <p className='text-[14px] text-primary'>{errHinhAnh}</p>}
          </div>
          <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
              <Form.Item
                name='tenPhong'
                label='Tên phòng'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên phòng!',
                    whitespace: true
                  }
                ]}
              >
                <Input placeholder='Điền tên phòng vào đây...' />
              </Form.Item>
              <Form.Item
                label='Mô tả'
                name='moTa'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mô tả!'
                  }
                ]}
              >
                <Input placeholder='Nhập mô tả vào đây' />
              </Form.Item>

              <Form.Item
                name='maViTri'
                label='Vị trí'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Vị trí!'
                  }
                ]}
              >
                <Select placeholder='Chọn Vị trí' className='group'>
                  {locations?.map((location, index) => {
                    return (
                      <Select.Option value={location.id} key={index}>
                        <div className='flex items-center'>
                          <img
                            src={location.hinhAnh}
                            className='w-[30px] h-[30px] rounded-[3px] mr-2'
                            alt='hinh vi tri'
                          />
                          <p className='h-[30px] leading-[30px] '>{location.tenViTri}</p>
                        </div>
                      </Select.Option>
                    )
                  })}
                </Select>
              </Form.Item>

              <Form.Item
                name='khach'
                label='Số khách'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số khách!'
                  }
                ]}
              >
                <Input type='number' placeholder='2' />
              </Form.Item>

              <Form.Item
                name='phongNgu'
                label='Số phòng ngủ'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số phòng ngủ!'
                  }
                ]}
              >
                <Input type='number' placeholder='1' />
              </Form.Item>
              <Form.Item
                name='giuong'
                label='Số giường ngủ'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số giường ngủ!'
                  }
                ]}
              >
                <Input type='number' placeholder='1' />
              </Form.Item>

              <Form.Item
                name='phongTam'
                label='Số phòng tắm'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số phòng tắm!'
                  }
                ]}
              >
                <Input type='number' placeholder='1' />
              </Form.Item>

              <Form.Item
                name='giaTien'
                label='Giá phòng'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập giá phòng!'
                  }
                ]}
              >
                <Input type='number' placeholder='Đơn vị $' />
              </Form.Item>

              <Form.Item
                name='mayGiat'
                label='Máy giặt'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='mayGiat' defaultChecked value={true}>
                    Có
                  </Radio>
                  <Radio name='mayGiat' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name='banLa'
                label='Bàn Là'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='banLa' defaultChecked value={true}>
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='dieuHoa' defaultChecked value={true}>
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='wifi' defaultChecked value={true}>
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='bep' defaultChecked value={true}>
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='doXe' defaultChecked value={true}>
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn!'
                  }
                ]}
              >
                <Radio.Group
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn!'
                    }
                  ]}
                >
                  <Radio name='hoBoi' defaultChecked value={true}>
                    Có
                  </Radio>
                  <Radio name='hoBoi' value={false}>
                    Không
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <footer className='flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800 mt-5'>
              <button
                onClick={closeModal}
                className='w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'
              >
                Huỷ
              </button>
              <button className='w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple'>
                Thêm mới
              </button>
            </footer>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default RoomForm

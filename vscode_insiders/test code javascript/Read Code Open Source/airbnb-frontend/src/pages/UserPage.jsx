import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import viVN from "antd/locale/vi_VN";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, ConfigProvider, Form, Modal, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { https, httpsNoLoading } from "../api/config";
import ListRooms from "../components/ListRooms";
import Spinner from "../components/Spinner";
import { ModalForm, ProForm, ProFormDatePicker, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import { NO_IMAGE_AVAILABLE, DEFAULT_NO_AVATAR } from "../constants/defaultValues";
import { setLogin } from "../redux/userSlice";
import { userLocalStorage } from "../api/localService";
import { capitalizeString } from "../utils/capitalizeString";

const waitTime = (time = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const onImageError = e => {
  e.target.src = NO_IMAGE_AVAILABLE;
};

const LoadingUserPlaces = () => (
  <div className='flex grid-cols-2 h-[210px] gap-3'>
    <div className='basis-5/12'>
      <Skeleton className='w-full h-full rounded-lg' />
    </div>
    <div className='basis-7/12 space-y-3'>
      {Array.from({ length: 3 }).map((_, indexChild) => (
        <div key={indexChild}>
          <Skeleton height={30} className='w-full rounded-lg' />
        </div>
      ))}
    </div>
  </div>
);

export default function UserPage() {
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const [original, setOriginal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector(state => {
    return state.userSlice;
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setFile("");
    setOriginal("");
  };
  const handleOk = () => {
    setIsModalOpen(false);
    const formData = new FormData();
    formData.append("formFile", original);
    https
      .post("/users/upload-avatar", formData, {
        headers: { token: user.token },
      })
      .then(res => {
        message.success("Cập nhật avatar thành công!");
        handleCancel();
        fetchUser(id);
        dispatch(setLogin({ ...user, avatar: res.data.content.avatar }));
        userLocalStorage.set({ ...user, avatar: res.data.content.avatar });
      })
      .catch(err => {
        message.error(err.response.data.content.replace(/^\w/, c => c.toUpperCase()));
        handleCancel();
      });
  };
  const [form] = Form.useForm();
  const { id } = useSelector(state => {
    return state.userSlice.user;
  });
  const [userInfo, setUserInfo] = useState(null);
  const fetchUser = id => {
    httpsNoLoading
      .get(`/users/${id}`)
      .then(res => {
        setUserInfo(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchUser(id);
  }, [id]);
  const [userBookedPlaces, setUserBookedPlaces] = useState(null);
  useEffect(() => {
    let ngayDen = "";
    let ngayDi = "";
    let soLuongKhach = "";

    httpsNoLoading
      .get(`dat-phong/lay-theo-nguoi-dung/${id}`)
      .then(userBookedPlacesResponse => {
        const promises = userBookedPlacesResponse.data.content.map(item => {
          ngayDen = item.ngayDen;
          ngayDi = item.ngayDi;
          soLuongKhach = item.soLuongKhach;
          return httpsNoLoading.get(`phong-thue/${item.maPhong}`).catch(err => {
            // Handle error when a room is not found (possibly deleted)
            console.error(`Error fetching room: ${err.message}`);
            return null; // Return null to be filtered out later
          });
        });

        Promise.all(promises)
          .then(roomResponses => {
            const validRoomResponses = roomResponses.filter(response => response !== null);

            const roomsData = validRoomResponses.map(response => response.data.content);
            const transformedPromises = roomsData.map(room => {
              return httpsNoLoading
                .get(`/vi-tri/${room.maViTri}`)
                .then(res => {
                  return {
                    ...room,
                    tinhThanh: res.data.content.tinhThanh,
                    ngayDen,
                    ngayDi,
                    soLuongKhach,
                  };
                })
                .catch(err => {
                  console.error(err);
                });
            });

            Promise.all(transformedPromises)
              .then(transformedData => {
                setUserBookedPlaces(transformedData);
              })
              .catch(err => {
                console.error(err);
              });
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  if (!userInfo || userInfo === null) return <Spinner />;
  return (
    <>
      <div className='mx-auto w-[95%] grid lg:flex gap-12 py-6'>
        <Card className='basis-auto h-[500px] block lg:sticky top-0 lg:top-20'>
          <div className='space-y-3'>
            <img className='mx-auto w-36 h-36 object-cover rounded-full' alt='' src={userInfo.avatar !== "" ? userInfo.avatar : DEFAULT_NO_AVATAR} />
            <div className='w-full flex justify-center'>
              <button className='mx-auto w-auto underline font-bold text-sm' onClick={showModal}>
                Cập nhật ảnh
              </button>
              {isModalOpen && (
                <Modal title='Cập nhật ảnh đại diện' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <div className='space-y-6'>
                    <input
                      type='file'
                      onChange={e => {
                        setOriginal(e.target.files[0]);
                        setFile(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                    <img className='mx-auto w-24 h-24 object-cover rounded-full' src={file} onError={onImageError} />
                  </div>
                </Modal>
              )}
            </div>
          </div>
          <div className='space-y-6 mt-3'>
            <div className='flex justify-start items-center gap-3'>
              <img className='w-6' alt='' src='https://cdn-icons-png.flaticon.com/512/5972/5972778.png' />
              <p className='font-bold text-xl'>Xác minh danh tính</p>
            </div>
            <p className='text-justify'>Xác minh danh tính của bạn với huy hiệu xác minh danh tính.</p>
            <Button>Nhận huy hiệu</Button>
            <div className='w-full h-px bg-gray-300'></div>
            <p className='text-xl font-bold'>{capitalizeString(userInfo.name)} đã xác nhận</p>
            <p className='space-x-3'>
              <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span>Địa chỉ email</span>
            </p>
          </div>
        </Card>
        <div className='basis-9/12 space-y-3'>
          <p className='font-bold text-xl'>Xin chào, tôi là {capitalizeString(userInfo.name)}</p>
          <p className='text-gray-500 text-sm'>Bắt đầu tham gia vào {new Date().getFullYear()}</p>

          <ConfigProvider button={{ className: "bg-blue-500" }} locale={viVN}>
            <ModalForm
              submitter={{
                // Configure the button text
                searchConfig: {
                  resetText: "Reset",
                  submitText: "Cập nhật",
                },
                // Configure the properties of the button
                resetButtonProps: {
                  style: {
                    // Hide the reset button
                    display: "none",
                  },
                },
                submitButtonProps: {},
              }}
              title='Chỉnh sửa hồ sơ'
              trigger={
                <button
                  className='w-auto underline font-bold text-sm'
                  onClick={() => {
                    form.setFieldsValue({
                      ...userInfo,
                      gender: userInfo.gender ? "nam" : "nu",
                    });
                  }}
                >
                  Chỉnh sửa hồ sơ
                </button>
              }
              form={form}
              autoFocusFirstInput
              modalProps={{
                destroyOnClose: true,
                onCancel: () => {},
              }}
              submitTimeout={2000}
              onFinish={async values => {
                const data = {
                  ...values,
                  gender: values.gender === "nam",
                };
                await waitTime(2000);
                https
                  .put(`/users/${id}`, { ...data })
                  .then(() => {
                    dispatch(setLogin({ ...user, ...data }));
                    userLocalStorage.set({ ...user, ...data });
                    message.success(`Cập nhật thông tin thành công`);
                    fetchUser(id);
                  })
                  .catch(err => {
                    message.error(err.response.data);
                  });
                return true;
              }}
            >
              <ProForm.Group>
                <ProFormText
                  width='md'
                  name='email'
                  label='Email'
                  placeholder='vidu@gmail.com'
                  rules={[
                    {
                      type: "email",
                      message: "Email không hợp lệ!",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập email!",
                    },
                  ]}
                />
                <ProFormText
                  width='md'
                  name='name'
                  label='Họ tên'
                  placeholder='Nguyễn Văn A'
                  tooltip='Tên trên giấy tờ hợp lệ của bạn'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập họ tên!",
                    },
                    {
                      pattern: new RegExp(/^[\p{L}\s'-]+$/u),
                      message: "Họ tên không hợp lệ!",
                    },
                  ]}
                />
                <ProFormText
                  width='md'
                  name='phone'
                  label='Số điện thoại'
                  placeholder='0903 123 123'
                  rules={[
                    {
                      pattern: new RegExp(/^0(?!0)\d{9}$/g),
                      message: "Sai định dạng số điện thoại!",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại!",
                    },
                  ]}
                />
                <ProFormDatePicker
                  width='md'
                  name='birthday'
                  format='DD-MM-YYYY'
                  label='Ngày sinh'
                  placeholder='Chọn ngày sinh'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn ngày sinh!",
                    },
                  ]}
                />
                <ProFormSelect
                  request={async () => [
                    {
                      value: "nam",
                      label: "Nam",
                    },
                    {
                      value: "nu",
                      label: "Nữ",
                    },
                  ]}
                  width='md'
                  name='gender'
                  label='Giới tính'
                  placeholder='Chọn giới tính'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn giới tính",
                    },
                  ]}
                />
              </ProForm.Group>
            </ModalForm>
          </ConfigProvider>
          <h1 className='font-bold text-2xl'>Phòng đã thuê</h1>
          {userBookedPlaces === null ? (
            <div className='space-y-3'>
              <LoadingUserPlaces />
              <div className='hidden lg:block'>
                <LoadingUserPlaces />
              </div>
            </div>
          ) : userBookedPlaces.length === 0 ? (
            <p>Bạn chưa đặt phòng nào.</p>
          ) : (
            <div className='space-y-6'>
              {userBookedPlaces.map((item, index) => (
                <ListRooms key={index} item={item} cityNoSlug={item.tinhThanh} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

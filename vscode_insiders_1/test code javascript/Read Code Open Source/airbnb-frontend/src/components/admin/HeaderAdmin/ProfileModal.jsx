import React, { useState } from "react";
import { userAdminLocalStorage } from "../../../api/localService";
import { message } from "antd";
import { userServ } from "../../../api/api";

const ProfileModal = ({ closeProfileModal }) => {
  const [user, setUser] = useState(userAdminLocalStorage.get());

  const [isUpdate, setIsUpdate] = useState(false);

  const [isChangeAvatar, setIsChangeAvatar] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "gender") {
      let val = true;
      e.target.value === "NAM" ? (val = true) : (val = false);
      setUser({ ...user, gender: val });
      return;
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateProfile = () => {
    // update normal
    if (!user.name || !user.email || !user.phone || !user.birthday) {
      message.error("Tất cả các trường không được để trống");
      return;
    }
    if (!user.email.includes("@")) {
      message.error("Email không đúng định dạng");
      return;
    }

    if (user.phone.length != 10) {
      message.error("Số điện thoại phải có 10 ký số");
      return;
    }

    //   update avtar
    if (isChangeAvatar) {
      const input = document.querySelector("#avatar");

      var dataAvt = new FormData();
      dataAvt.append("formFile", input.files[0]);

      userServ
        .updateAvatar(dataAvt)
        .then((response) => {
          const avatar = response.data.content.avatar;
          userAdminLocalStorage.set({ ...user, avatar });

          setIsChangeAvatar(false);
        })

        .catch((error) => {
          console.log(error);
          message.error(error.response.data.content);
        });
    }

    userServ
      .updateUser(user)
      .then((response) => {
        message.info(
          `Người dùng ${response.data.content.name} được cập nhật thành công.`
        );
        // cap nhat lai localStorage
        userAdminLocalStorage.set({ ...user });
        setIsUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeAvatar = (evt) => {
    let files = evt.target.files;
    let f = files[0];

    // show preview
    let reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function (oFREvent) {
      document.getElementById("showAvatar").src = oFREvent.target.result;
    };

    setIsChangeAvatar(true);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
      <div
        className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
        role="dialog"
        id="modal"
      >
        <header className="flex justify-end">
          <button
            className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
            aria-label="close"
            onClick={closeProfileModal}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </header>
        <div className="mt-4 mb-6">
          <div className="flex justify-between items-center">
            <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              Thông tin tài khoản
            </p>
            <p
              className=" bg-primary text-white px-3 rounded-[3px] hover:bg-primary-dark cursor-pointer"
              onClick={() => setIsUpdate(!isUpdate)}
            >
              Chỉnh sửa
            </p>
          </div>
          {/* <!-- Modal description --> */}
          <div className="text-sm text-gray-700 dark:text-gray-400">
            <div className="flex items-center justify-center flex-col justify-items-start">
              <div className="flex items-end">
                <img
                  src={user.avatar}
                  className="w-[90px] h-[90px] rounded-full object-cover"
                  alt="avatar"
                  id="showAvatar"
                />
                {isUpdate && (
                  <div>
                    <label
                      htmlFor="avatar"
                      className="bg-gray-200 px-2 rounded-[3px] ml-3 hover:text-black border border-gray-500 cursor-pointer"
                    >
                      Change
                    </label>
                    <input
                      id="avatar"
                      name="avatar"
                      type="file"
                      className="hidden"
                      onChange={changeAvatar}
                    />
                  </div>
                )}
              </div>
              <div className=" flex w-full mt-10">
                <div>
                  <div className="mb-2 flex">
                    <b className="w-[150px] inline-block">Tên người dùng:</b>{" "}
                    <div>
                      {isUpdate ? (
                        <input
                          type="text"
                          placeholder="Nhập tên ngừoi dùng"
                          value={user.name}
                          name="name"
                          onChange={handleChange}
                          className="w-full border-primary border px-3 rounded-[3px]"
                        />
                      ) : (
                        user.name
                      )}
                    </div>
                  </div>
                  <div className="mb-2">
                    <b className="w-[150px] inline-block">Mã người dùng:</b>{" "}
                    {user.id}
                  </div>
                  <div className="mb-2 flex">
                    <b className="w-[150px] inline-block">Chức vụ:</b>{" "}
                    {user.role}
                  </div>
                  <div className="mb-2 flex">
                    <b className="w-[150px] inline-block">Email:</b>{" "}
                    <div>
                      {isUpdate ? (
                        <input
                          type="text"
                          placeholder="Nhập email"
                          value={user.email}
                          name="email"
                          onChange={handleChange}
                          className="w-full border-primary border px-3 rounded-[3px]"
                        />
                      ) : (
                        user.email
                      )}
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <b className="w-[150px] inline-block">Ngày sinh:</b>{" "}
                    <div>
                      {isUpdate ? (
                        <input
                          type="text"
                          placeholder="Nhập ngày sinh"
                          value={user.birthday}
                          name="birthday"
                          onChange={handleChange}
                          className="w-full border-primary border px-3 rounded-[3px]"
                        />
                      ) : (
                        user.birthday
                      )}
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <b className="w-[150px] inline-block">Giới tính:</b>{" "}
                    <div>
                      {isUpdate ? (
                        <select
                          name="gender"
                          onChange={handleChange}
                          value={user.gender ? "NAM" : "NỮ"}
                          className="w-full border-primary border px-3 rounded-[3px]"
                        >
                          <option value="NAM">Nam</option>
                          <option value="NỮ">Nữ</option>
                        </select>
                      ) : user.gender === true ? (
                        "Nam"
                      ) : (
                        "Nữ"
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <b className="w-[150px] inline-block">Số điện thoại:</b>{" "}
                    <div>
                      {isUpdate ? (
                        <input
                          type="text"
                          placeholder="Nhập số điện thoại"
                          value={user.phone}
                          name="phone"
                          onChange={handleChange}
                          className="w-full border-primary border px-3 rounded-[3px]"
                        />
                      ) : (
                        user.phone
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button
            onClick={closeProfileModal}
            className="w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          >
            Huỷ
          </button>
          {!isUpdate && (
            <button
              className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple"
              onClick={closeProfileModal}
            >
              Xác nhận
            </button>
          )}

          {isUpdate && (
            <button
              className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple"
              onClick={updateProfile}
            >
              Cập nhật
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ProfileModal;

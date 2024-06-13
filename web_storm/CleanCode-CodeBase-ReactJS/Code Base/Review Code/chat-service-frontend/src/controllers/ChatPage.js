import React, { useContext, useEffect, useMemo, useState } from "react";
import OneToOne from "../components/chat-rooms/OneToOne";
import { AuthContext } from "../contexts/AuthProvider";
import UserInfo from "../components/user-info/UserInfo";
import Modal from "react-modal"
import { useForm } from "react-hook-form"

const ChatPage = () => {
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const checkLogin = async () => {
    const cookies = localStorage.getItem("userChat");
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      with: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const roomsCondition = useMemo(() => {
    return {
      fieldName : 'members',
      operator : 'array-contains',
      compareValue : user?.uid
    }
  },[user?.uid])
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  

  const onSubmit = async (data) => {
    console.log(data);
    reset({})
    setIsOpen(false)
  }

  
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
       <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // iaHideApp={false}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div>
        <form className="mt-6 w-[30vw]" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="groupname"
              className="block text-sm font-semibold text-gray-800"
            >
              Group name
            </label>
            <input
             {...register("name")}
              // onChange={(e) => setUsername(e?.target?.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="id"
              className="block text-sm font-semibold text-gray-800"
            >
              Description
            </label>
            <textarea
            // onChange={() => }
              {...register("description")}
              className="block w-full px-4 py-2 mt-2 h-24 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            >
            </textarea>
           
          </div>

          <div className="mt-6">
            <button 
              // type="button"
              // onClick={() => {
              //    setIsOpen(false)
              // }}
              className="w-20 px-4 mt-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Add
            </button>
          </div>
        </form>
        </div>
      </Modal>

      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 font-bold text-2xl">QuickChat</div>
            </div>
            <UserInfo />
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <button 
                  onClick={() => setIsOpen(true)}
                  className="flex items-center justify-center bg-green-300 h-4 w-4 rounded-full">
                  add
                </button>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    <button className="flex flex-row items-center w-[90%] hover:bg-gray-300 hover:text-black rounded-xl p-2">
                      <div className="flex items-center justify-center bg-blue-200 px-2 rounded-full">
                        P
                      </div>
                      <div className="ml-2 flex flex-col text-left text-sm font-semibold">
                        <span>Phòng mới 001</span>
                        <span className="text-xs">Mô tả phòng mới 001</span>
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    <button className="flex flex-row items-center w-[90%] hover:bg-gray-300 hover:text-black rounded-xl p-2">
                      <div className="flex items-center justify-center bg-blue-200 px-2 rounded-full">
                        P
                      </div>
                      <div className="ml-2 flex flex-col text-left text-sm font-semibold">
                        <span>Phòng mới 002</span>
                        <span className="text-xs">Mô tả phòng mới 002</span>
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    <button className="flex flex-row items-center w-[90%] hover:bg-gray-300 hover:text-black rounded-xl p-2">
                      <div className="flex items-center justify-center bg-blue-200 px-2 rounded-full">
                        P
                      </div>
                      <div className="ml-2 flex flex-col text-left text-sm font-semibold">
                        <span>Phòng mới 003</span>
                        <span className="text-xs">Mô tả phòng mới 003</span>
                      </div>
                    </button>
                  </div>
              {/* {listRooms?.map((rooms, index) => {
                return (
                  <div key={index} className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    <button className="flex flex-row items-center w-[90%] hover:bg-gray-300 hover:text-black rounded-xl p-2">
                      <div className="flex items-center justify-center bg-blue-200 px-2 rounded-full">
                        {Array.from(rooms?.name)[0]}
                      </div>
                      <div className="ml-2 flex flex-col text-left text-sm font-semibold">
                        <span>{rooms?.name}</span>
                        <span className="text-xs">{rooms?.description}</span>
                      </div>
                    </button>
                  </div>
                )
              })} */}
              
            </div>
            {/* Danh sách các cuộc hội thoại, cuộc gọi nhóm */}
          </div>
          <OneToOne userInfo={user} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

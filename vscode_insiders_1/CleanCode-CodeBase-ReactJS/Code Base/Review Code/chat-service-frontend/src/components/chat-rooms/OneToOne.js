import React, { useState, useEffect, useRef } from "react";
import { io } from 'socket.io-client';




const OneToOne = ({userInfo}) => {

  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(io(process.env.REACT_APP_SOCKET_URL));
  const [inpMessage, setIptMessage] = useState("");
  const [id, setId] = useState();
  const input = useRef();
  const socketRef = useRef();
  // const messagesEnd = useRef();

  const connectSocket = async () => {
    if (userInfo?.id) {
      console.log(userInfo);
      setSocket(
        io(process.env.REACT_APP_SOCKET_URL, {
          "transports": ['websocket'],
          "auth": {"callerId": userInfo?.id.toString()}
          // "auth": {"authId": userInfo?.id}
        })
      );
      // Sử dụng lại socket đã lưu trữ để khôi phục kết nối
    }
    else {
      setSocket(io(process.env.REACT_APP_SOCKET_URL))
    }
  }
  useEffect(() => {
    connectSocket()
  }, [userInfo]);
  const handleSendMessage = () => {
    // push(ref(database, "message"), {
    //   name: userInfo?.username,
    //   message: message,
    // });
    setIptMessage("");
  };

  useEffect(() => {
    socket.on("getId", (data) => {
      setId(data);
    });

    socket.on("sendDataServer", (dataGot) => {
      setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
      scrollToBottom();
    });
    
  }, []);

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id,
      };
      socket.emit("sendDataClient", msg);
      setMessage("");
    }
    handleSendMessage()
  };

  const scrollToBottom = () => {
    // messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMess = mess.map(
    (m, index) =>{
      if (m?.id === id) {
        return (
          <div key={index} className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>
                        {m.content}
                      </div>
                      {/* <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                        Seen
                      </div> */}
                    </div>
                  </div>
                </div>
        )
      }
      else {
        return (
          <div key={index} className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>{m.content}</div>
                    </div>
                  </div>
                </div>
        )
      }
    } 
    // <div key={index} className={`${m.id === id ? 'your-message' : 'other-people'} chat-item`}>
    //   {m.content}
    // </div>
  );

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  return (
      <div className="flex flex-col flex-auto h-[95%] p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                {renderMess}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  ref={input}
                  value={message}
                  onKeyDown={onEnterPress}
                  onChange={handleChange}
                  placeholder="Nhập tin nhắn ..."
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
              </div>
            </div>
            <div className="ml-4 w-[]">
              <button
                onClick={sendMessage}
                className="flex items-center justify-center w-12 h-10 top-0 text-gray-400 hover:text-gray-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default OneToOne;

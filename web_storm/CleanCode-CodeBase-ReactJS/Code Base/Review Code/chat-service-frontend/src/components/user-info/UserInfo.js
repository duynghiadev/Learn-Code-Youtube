import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";



const UserInfo = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    
  }, [ user]);
  return (
    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <img src={user?.photoURL} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="text-sm text-center font-semibold mt-2">FullName : <p>{user?.fullName}</p></div>
      <div className="text-sm font-semibold mt-2">UserName : {user?.username}</div>
      <div className="text-xs text-gray-500">ID : {user?.id}</div>
      <div className="flex flex-row items-center mt-3">
        <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
          <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
        </div>
        <div className="leading-none ml-1 text-xs">Active</div>
      </div>
    </div>
  );
};

export default UserInfo;
// {
//     displayName: "Phương Nguyễn",
//     email: "dacphuongatp@gmail.com",
//     photoURL: "https://lh3.googleusercontent.com/a/AAcHTtcY5f8CbOUxdOxX8RHMPmtBm68gzdu5KLkcE2DK=s96-c",
//     providerId: "google.com",
//     uid: "E6m3X19f0WaZoEaN9COcaRkyuFC2
// }
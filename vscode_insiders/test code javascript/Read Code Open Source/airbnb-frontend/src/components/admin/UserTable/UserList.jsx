import React, { useEffect, useState } from "react";
import { userServ } from "../../../api/api";
import User from "./User";
import ShowTotalNumber from "./ShowTotalNumber";
import PaginationUserList from "./PaginationUserList";
import ViewMore from "./ViewMore";
import { useLocation } from "react-router-dom";
import { getAllUsers, setTotalUsers } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { allUsers: users } = useSelector((state) => state.userSlice);
  const { totalUsers } = useSelector((state) => state.userSlice);

  let [userFrom, setUserForm] = useState(1);

  const renderUserPage = (index) => {
    userServ
      .getUsersPage(index ? index : userFrom)
      .then((result) => {
        dispatch(setTotalUsers(result.data.content.totalRow));
        dispatch(getAllUsers(result.data.content.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    renderUserPage(1);
  }, []);

  const selectPagination = (number) => {
    setUserForm(number);
  };

  const selectPaginationNextPrev = (number) => {
    // if (
    //   (userFrom === 1 && number === -1) ||
    //   (userFrom === Math.ceil(users?.length / 10) && number === 1)
    // ) {
    //   return null;
    // } else {
    //   const num = (userFrom += number);
    //   setUserForm(num);
    //   renderUserPage(num);
    // }

    const num = (userFrom += number * 1);

    if (num >= 1 && num <= Math.ceil(totalUsers / 10)) {
      console.log(num);

      setUserForm(num * 1);
      renderUserPage(num);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Người Dùng</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Trạng Thái</th>
              <th className="px-4 py-3">Ngày Sinh</th>
              <th className="px-4 py-3">Thao Tác</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {users?.map((user, index) => {
              if (!user.avatar) {
                user = {
                  ...user,
                  avatar: `https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg`,
                };
              }
              return (
                <User
                  user={user}
                  index={index}
                  key={index}
                  renderUserPage={renderUserPage}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        <ShowTotalNumber totalUsers={totalUsers} userFrom={userFrom} />
        <span className="col-span-2"></span>
        {/* <!-- Pagination --> */}
        {pathname === "/admin" ? (
          <ViewMore />
        ) : (
          <PaginationUserList
            userFrom={userFrom}
            totalUsers={totalUsers}
            selectPagination={selectPagination}
            selectPaginationNextPrev={selectPaginationNextPrev}
            renderUserPage={renderUserPage}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;

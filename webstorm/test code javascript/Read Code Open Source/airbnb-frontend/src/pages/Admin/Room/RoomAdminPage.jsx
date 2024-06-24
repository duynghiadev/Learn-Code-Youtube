import React from "react";
import CTA from "../Dashboard/CTA";
import LoadingPage from "../../../components/admin/LoadingPage/LoadingPage";
import HeadingAdmin from "../../../components/admin/HeadingAdmin/HeadingAdmin";
import RoomList from "../../../components/admin/RoomTable/RoomList";

const RoomAdminPage = () => {
  return (
    <>
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <HeadingAdmin heading="Hệ thống phòng" />
          {/* <!-- CTA --> */}
          <CTA />
          {/* <!-- New Table --> */}
          <RoomList />
        </div>
      </main>
      <LoadingPage title={"Hệ thống phòng"} />
    </>
  );
};

export default RoomAdminPage;

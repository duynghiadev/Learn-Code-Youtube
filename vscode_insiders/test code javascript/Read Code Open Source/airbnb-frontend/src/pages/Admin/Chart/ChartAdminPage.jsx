import React from "react";
import CTA from "../Dashboard/CTA";
import LoadingPage from "../../../components/admin/LoadingPage/LoadingPage";
import UserList from "../../../components/admin/UserTable/UserList";
import HeadingAdmin from "../../../components/admin/HeadingAdmin/HeadingAdmin";
import ChartAdmin from "../../../components/admin/ChartAdmin/ChartAdmin";

const ChartAdminPage = () => {
  return (
    <>
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <HeadingAdmin heading="Biểu đồ" />
          <CTA />
          <ChartAdmin />
        </div>
      </main>
      <LoadingPage title={"Biểu đồ"} />
    </>
  );
};

export default ChartAdminPage;

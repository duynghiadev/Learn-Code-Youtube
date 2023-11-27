import React from "react";
import MainBody from "./MainBody";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </div>
  );
}

export default MainLayout;

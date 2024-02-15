import { Stack } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: 2,
        position: "sticky",
        top: 0,
        backgroundColor: "#000",
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={"45px"} />
      </Link>

      {/* SearchBox */}
      <SearchBar />
    </Stack>
  );
};

export default NavBar;

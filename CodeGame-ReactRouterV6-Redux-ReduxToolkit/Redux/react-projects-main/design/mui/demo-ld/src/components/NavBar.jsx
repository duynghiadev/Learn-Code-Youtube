import { Abc, Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: { display: "flex" },
  //  this below line not working

  // display: { xs: "none", md: "flex" },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: { display: "none" },
  //  this below line not working
  // display: { xs: "flex", md: "none" },
}));

const NavBar = () => {
  const [isMenuOpenend, setIsMenuOpened] = useState(false);

  const handleClose = () => {
    setIsMenuOpened(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* icons/heading */}
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          Mui basics
        </Typography>
        <Pets sx={{ display: { xs: "block", md: "none" } }} />

        {/* search bar */}
        <Search>
          <InputBase placeholder="search..." />
        </Search>

        {/* Icons/user box */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="profile-image"
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            sx={{ width: "30px", height: "30px" }}
            onClick={() => setIsMenuOpened(true)}
          />
        </Icons>
        <UserBox onClick={() => setIsMenuOpened(true)}>
          <Avatar
            alt="profile-image"
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            sx={{ width: "30px", height: "30px" }}
          />
          <Typography variant="h6">Test</Typography>
        </UserBox>

        {/* Menu to be openend on profile image click*/}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={isMenuOpenend}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;

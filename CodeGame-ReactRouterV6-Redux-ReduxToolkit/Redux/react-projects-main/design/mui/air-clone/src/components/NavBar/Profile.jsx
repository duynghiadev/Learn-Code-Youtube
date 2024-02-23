import React from "react";
import { Box, Button, IconButton, Link, Stack, styled } from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileBox = styled(Box)({
  display: "flex",
  gap: 10,
  justifyContent: "space-between",
  alignItems: "center",
});

const ProfileSettings = () => {
  return (
    <ProfileBox>
      <Link href="#">Become A Host</Link>
      <Button>
        <BsGlobe size="24px" />
      </Button>
      <Button sx={{ borderRadius: "20px", border: "1px solid #ddd" }}>
        <Stack>
          <AiOutlineMenu size={"24px"} />
          <FaRegUserCircle size={"24px"} />
        </Stack>
      </Button>
    </ProfileBox>
  );
};

export default ProfileSettings;

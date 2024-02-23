import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      sx={{
        p: 2,
        flex: 2,
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h6" sx={{ fontWeight: 100, mt: 2, mb: 2 }}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" sx={{ fontWeight: 100, mt: 2, mb: 2 }}>
          Lates Photos
        </Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img
              src={
                "https://images.unsplash.com/photo-1674318012388-141651b08a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                "https://images.unsplash.com/photo-1653376332215-7277dae6c6b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                "https://images.unsplash.com/photo-1674217223849-51f430976834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              }
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" sx={{ fontWeight: 100, mt: 2, mb: 2 }}>
          Latest Coverstaions
        </Typography>
      </Box>
    </Box>
  );
};

export default RightBar;

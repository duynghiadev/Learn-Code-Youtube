import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Grid2 container spacing={2}>
      {videos.map((v, index) => (
        <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
          {v.id.channelId ? (
            <ChannelCard channel={v} />
          ) : (
            <VideoCard video={v} />
          )}
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Videos;

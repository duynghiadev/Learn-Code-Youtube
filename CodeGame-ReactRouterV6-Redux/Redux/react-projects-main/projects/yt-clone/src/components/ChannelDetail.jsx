import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as rapidApiService from "../utils/rapid-api-service";
import { ChannelCard, VideoCard, Videos } from "./";

const ChannelDetail = () => {
  const { id: channelId } = useParams();

  const [channel, setChannel] = useState();

  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    const channleDetailsUrl = `channels?part=snippet,statistics&id=${channelId}`;
    rapidApiService.fetchFromApi(channleDetailsUrl).then((data) => {
      setChannel(data.items[0]);
    });

    const channelVideosUrl = `search?part=snippet,id&channelId=${channelId}`;
    rapidApiService.fetchFromApi(channelVideosUrl).then((data) => {
      // console.log("videos :- ", data.items);
      setChannelVideos(data.items);
    });
  }, [channelId]);

  return (
    <Stack alignItems="center" minHeight="95vh">
      <Box
        sx={{ height: "25vh", backgroundColor: "skyblue" }}
        alignSelf="stretch"
      ></Box>
      {channel && (
        <Box sx={{ mt: "-50px" }}>
          <ChannelCard channel={channel} />
        </Box>
      )}

      <Box sx={{ mt: 2, px: { xs: 1, md: 10 } }}>
        {channelVideos.length && <Videos videos={channelVideos} />}
      </Box>
    </Stack>
  );
};

export default ChannelDetail;

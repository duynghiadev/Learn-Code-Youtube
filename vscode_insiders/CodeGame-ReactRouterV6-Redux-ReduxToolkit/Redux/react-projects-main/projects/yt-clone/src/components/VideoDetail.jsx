import { Stack, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import * as rapidApiService from "../utils/rapid-api-service";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const { id: videoId } = useParams();

  const [videoDetail, setVideoDetail] = useState();

  const [similarVideos, setSimilarVideos] = useState([]);

  useEffect(() => {
    rapidApiService
      .fetchFromApi(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
      });

    const similarVideoUrl = `search?relatedToVideoId=${videoId}&part=id,snippet&type=video`;

    rapidApiService.fetchFromApi(similarVideoUrl).then((data) => {
      console.log(data.items);
      setSimilarVideos(data.items);
    });
  }, [videoId]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        columnGap: { xs: 0, md: 2 },
        rowGap: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ flex: { md: 4 } }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="77vh"
          controls
        />
        <Typography color={"white"} variant="h5" fontWeight={"bold"}>
          {videoDetail.snippet.title}
        </Typography>
      </Box>
      <Box sx={{ flex: { md: 1 }, height: "90vh", overflowY: "auto" }}>
        {similarVideos.length && (
          <Stack>
            {similarVideos.map((video, idx) => (
              <VideoCard video={video} key={idx} />
            ))}
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

export default VideoDetail;

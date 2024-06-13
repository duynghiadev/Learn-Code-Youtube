import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet: { channelId, channelTitle, description, thumbnails, title },
  },
}) => {
  return (
    <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* Video Thumbnail */}
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "180px" }}
          image={thumbnails?.high?.url || demoThumbnailUrl}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          {/* Video Title */}
          <Typography
            variant="subtitle1"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>

          {/* Channel Link */}
          <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
            <Stack direction="row" spacing={1} alignItems="center" mt={1}>
              <Typography
                variant="subtitle2"
                sx={{ color: "gray", fontWeight: "bold" }}
              >
                {channelTitle || demoChannelTitle}
              </Typography>
              <CheckCircle sx={{ fontSize: "12px", color: "gray" }} />
            </Stack>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;

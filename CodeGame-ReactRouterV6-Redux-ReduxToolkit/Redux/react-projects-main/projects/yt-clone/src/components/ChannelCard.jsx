import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/constants";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const ChannelCard = ({
  channel: {
    snippet: { channelId, channelTitle, thumbnails },
    statistics,
  },
}) => {
  return (
    <Card
      sx={{
        background: "transparent",
        borderRadius: "none",
        boxShadow: "none",
      }}
    >
      <Stack justifyContent="center" alignItems="center">
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <CardMedia
            component="img"
            image={thumbnails?.high?.url || demoThumbnailUrl}
            sx={{ width: "180px", height: "180px", borderRadius: "50%" }}
          />
        </Link>
        <CardContent>
          <Stack alignItems="center">
            <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {channelTitle || demoChannelTitle}
                </Typography>
                <CheckCircle sx={{ fontSize: "15px", color: "gray" }} />
              </Stack>
            </Link>
            {statistics && statistics?.subscriberCount && (
              <Typography sx={{ color: "#fff", opacity: "0.8" }}>
                {parseInt(statistics.subscriberCount).toLocaleString() +
                  " Subscribers"}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ChannelCard;

import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const VideoCard = ({ video, id }) => {
  const {
    id: { videoId },
    snippet: {
      publishedAt,
      channelId,
      title,
      description,
      channelTitle,
      publishTime,
      thumbnails,
    },
  } = video;

  return (
    <Link to={`/videoDetail/${videoId}`}>
      <div className="flex flex-col gap-2">
        {/* Main Video Image */}
        <div className="h-[180px] rounded-xl">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={thumbnails?.medium?.url}
            alt="thumbnail"
          />
        </div>

        {/* Channel Image + Video Title + Other Info*/}
        <div className="flex flex-row gap-4">
          {/* Channel Image */}
          <div className="h-9 w-9 rounded-full">
            <img
              src={`https://xsgames.co/randomusers/assets/avatars/female/${id}.jpg`}
              alt="channel"
              className="h-full w-full rounded-full"
            />
          </div>
          {/* Video Title + Channel Title + Views + When */}
          <div className="flex flex-col">
            <p className="text-sm  line-clamp-2">{title}</p>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {channelTitle}
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
            </span>
            {/* <div className="flex flex-row gap-1"></div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;

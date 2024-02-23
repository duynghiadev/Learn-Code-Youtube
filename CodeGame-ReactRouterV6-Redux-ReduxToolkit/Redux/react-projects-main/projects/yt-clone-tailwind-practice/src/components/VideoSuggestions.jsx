import React from "react";
import { Link } from "react-router-dom";

const VideoSuggestions = ({ suggestedVideos }) => {
  if (suggestedVideos.length === 0) return <></>;

  return (
    <div className="flex flex-col gap-2">
      {suggestedVideos.map(({ id, snippet }) => (
        <Link to={`/videoDetail/${id?.videoId}`} key={id?.videoId}>
          <div className="flex flex-row gap-1 items-center">
            {/* Thumbnail Image */}
            <div className="flex-1 rounded-3xl">
              <img
                src={snippet?.thumbnails?.high?.url}
                alt="poster"
                className="w-full h-full rounded-3xl"
              />
            </div>
            {/* Video Info */}
            <div className="flex-1 text-white text-xs flex flex-col gap-2">
              <p className="line-clamp-2 font-bold">{snippet?.title}</p>
              <div className="flex flex-col text-[12px] text-white/75">
                <p>{snippet?.channelTitle}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoSuggestions;

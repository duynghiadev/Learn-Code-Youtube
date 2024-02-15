import React from "react";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoPlayer = ({ videoDetail }) => {
  if (!videoDetail) return <></>;

  const { id, snippet, contentDetails, statistics } = videoDetail;

  const url = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className="flex flex-col gap-4 lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3">
      <div className="h-[200px] md:h-[400px] xl:[h-550px]">
        <ReactPlayer url={url} width="100%" height="100%" controls={true} />
      </div>
      <p className="text-white font-bold text-sm md:text-xl line-clamp-2">
        {snippet?.title}
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
        {/* Channel Info */}
        <div className="flex flex-row gap-2 items-center">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src="https://cdn.theatlantic.com/media/mt/science/firefox-logo.jpg"
            alt="channel-logo"
          />
          <div className="flex flex-col">
            <p className="text-white text-sm font-bold">
              {snippet?.channelTitle}
            </p>
            <p className="text-sm text-white/80">401K susbscribers</p>
          </div>
        </div>
        {/* 2 Buttons */}
        <div className="flex flex-row gap-2">
          <button className="rounded-full px-4 py-1 bg-white/[0.15] flex flex-row items-center text-white/60 text-sm gap-1 md:px-4 md:py-2 md:text-lg">
            <AiOutlineLike className="" />
            <p className="">
              {abbreviateNumber(statistics.likeCount, 2)} Likes
            </p>
          </button>
          <button className="rounded-full px-4 py-1 bg-white/[0.15] flex flex-row items-center text-white/60 text-sm gap-1 md:px-4 md:py-2 md:text-lg">
            <p className="">
              {abbreviateNumber(statistics.viewCount, 2)} Views
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import VideoContainer from "./VideoContainer";
import CategoriesButtonContainer from "./CategoriesButtonContainer";
import VideosListContainer from "./VideosListContainer";

const VideoPageContainer = () => {
  
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex">
      <VideoContainer />
      <div className="flex flex-col w-[30%]">
        <CategoriesButtonContainer />
        <VideosListContainer/>
      </div>
    </div>

  )
}

export default VideoPageContainer;


import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import VideoSuggestions from "../components/VideoSuggestions";
import { AppContext } from "../context/AppContext";
import { fetchDataFromApi } from "../utils/api";

const VideoDetail = () => {
  const { videoId } = useParams();

  const [videoDetail, setVideoDetail] = useState();
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  const { setLoading } = useContext(AppContext);

  useEffect(() => {
    // Video Detail
    const getVideoDetail = () => {
      const videoDetailUrl = "/videos";
      const videoDetailParams = {
        part: "contentDetails,snippet,statistics",
        id: videoId,
      };
      return fetchDataFromApi(videoDetailUrl, videoDetailParams);
    };

    // Suggested Videos
    const getSuggestedVideos = () => {
      const suggestedVideosUrl = "/search";
      const suggestedVideosParams = {
        relatedToVideoId: videoId,
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      };
      return fetchDataFromApi(suggestedVideosUrl, suggestedVideosParams);
    };

    setLoading(true);

    Promise.allSettled([getVideoDetail(), getSuggestedVideos()]).then(
      ([result1, result2]) => {
        console.log(result1.value);
        console.log(result2.value);
        const { items: detailItems } = result1.value;
        setVideoDetail(detailItems[0]);
        const { items } = result2.value;
        setSuggestedVideos(items);
        setLoading(false);
      }
    );
  }, [videoId, setLoading]);

  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto mt-2">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Video Detail */}
          <VideoPlayer videoDetail={videoDetail} />

          {/* Suggestions */}
          <div className="px-4 flex-[1] text-white lg:w-[350px] xl:w-[400px]">
            <VideoSuggestions suggestedVideos={suggestedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

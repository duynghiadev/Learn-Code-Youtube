import React, { useContext } from "react";
import CategoriesSideBar from "../components/CategoriesSideBar";
import VideoCard from "../components/VideoCard";
import { AppContext } from "../context/AppContext";

const Feed = () => {
  const { searchResults } = useContext(AppContext);

  return (
    // flex layout
    <div className="flex flex-row text-white h-[calc(100%-56px)]">
      {/* Left side bar */}
      <CategoriesSideBar />

      {/* All videos */}
      <div className="flex-1 py-4 px-5 h-full overflow-x-hidden overflow-y-scroll">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.length > 0 &&
            searchResults.map((video, id) => {
              if (video?.id?.kind !== "youtube#video") return false;
              return (
                <VideoCard video={video} id={id} key={video?.id?.videoId} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;

// flex box layout
// <div className="mt-2 flex flex-row text-white">
//       <div className="hidden flex-1 md:flex">Categories</div>
//       <div className="flex-[4]">Videos</div>
//  </div>

// grid lyout
//<div className="mt-2 grid grid-cols-6 text-white h-[calc(100%-240px)]">
//    <CategoriesSideBar />
//    <div className="col-span-4">Videos</div>
//</div>

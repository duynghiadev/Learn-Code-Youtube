import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesSideBar from "../components/CategoriesSideBar";
import { fetchDataFromApi } from "../utils/api";

const SearchResults = () => {
  const { searchTerm } = useParams();

  const [searchResultsFetched, setSearchResultsFetched] = useState([]);

  useEffect(() => {
    const searchVideos = async () => {
      const { items } = await fetchDataFromApi("/search", { q: searchTerm });
      console.log(items);
      setSearchResultsFetched(items);
    };

    searchVideos();
  }, [searchTerm]);

  return (
    <div className="flex flex-row text-white h-[calc(100%-56px)]">
      {/* Left side bar */}
      <CategoriesSideBar />
      <div className="p-4 overflow-x-hidden overflow-y-scroll flex-1">
        {searchResultsFetched?.map(({ id, snippet }) => (
          <div key={id.videoId} className="flex flex-row gap-4">
            {/* Image */}
            <div className="rounded-3xl w-[150px] md:w-[200px] lg:w-[250px]">
              <img
                src={snippet?.thumbnails?.high?.url}
                alt="video"
                className="w-full object-cover rounded-3xl"
              />
            </div>
            {/* Some Info */}
            <div className="text-white">hello</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

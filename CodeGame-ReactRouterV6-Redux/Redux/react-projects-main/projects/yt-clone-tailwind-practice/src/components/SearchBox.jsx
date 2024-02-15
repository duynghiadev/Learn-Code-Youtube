import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length !== 0) {
      navigate(`/searchResults/${searchTerm}`);
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-row h-8 border border-[#303030] rounded-full md:h-10"
      >
        {isInputFocused && (
          <div className="hidden rounded-l-full text-white text-xl flex-row items-center pl-3 md:flex">
            <AiOutlineSearch />
          </div>
        )}

        <input
          className="bg-transparent rounded-l-full focus:outline-none px-4 py-2 text-white w-44 md:w-64 lg:w-[500px] focus:px-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <button
          type="submit"
          className="h-full bg-[#303030] px-4 rounded-r-full text-white flex flex-row items-center text-xl"
        >
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

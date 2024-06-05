import React from "react";

const PaginationUserList = ({
  totalUsers,
  userFrom,
  selectPagination,
  selectPaginationNextPrev,
  renderUserPage,
}) => {
  let totalPagination = Math.ceil(totalUsers / 10);

  const renderPagination = () => {
    let array = [];
    for (var i = 1; i <= totalPagination; i++) {
      if (i > 4 && i < totalPagination - 2) {
        continue;
      }
      array.push(i);
    }

    return array.map((item, index) => {
      if (item === userFrom) {
        return (
          <li key={item}>
            <button className="px-3 py-1 text-white transition-colors duration-150 bg-primary border border-r-0 border-primary rounded-md focus:outline-none focus:shadow-outline-purple">
              {item}
            </button>
          </li>
        );
      }
      if (array[index] - array[index - 1] > 1) {
        return (
          <li key="00">
            <span className="px-3 py-1">...</span>
          </li>
        );
      }

      return (
        <li key={item}>
          <button
            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
            onClick={() => {
              selectPagination(item);
              renderUserPage(item);
            }}
          >
            {item}
          </button>
        </li>
      );
    });
  };

  return (
    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
      <nav aria-label="Table navigation">
        <ul className="inline-flex items-center">
          <li>
            <button
              className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
              aria-label="Previous"
              onClick={() => selectPaginationNextPrev(-1)}
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {renderPagination()}
          <li>
            <button
              className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
              aria-label="Next"
              onClick={() => selectPaginationNextPrev(1)}
            >
              <svg
                className="w-4 h-4 fill-current"
                aria-hidden="true"
                viewBox="0 0 20 20"
              >
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </span>
  );
};

export default PaginationUserList;

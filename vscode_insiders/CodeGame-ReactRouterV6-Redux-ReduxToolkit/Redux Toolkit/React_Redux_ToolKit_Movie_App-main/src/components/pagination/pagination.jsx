import React from "react";
import "./pagination.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  let total_Pages = useSelector((state) => state.moviesList.total_pages);
  let totalPages = total_Pages > 500 ? 500 : total_Pages;
  let currentPage = useSelector((state) => state.moviesList.page);
  let location = useLocation();
  let urlSearch = new URLSearchParams(location.search);
  const navigate = useNavigate();

if(total_Pages<2)
return;



  let changePage = (page) => {
    urlSearch.set("page", page);
    navigate("?" + urlSearch.toString());
  };

  
  const pageEle = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > totalPages || i < -2) break;
    if (i < 1) continue;
    pageEle.push(
      <li key={i} className={i === currentPage ? "active" : null}>
        <a  onClick={() => { changePage(i);}}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <div className="customPagination">
      <ul className="pageNum">
        <li>
          {currentPage !== 1 && (
            <a  onClick={() => {changePage(currentPage - 1);}}>
              {"<<"}
            </a>
          )}
        </li>
        {currentPage > 3 && (
          <>
            <li>
              <a  onClick={() => {changePage(1);}}>
                {"1"}
              </a>
            </li>
            <li>
              <a >...</a>
            </li>
          </>
        )}
        {pageEle}
        <li>{currentPage < totalPages - 2 && <a >...</a>}</li>
        <li>
          {currentPage < totalPages - 2 && (
            <a  onClick={() => {changePage(totalPages)}}>
              {totalPages}
            </a>
          )}
        </li>
        <li>
          {currentPage !== totalPages && (
            <a
               onClick={() => {changePage(currentPage + 1);}}>
              {">>"}
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

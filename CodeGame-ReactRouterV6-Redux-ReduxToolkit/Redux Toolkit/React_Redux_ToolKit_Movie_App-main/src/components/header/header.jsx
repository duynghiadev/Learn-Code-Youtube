import React, { useState, useRef, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./header.css";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { genreList } from "../../features/genreSlice";
import { useNavigate } from "react-router-dom";
import { moviesGenreParams, seriesGenreParams } from "../../ِAPI/config";
import { DropList } from "./dropList";

const Header = () => {
  
  let urlSearch = new URLSearchParams("");
  let navigate = useNavigate();
  let [query, setQuery] = useState("");

  const onTextChange = (word) => {
    setQuery(word);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (query != "") {
      urlSearch.set("query", query);
      navigate("/search?" + urlSearch.toString());
    }
  };

  const dispatch = useDispatch();
  let moviesGenre = useSelector((state) => state.genreList.movies);
  let seriesGenre = useSelector((state) => state.genreList.series);

  useEffect(() => {
    dispatch(genreList(moviesGenreParams));
    dispatch(genreList(seriesGenreParams));
  }, []);

  const [toggle, setToggle] = useState(false);
  const togChange = (e) => {
    setToggle(!toggle);
  };

  const navbarRef = useRef(null);
  let navbarOff = 0;

  useEffect(() => {
    let navbar = navbarRef.current;
    navbarOff = navbar.offsetTop;
    window.onscroll = () => {
      if (window.pageYOffset > navbarOff) {
        navbar.classList.add("navbarFixed");
      } else {
        navbar.classList.remove("navbarFixed");
      }
    };
  }, []);

  return (
    <Navbar expand="lg" onToggle={togChange} ref={navbarRef}>
      <Container>
        <Navbar.Brand className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="Toggle-block"
          aria-controls="basic-navbar-nav"
        >
          <div className="Toggle-icon">
            <span className={toggle ? "tog-icon-1" : ""}></span>
            <span className={toggle ? "tog-icon-2" : ""}></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" align-self-lg-stretch"
        >
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <DropList list={moviesGenre} path={"movies"}>
                  movies
                </DropList>
              </li>
              <li>
                <DropList list={seriesGenre} path={"series"}>
                  Series
                </DropList>
              </li>
              <li>
                <Link to="/animation">Animation</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>

          <form className="search" onSubmit={onSearch}>
            <input type="text" onChange={(e) => onTextChange(e.target.value)} />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

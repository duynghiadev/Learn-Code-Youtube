import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

export default class App extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </>
    );
  }
}

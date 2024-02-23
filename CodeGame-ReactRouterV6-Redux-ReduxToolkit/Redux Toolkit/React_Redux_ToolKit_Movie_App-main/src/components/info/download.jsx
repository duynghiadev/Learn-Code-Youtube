import React from "react";
import "./info.css";

const Download = () => {
  return (
    <div className="download">
      <div className="downloadBox">
        <div className="quality">1080p</div>
        <div className="qualityLink">
          <a className="downloadLink">
            download
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </a>
          <a className="watchLink">
            watch
            <i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;

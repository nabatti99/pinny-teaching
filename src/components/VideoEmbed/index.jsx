import React from "react";
import Spacing from "../Spacing";
const VideoEmbed = ({ videoUrl, bgUrl, name }) => {
  return (
    <div className="cs_monitor_details">
      <div
        className="cs_monitor_details_bg cs_bg_filed"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
      <Spacing md="140" sm="100" />
      <h1 className="cs_fs_72 cs_semibold game-title">{name}</h1>
      <Spacing sm="0" lg="60" xl="140" md="140" />
      <div className="video-embed">
        <div className="computer-frame">
          <img
            src="/images/doctors/mac-screen-svgrepo-com.svg"
            alt="Computer Frame"
            className="frame-image"
          />
          <div className="iframe-container">
            <iframe
              src={videoUrl}
              title="Embedded Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;

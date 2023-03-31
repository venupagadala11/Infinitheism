import React, { useContext } from "react";
import "./VideoCard.css";
import { currentRunnigVideoContext } from "../../Screens/VideoLibrary/VideoLibrary";
import download from '../../../Assets/Images/assets/download.svg'

export default function VideoCard({ videoData, currentIndex }) {
  // using useContext getting the required values and destructuring those values below from the value
  const value = useContext(currentRunnigVideoContext);
  const [currentRunnigVideo, setCurrnetRunningVideo] = value;

  // updating the current runnibg video index
  const handleCurrentRunningVideo = () => {
    setCurrnetRunningVideo(currentIndex); //update currentRunnigVideo and access this in the other required component
  };

  const downloadVideo = () => {
    const link = document.createElement('a');
    link.href =videoData.videoSrc ;
    link.download = 'myVideo.mp4';
    link.click();
  };
  
  return (
    <div className="videoCard_container">
      <div>
        {/* Thumb nails of the videos wraped in anchor tag which directly renders the running video*/}
        <a href="#selectedVideoToPlay">
          <img
            className="videoCard_videoThumbNail"
            onClick={handleCurrentRunningVideo}
            src={videoData.thumbNailrSrc}
            alt="thumb nail"
          />
        </a>
        {/* { currentIndex===value[0]? */}
        <progress id="progress" className="videoCard_progressBar" max="100" value={videoData.progress}>
                Progress
        </progress>
        
        {/* } */}
      </div>

      {/* video description */}
      <div className="videoCard_video-details">
        <div className="videoCard_title">{videoData.title}</div>
        <div className="videoCard_desc">{videoData.desc} <img className="videoCard_downloadIcon" onClick={downloadVideo} src={download} alt='download'/></div>
      </div>
    </div>
  );
}

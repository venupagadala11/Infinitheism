import React from "react";
import './ListOfVideos.css'
import videoLibraryData from '../../Data';
import VideoCard from '../CommonComponents/VideoCard/VideoCard';

export default function VideoLibrary() {
  return (
    <div className="videoCard_container">
      <div className="videoLibrary_title" >All Chapters</div>
      {/* using map iterate the videoLibraryData and render al the videos using video card component and sending index of the current obl=ject of iteration */}
      <div class="videoLibrary_videoCards">
        {videoLibraryData.map((videoData, index) => (
          <VideoCard videoData={videoData} currentIndex={index} />
        ))}
      </div>
    </div>
  );
}

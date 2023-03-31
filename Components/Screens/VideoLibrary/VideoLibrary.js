import React from 'react';
import CurrentRunnigVideo from '../../CurrentRunningVideo/CurrentRunningVideo'
import VideoLibrary from '../../ListOfVideos/ListOfVideos';
import { createContext, useState } from "react";
import "./VideoLibrary.css"
export const currentRunnigVideoContext= createContext(null);  //useContext to get the user selected video to play

export default function VideoPlayer(){
  const [videoProgress, setVideoProgress] = useState();
  const [currentRunnigVideo, setCurrnetRunningVideo] = useState(0);  //Initially the first video from the video library will be playing
  const value = [currentRunnigVideo, setCurrnetRunningVideo,videoProgress, setVideoProgress]  //the required values are stored in the 'value' and using provider we can access it any where in the application
  
  return (
      <currentRunnigVideoContext.Provider value={value}> 
        <div className='videoLibrary'>
        <CurrentRunnigVideo/>
        <VideoLibrary/>
        </div>
      </currentRunnigVideoContext.Provider>
    )
  }

  

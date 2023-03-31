import React, {useContext, useEffect, useRef, useState} from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import download from '../../Assets/Images/assets/download.svg';
import share from '../../Assets/Images/assets/Share.svg';
import favorite from '../../Assets/Images/assets/fav.svg';
import notes from '../../Assets/Images/assets/take_notes.svg';
import { currentRunnigVideoContext } from '../Screens/VideoLibrary/VideoLibrary';
import videoLibraryData from '../../Data';
import './CurrentRunningVideo.css';

export default function CurrentRunnigVideo({video}) {
    const [playVideo, setplayVideo]= useState(true);  //to make video play and pause here we maintain its status in this state
    const videoRef = useRef();   //to store the video reference 
    const value = useContext(currentRunnigVideoContext);  //consuming the value(it has video source) from the currentRunningVideo context and using it here to play the video
    const [videoDuration, setVideoDuration] = useState();
    // set the video status play and this get triggered when click on the play button
    const handlePlay=()=>
    {
        videoRef.current.play();  //using the video reference we play the video
    }

    // set the video status pause and this get triggered when click on the pause button
    const handlePause =()=>
    {
        videoRef.current.pause();  //using the video reference we play the video
    }

    // Here we load the new video and make it play initially and this get triggered when ever the new video loads
    useEffect(()=>{
        videoRef.current.load();  //load the video
        videoRef.current.play();  //play the video
        setplayVideo(false);
        setVideoDuration(videoRef.current.duration);
        
        // if the video has already played then to make the video start from the paused part we store the played video time 
        if(videoLibraryData[value[0]].progress>0)
        {
            videoRef.current.currentTime=videoLibraryData[value[0]].VideoCurrentTime;
        }  
    },[videoLibraryData[value[0]].videoSrc]);

    useEffect(()=>
    {
        videoRef.current.play();
        videoRef.current.pause(); 
    },[])

    const handleProgress = (e) => {
        if (isNaN(e.target.duration))   // duration is NotaNumber at Beginning.
          return;
        value[3]((e.target.currentTime / e.target.duration) * 100);
        videoLibraryData[value[0]].progress=((e.target.currentTime / e.target.duration) * 100)  //set the video progress and we use this in the video card 
        videoLibraryData[value[0]].VideoCurrentTime=e.target.currentTime; //set the video current time
      };

    // when user click on the download we create a link and its source is the video and we download the video
    const downloadVideo = () => {
        const link = document.createElement('a');  //here we create a link tag
        link.href =videoLibraryData[value[0]].videoSrc ;  //assign video source to the link
        link.download = 'myVideo.mp4';
        link.click(); //make the video download
      };
  
    return (
        <div id='selectedVideoToPlay'>
            {/* video tag to provide video via its source  and store its reference in videoRef*/}
            <div class="currentRunningVideo_videoContainer">
                <video id='currentRunningVideo_video'  ref={videoRef} controls  muted="muted" loop onProgress={handleProgress} >
                    <source src= {videoLibraryData[value[0]].videoSrc} type="video/mp4"  />
                </video>
            </div>
            
            {/* video title and its description */}
            <div class="currentRunningVideo_video-desc">
                <div className='currentRunningVideo_desc-align'>
                    <div className='currentRunningVideo_heading'>Dinacharya |</div>
                    <div className='currentRunningVideo_title'>{videoLibraryData[value[0]].title} |</div>
                    <div className='currentRunningVideo_desc'>{videoLibraryData[value[0]].desc} | {isNaN(videoRef.current?.duration) ? (<p></p>) : (<div>{Math.floor((videoRef.current?.duration)/60)} mins {Math.floor((videoRef.current?.duration)%60)} seconds</div>)} </div>
                    <div className='currentRunningVideo_duration'></div>
                </div>
            </div>

            {/* button to toggle the videp status */}
            <div className='currentRunningVideo_play'>
                <button id='currentRunningVideo_status-button' onClick={()=>{setplayVideo(!playVideo)}}>{!playVideo?<span className='currentRunningVideo_video-status' onClick={handlePlay}> <PlayArrowIcon/>Play</span>:<span className='currentRunningVideo_video-status' onClick={handlePause}> <PauseIcon/>Pause</span>}</button> 
            </div>
            
            {/* just a divider */}
            <div className='currentRunningVideo_divider'></div>

            {/* some static options about the video */}
            <div className='currentRunningVideo_options'>
                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={notes} alt='notes icon'/>
                    <div className='currentRunningVideo_optionName'>Notes</div>
                </div>
                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={favorite} alt='favorite icpn'/>
                    <div className='currentRunningVideo_optionName'>Like</div>
                </div>

                <div className='currentRunningVideo_option' onClick={downloadVideo}>
                    <img className='currentRunningVideo_optionIcon' src={download} alt='download icon'/>
                    <div className='currentRunningVideo_optionName'>Download</div>
                </div>
                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={share} alt='share icon'/>
                    <div className='currentRunningVideo_optionName'>Share</div>
                </div>
            </div>   
        </div>
    )
}

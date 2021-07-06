import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, handleVideoSelect}) => {

  const renderedVideos =  videos.map((video, id) =>  <VideoItem key = {id} handleVideoSelect={handleVideoSelect} video ={video}/>) 

  return <div> {renderedVideos} </div>
}




export default VideoList;
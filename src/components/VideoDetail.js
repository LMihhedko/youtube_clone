import React from 'react';
import '../css/VideoDetail.css'

const VideoDetail = ({video}) => {

  if (!video) return <div></div>

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
  return (
    <div className = "description_container">
        <iframe height = '300px' width = '500px' src ={videoSrc}/>
      <div className = "margin">
        <h1 className ="title"> {video.snippet.title}</h1> 
        <h3 className="description"> {video.snippet.description}</h3> 
      </div>
    </div>


  )




} 

export default VideoDetail;
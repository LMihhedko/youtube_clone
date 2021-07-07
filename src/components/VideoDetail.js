import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  pad: {
    padding:'15px',
  },
});

const VideoDetail = ({video}) => {
  const classes = useStyles();

  if (!video) return <div></div>

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
  return (
    <div className={classes.pad}>
      <iframe height = '500px' width = '100%' src ={videoSrc}/>
      <h1> {video.snippet.title}</h1> 
      <h3> {video.snippet.description}</h3> 
    </div>


  )




} 

export default VideoDetail;
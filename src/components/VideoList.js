import React from 'react';
import VideoItem from './VideoItem';
import "../css/VideoList.css";

const VideoList = ({videos, listTitle, handleVideoSelect, addFavorite, deleteFavorite, isFavorite, componentName,
  favoritesList, 
  setFavoritesList }) => {

  const renderedVideos = videos.map((video, id) =>  <VideoItem key = {id} 
  handleVideoSelect={handleVideoSelect} 
  video ={video} addFavorite={addFavorite} 
  deleteFavorite = {deleteFavorite} isFavorite={isFavorite}
  favoritesList={favoritesList}
  setFavoritesList={setFavoritesList}
  
  />) 

  return (
  <div >
    <h3 className = 'videoListTitle'> {listTitle} </h3>
    <div className = {(componentName === 'Home') ? 'favoritesList' : "list"}> {renderedVideos} </div>
  </div>
  )
}




export default VideoList;
import React from 'react';

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)}>
            <img src = {video.snippet.thumbnails.medium.url}/>
        </div>
    )
}




export default VideoItem;
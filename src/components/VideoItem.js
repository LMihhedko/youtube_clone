import React, {useState} from 'react';
import "../css/VideoItem.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from "@material-ui/core/IconButton";



const VideoItem = ({video, handleVideoSelect, addFavorite, deleteFavorite, isFavorite, favoritesList,
    setFavoritesList}) => {
    const isHearted = favoritesList?.includes(video.etag)

    const handleIconClick = () => {
        if (isHearted) {
            setFavoritesList(favoritesList?.filter(it => it !== video.etag))
        } else {
            setFavoritesList(favoritesList?.concat(video.etag))
        }
        addFavorite(video)
   }

    return (
        <div className = "card" onClick={() => typeof handleVideoSelect === "function" && handleVideoSelect(video)} >
            { video && <img  className = "thumbnail" src = {video.snippet?.thumbnails.medium.url}/>}
            <h4 className = "title"> {video.snippet?.title}</h4>
            {
            <IconButton className = 'heartIcon' onClick = {handleIconClick}>
                {(isFavorite) ? 
                    (<FavoriteIcon className = "heartColor"/>)
                    :
                    ((isHearted) ?
                        (<FavoriteIcon className="heartColor" />)
                    :
                        (<FavoriteBorderIcon />)
                    )
                }
                
            </IconButton>}
                  
        </div>
        
    )
}


export default VideoItem;
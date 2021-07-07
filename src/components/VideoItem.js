import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
    thumbnail: {
        display:'flex',
        flexDirection: 'row',
        marginBottom: '10px',
    },

    text: {
        marginLeft:'20px',
    },

    point: {
        cursor: 'pointer',
    }
  });

const VideoItem = ({video, handleVideoSelect}) => {
    const classes = useStyles();
    return (
        <Card className={classes.thumbnail} onClick={() => handleVideoSelect(video)} >
            <img className={classes.point} width = '50%' src = {video.snippet.thumbnails.medium.url}/>
            <h4 className={classes.text}>{video.snippet.title}</h4>
        </Card>
    )
}


export default VideoItem;
import React from 'react';
import youtube from "./api/youtube";
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

  class App extends React.Component {
    state =  {
      videos: [ ],
      selectedVideo: null
    }
  
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("search", {
      params: {
        q: termFromSearchBar,
      }

    })

    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }
  
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }


  render() {
    return (
      <div>
        <SearchBar onFormSubmit = {this.handleSubmit} ></SearchBar>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <VideoDetail video = {this.state.selectedVideo} ></VideoDetail>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <VideoList videos = {this.state.videos} handleVideoSelect = {this.handleVideoSelect}/>
            </Paper>
          </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;

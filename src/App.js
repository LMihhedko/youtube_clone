import { ThreeSixtySharp } from '@material-ui/icons';
import React from 'react';
import youtube from "./api/youtube";
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

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

    this.setState({videos: response.data.items, selectedVideo:response.data.items[0]})
  }
  
  handleVideoSelect = (video) => {
    this.state({selectedVideo: video})
  }


  render() {
    return (
      <div>
        <SearchBar onFormSubmit = {this.handleSubmit} ></SearchBar>
        <VideoDetail video = {this.state.selectedVideo} handleVideoSelect = {this.handleVideoSelect}></VideoDetail>
      </div>
    );
  }
}

export default App;

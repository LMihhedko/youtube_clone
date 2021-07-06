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
  
  // handleVideoSelect


  render() {
    return (
      <div>
      <VideoDetail video = {this.state.selectedVideo}></VideoDetail>
      <button onClick={() => this.handleSubmit('react')}>Cargar videos en consola</button>
      </div>
    );
  }
}

export default App;

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

    console.log(response)
  }
  
  // handleVideoSelect


  render() {
    return (
    <button onClick={() => this.handleSubmit('react')}>Cargar videos en consola</button>
    );
  }
}

export default App;

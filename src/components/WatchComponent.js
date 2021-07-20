import React from 'react';

//components
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//CSS
import '../css/HomeComponent.css';

class WatchComponent extends React.Component {

  componentDidMount() {
    if (this.props.selectedVideo && typeof this.props.getRelated === "function") {
       this.props.getRelated(this.props.selectedVideo.id.videoId)
    }
  }
 

  render() {
    return (
      <div>
        <div className="container">
        <SearchBar search={this.props.search} componentName='Watch' updateSearchTerm={this.props.updateSearchTerm} ></SearchBar>
          <div className="videos_container">

            {this.props.relatedVideos && <VideoList 
            videos = {this.props.relatedVideos} 
            handleVideoSelect = {this.props.handleVideoSelect} 
            addFavorite={this.props.addFavorite}  
            deleteFavorite = {this.props.deleteFavorite} 
            favoritesList= {this.props.favoritesList} 
            setFavoritesList = {this.props.setFavoritesList}
            listTitle = "Related videos"
            />}

            <VideoDetail video = {this.props.selectedVideo} ></VideoDetail>

            {this.props.videos && <VideoList 
            videos = {this.props.videos} 
            handleVideoSelect = {this.props.handleVideoSelect} 
            addFavorite={this.props.addFavorite}  
            deleteFavorite = {this.props.deleteFavorite} 
            listTitle = "Search results"
            favoritesList= {this.props.favoritesList} 
            setFavoritesList = {this.props.setFavoritesList}
            />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default WatchComponent


    
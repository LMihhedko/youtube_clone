import React from 'react';

//components
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import HistoryComponent from './HistoryComponent';

//CSS
import '../css/HomeComponent.css';

class HomeComponent extends React.Component {

  componentDidMount() {

    if (!this.props.recommendedVideos && typeof this.props.recommended === "function") {
       this.props.recommended()

    }
  }

  render() {
    return (
      <div>
        <div className="container">
        <SearchBar onFormSubmit = {this.handleSubmit} 
        search={this.props.search} 
        componentName='Home'></SearchBar>
          <div className="videos_container">
            <VideoDetail video = {this.props.selectedVideo} ></VideoDetail>

            {this.props.showHistorySearch? 
            this.props.videos && <VideoList 
            videos = {this.props.videos} 
            handleVideoSelect = {this.props.handleVideoSelect} 
            addFavorite={this.props.addFavorite}  
            deleteFavorite = {this.props.deleteFavorite} 
            listTitle = "Search results"
            favoritesList= {this.props.favoritesList} 
            setFavoritesList = {this.props.setFavoritesList}
            />
            
            
            :  this.props.recommendedVideos && 
            <VideoList 
            videos = {this.props.recommendedVideos} 
            handleVideoSelect = {this.props.handleVideoSelect} 
            addFavorite={this.props.addFavorite} 
            deleteFavorite = {this.props.deleteFavorite}
            favorites = {this.props.favorites}
            isFavorite={false}
            listTitle = "Recommended videos" 
            favoritesList= {this.props.favoritesList} 
            setFavoritesList = {this.props.setFavoritesList}
            />}
          <div className = "below">
            <div className = "favoriteContainer">
              {this.props.favorites && 
              <VideoList 
              handleVideoSelect = {this.props.handleVideoSelect} 
              addFavorite={this.props.addFavorite}
              deleteFavorite = {this.props.deleteFavorite} 
              videos={this.props.favorites} 
              listTitle = "Favorite videos" 
              isFavorite = {true}
              favoritesList= {this.props.favoritesList}
              favorites = {this.props.favorites}
              setFavoritesList = {this.props.setFavoritesList}
              componentName='Home'/>}
            </div>

             <HistoryComponent historySearch = {this.props.historySearch}
            search={this.props.search} 
            setShow={this.props.setShow} 
            setHistorySearch = {this.props.setHistorySearch}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent
    
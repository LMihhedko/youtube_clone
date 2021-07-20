import React from 'react';

//components
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
//CSS
import '../css/HomeComponent.css';

class FavoriteComponent extends React.Component {


  render() {
    return (
      <div>
        <div className="container">

            {this.props.favorites && 
            <VideoList 
            addFavorite={this.props.addFavorite}
            videos={this.props.favorites} 
            listTitle = "Favorite videos" 
            isFavorite={true}
            favoritesList= {this.props.favoritesList}
            setFavoritesList={this.props.setFavoritesList}/>}
          </div>
        </div>
    );
  }
}

export default FavoriteComponent
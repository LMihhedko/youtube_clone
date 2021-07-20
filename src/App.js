import React, {useState} from 'react';
import {useEffect} from 'react';

//API YOUTUBE
import youtube from "./api/youtube";
//components
import HomeComponent from './components/HomeComponent';
import WatchComponent from './components/WatchComponent'
import SideBar from './components/SideBar';
import FavoriteComponent from './components/FavoriteComponent';
import HistoryComponent from './components/HistoryComponent';

//CSS
import "./css/App.css";
//others
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const [videos, setVideos] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [historySearch, setHistorySearch] = useState([]);
  const [favoritesList, setFavoritesList] = useState([])
  const [showHistorySearch, setShowHistorySearch] = useState(false)

  useEffect(() =>{
    const data = localStorage.getItem('historySearch')

    if (data) {
      setHistorySearch(JSON.parse(data))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('historySearch', JSON.stringify(historySearch))
  })

  const search = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        q: searchTerm, 
      }
    })
    
    const theData =
      {
          search: searchTerm,
          thumbnails: response.data.items[0].snippet?.thumbnails.default.url,
      }

    const newHistorySearch = [...historySearch, theData]
    setHistorySearch(newHistorySearch)
    
    localStorage.setItem('historySearch', JSON.stringify(historySearch));

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const recommended = async () => {
    const response = await youtube.get("videos", {
      params: {
        chart: 'mostPopular',
        regionCode: 'es',
      }
    })
      setRecommendedVideos(response.data.items)

  }

  const getRelated = async (relatedToVideoId) => {
    const response = await youtube.get("search", {
      params: {
        type: 'video',
        relatedToVideoId,
      }

    })

    setRelatedVideos(response.data.items)
  }

  const addFavorite = (video) => {

    if (favorites.some(x => x.id === video.id)) {
      const newFavoriteList = favorites.filter((favorite) => favorite.id !== video.id); 
      setFavorites(newFavoriteList)

    } else {
      const newFavoriteList = [...favorites, video]
      setFavorites(newFavoriteList)

    }

    }

  const deleteFavorite = (video) => {
    const newFavoriteList = favorites.filter((favorite) => favorite.id !== video.id); 
    setFavorites(newFavoriteList)

  };  


const updateSearchTerm = (updatedSearchTerm) => {
  setSearchTerm(updatedSearchTerm)
}

const handleVideoSelect = (videos) => {
  setSelectedVideo(videos)
}

const setShow = () => {
  setShowHistorySearch(true)
}


  return (
    <div className='main'>
    <Router>
      <SideBar />
       <Switch>
         <Route path ='/' exact render = {(props) =>(<HomeComponent {...props}
          videos={videos} 
          selectedVideo={selectedVideo} 
          search={search} 
          recommended={recommended}
          recommendedVideos={recommendedVideos} 
          updateSearchTerm={updateSearchTerm} 
          addFavorite={addFavorite} 
          favorites={favorites} 
          deleteFavorite = {deleteFavorite}
          historySearch = {historySearch}
          search={search} 
          favoritesList= {favoritesList} 
          setFavoritesList = {setFavoritesList}
          showHistorySearch = {showHistorySearch}
          setShow = {setShow}
          />)} />
         <Route path ='/watch' render = {(props) =>(<WatchComponent {...props}
          videos={videos} 
          selectedVideo={selectedVideo} 
          search={search} 
          getRelated={getRelated}
          relatedVideos={relatedVideos} 
          updateSearchTerm={updateSearchTerm} 
          handleVideoSelect={handleVideoSelect} 
          addFavorite={addFavorite} favorites={favorites} 
          deleteFavorite = {deleteFavorite}
          favoritesList = {favoritesList}
          setFavoritesList = {setFavoritesList}
          />)} />
        
          
         <Route path ='/history' exact render = {(props) =>(<HistoryComponent {...props}
          historySearch = {historySearch}
          search={search} 
          favoritesList = {favoritesList}
          setFavoritesList = {setFavoritesList}
          showHistorySearch = {showHistorySearch}
          setShow = {setShow}
          />)} />

          
          <Route path ='/favorites' exact render = {(props) =>(<FavoriteComponent {...props}
            search={search}  
            addFavorite={addFavorite} 
            favorites={favorites} 
            deleteFavorite = {deleteFavorite}
            favoritesList = {favoritesList}
            setFavoritesList={setFavoritesList}
            />)} />
       </Switch>
     </Router>
    </div>
  )
}

export default App;

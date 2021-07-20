import React from 'react';
import "../css/HistoryComponent.css";
import Moment from 'react-moment';


class HistoryComponent extends React.Component {

  
  handleLoad = (search) => {
    this.props.setShow()
    this.props.search(search)
  }


  render() {
    
    const storageArray = this.props.historySearch
  
    // const storageArray = JSON.parse(localStorage.getItem('historySearch'));
    // console.log(storageArray)
    
    return (
      <div>
        <h3 className = "titleHistory">Last searches</h3>
        <div className='historyContainer'>
          <div className = 'width'>
            {storageArray && storageArray.map((search) => 
            <li className = 'historyList'>
            <img className = 'circular' src ={search.thumbnails}/>
             {search.search} 
            <h6><Moment fromNow></Moment></h6>
            <button onClick={() => this.handleLoad(search.search)} className='loadButton'>Cargar videos</button>
            </li>)}
          </div>
      </div>
      </div>
    );
  }
}

export default HistoryComponent
import React from 'react';
import ReactIcon from "../assets/img/react-icon.svg";
import Avatar from "../assets/img/avatar.jpg"
import '../css/SearchBar.css';
import {TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Redirect} from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    color: "white"
  }
};

class SearchBar extends React.Component {
  state = {
    termFromSearchBar:'',
    redirectToWatch:'',
    searchValue:'',
    componentName: this.props.componentName,
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    console.log(this.state.componentName)
    this.props.search(this.state.searchValue)

    if (this.state.componentName === 'Home'){
      this.setState({redirectToWatch: true})
    }
    
    e.preventDefault()
  }

  render() {
    const { classes } = this.props;

    const redirectToWatch = this.state.redirectToWatch;
    if (redirectToWatch) {
        return <Redirect to="/watch" />
    }

    return (
      <div className="search_container">
          <img src={ReactIcon} className="size"></img>
          <form onSubmit={this.handleSubmit}>
            <SearchIcon className="search_icon"/>
            <TextField value={this.state.searchValue} 
            type="search" 
            placeholder="Search..." 
            className="search_input" 
            InputProps={{
              className: classes.input
            }}
            onChange={this.handleChange}></TextField>
          </form>
          <img src={Avatar} className="size"></img>
      </div>
     );
   }  
  } 

export default withStyles(styles)(SearchBar);
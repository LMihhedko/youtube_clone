import React from 'react';
import {TextField} from '@material-ui/core';

class SearchBar extends React.Component {
  state = {
    termFromSearchBar:'',
  }

  handleChange = (e) => {
    this.setState({termFromSearchBar: e.target.value})
  }

  handleSubmit = (e) => {
    const {termFromSearchBar} = this.state
    const {onFormSubmit} = this.props

    onFormSubmit(termFromSearchBar)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField id="standard-search" label="Search..." type="search"  onChange={this.handleChange}></TextField>
      </form>
     );
   }  
  } 

export default SearchBar;
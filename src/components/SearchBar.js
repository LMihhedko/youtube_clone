import React from 'react';
import {TextField} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const useStyles =  theme => ({
  searchBackground: {
     padding: '20px',
     marginBottom:'40px',
     backgroundColor: 'lightblue',
  },

});


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
    const { classes } = this.props;
    
    return (
      <Paper className={classes.searchBackground} elevation={3}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth = {true} id="standard-search" label="Video Search" type="search"  onChange={this.handleChange}></TextField>
        </form>
      </Paper>
     );
   }  
  } 

export default withStyles(useStyles)(SearchBar);
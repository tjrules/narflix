
import React, {Component} from 'react';
import axios, from 'axios';

class FavoriteList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null,
    }
  }
  componentDidMount() {
    axios.get('/narflixdb')
      .then(res => {
        this.setState({
          apiDataLoaded:true,
          apiData: res.data.data,
        })
      })
  }

  renderFavoriteList() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(favorites => {
        return(
          //add table data
        )
      })
    }
  }
render() {

  return(
    <div>{this.renderFavoriteList}</div>
    )
  }

}

export default FavoriteLIst;

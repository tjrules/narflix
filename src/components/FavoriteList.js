
import React, {Component} from 'react';
import axios from 'axios';

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
        console.log('this is favorites:')
      })
    }
  }
render() {
  return(
    <div className="FavoriteList">
      <h1>My Favorites List will be here </h1>
      <div>{this.renderFavoriteList}</div>
    </div>
    )
  }

}

export default FavoriteList;

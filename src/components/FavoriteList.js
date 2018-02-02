
import React, { Component } from 'react';
import axios from 'axios';
import UserFavorites from './UserFavorites';

class FavoriteList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null,
    }
    this.renderFavoriteList = this.renderFavoriteList.bind(this);
  }
  componentDidMount() {

    axios.get('/favorites')
      .then(res => {
        this.setState({
          apiDataLoaded:true,
          apiData: res.data.movies,
        })
      }).catch(err => {
        console.log(err)
      })
  }

  renderFavoriteList() {

    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(movies => {
        return(

          <UserFavorites key={movies.id} movies={movies} />
      );
    });
  } else return <p>Loading . . . </p>
  } 

render() {
  return(
    <div className="FavoriteList">
      <button>Add Movie</button>
      <h1>My Favorites List will be here </h1>
      <div>{this.renderFavoriteList()}</div>
    </div>
    )
  }

}

export default FavoriteList;

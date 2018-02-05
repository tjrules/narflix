
import React, { Component } from 'react';
import axios from 'axios';
import UserFavorites from './UserFavorites';
import { Link } from 'react-router-dom';
import Header from './Header';
import Search from './Search';

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
        console.log(movies)
        return(
        <UserFavorites key={movies.id} movies={movies} />



      );
    });
  } else return <p>Your list is empty</p>

  }


render() {
  return(
    <div>
      <Header />
      <Search />
      <div className="FavoriteList">
        <div id="addFavorite"><Link to='/add'>Add</Link></div>
        <div id="favoriteHeader">My Watch List</div>
        <div id="favoriteListItem">{this.renderFavoriteList()}</div>
      </div>

    </div>
    )
  }

}

export default FavoriteList;

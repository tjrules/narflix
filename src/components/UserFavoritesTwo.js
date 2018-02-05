import React from 'react';
import {Link} from 'react-router-dom';
import deleteMovie from './deleteMovie'

class UserFavoritesTwo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="user-fav">
        <form>
          <img src={`http://image.tmdb.org/t/p/w342${props.movies.poster_path}`} alt="{props.movies.title}" />
          <h2>{props.movies.title}</h2>
          <p>Overview: {props.movies.overview}</p>
          <Link to={`/${props.movies.id}/`}>See more</Link>
          <Link to={`/movies/${props.movies.id}/edit`}>Edit this Movie</Link>
        </form>
      </div>
    )
  }
}

export default UserFavoritesTwo;

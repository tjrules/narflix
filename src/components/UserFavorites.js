import React from 'react';
import {Link} from 'react-router-dom';
import deleteMovie from './deleteMovie';

const UserFavorites = (props) => {

  return (
    <div className="user-fav">

      <form action="">
        <img src={`http://image.tmdb.org/t/p/w342${props.movies.poster_path}`} alt="{props.movies.title}" />
        <h2>{props.movies.title}</h2>
        <p>Overview: {props.movies.overview}</p>

        <Link to={`/favorites/${props.movies.id}`}>See more</Link>
        <Link to={`/edit/${props.movies.id}`} moves={props.movies}>Edit</Link>
      </form>
    </div>
  )
}

export default UserFavorites;

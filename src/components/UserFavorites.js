import React from 'react';
import {Link} from 'react-router-dom';

const UserFavorites = (props) => {

  return (
    <div className="user-fav">
      <div>{props.movies.title}</div>
      <img src={`http://image.tmdb.org/t/p/w342${props.movies.poster_path}`} alt={props.movies.title} />
      <br />
      <Link to={`/favorites/${props.movies.id}`}>See more</Link>
    </div>
  )
}

export default UserFavorites;

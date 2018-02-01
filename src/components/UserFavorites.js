import React from 'react';
import {Link} from 'react-router-dom';

const UserFavorites = (props) => {
  return (
    <div className="user-fav">
      <img src={props.favorites.poster_path} alt="{props.favorites.title}" />
      <h2>{props.favorites.title}</h2>
      <p>Overview: {props.favorites.overview}</p>
      <Link to={`/favorites/${props.favorites.id}`}>See more</Link>
    </div>
  )
}

export default UserFavorites;

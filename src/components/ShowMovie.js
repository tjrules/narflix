// show movie

import React, {Component} from 'react';
import ShowMovieList from './ShowMovieList';

class ShowMovie extends Component {

  renderGenres() {
    return this.props.movie.genres.map((genre, index) => {
      return (
        <div key={index}>
          {genre.name}
        </div>)
    })
  }

  render() {
    return (
      <div className="ShowMovie">
        <div id="title">{this.props.movie.title}</div>
        <div id="tagline">{this.props.movie.tagline}...</div>
        <img src={`http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}/>
        <div id="overview">{this.props.movie.overview}</div>
        <div id="genre">Genres:{this.renderGenres()}</div>
        <div id="imdbid">IMDB ID: {this.props.movie.imdb_id}</div>
        <div id="runtime">Runtime: {this.props.movie.runtime} minutes</div>
      </div>)
  }
}

export default ShowMovie;

// show movie

import React, {Component} from 'react';

class ShowMovie extends Component {

  renderGenres() {
    return this.props.movie.genres.map(genre => {
      return (
        <div>
          {genre.name}
        </div>)
    })
  }

  render() {
    return (
      <div className="ShowMovie" key={this.props.movie.id}>
        <div>{this.props.movie.title}</div>
        <div>Tagline: {this.props.movie.tagline}</div>
        <img src={`http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}/>
        <div>Overview: {this.props.movie.overview}</div>
        <div>Genre: {this.renderGenres()}</div>
        <div>IMDB ID: {this.props.movie.imdb_id}</div>
        <div>Runtime: {this.props.movie.runtime} minutes</div>
      </div>)
  }
}

export default ShowMovie;

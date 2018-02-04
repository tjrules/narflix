import React, {Component} from 'react';
import ShowMovieList from './ShowMovieList';
import axios from 'axios';

class ShowMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      tagline: this.props.tagline,
      poster_path: this.props.poster_path,
      overview: this.props.overview,
      genre: this.props.genre,
      imdb_id: this.props.imdb_id,
      runtime: this.props.runtime
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderGenres() {
    return this.props.movie.genres.map((genre, index) => {
      return (<div key={index}>
        {genre.name}
      </div>)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/favorites',
      data: {
        title: this.props.movie.title,
        tagline: this.props.movie.tagline,
        poster_path: this.props.movie.poster_path,
        overview: this.props.movie.overview,
        genre: this.props.movie.genre,
        imdb_id: this.props.movie.imdb_id,
        runtime: this.props.movie.runtime
      }
    }).then(() => {
      this.setState({fireRedirect: true})
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="ShowMovie">
        <div id="title">{this.props.movie.title}</div>
        <div id="tagline"><span>{this.props.movie.tagline}</span></div>
        <img id="img" src={`http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}/>
        <div id="overview">{this.props.movie.overview}</div>
        <div id="genre"><span>Genre(s):</span>{this.renderGenres()}</div>
        <div id="imdbid"><span>IMDB ID: </span><br />{this.props.movie.imdb_id}</div>
        <div id="runtime"><span>Runtime: </span><br />{this.props.movie.runtime} minutes</div>

        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Add Movie"/>
        </form>
      </div>)
  }
}

export default ShowMovie;

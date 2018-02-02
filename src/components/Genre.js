//genre

import React, {Component} from 'react';
import ShowMovieList from './ShowMovieList';

class Genre extends Component {
  constructor() {
    super();
    this.state = {
      genresList: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US")
    .then(data => data.json())
    .then(data => {
      let divId = 1
      const genres = data.genres.map((genre, index) => {
        return (
          <div
            key={index}
            className="genresListItem"
            id={`genre${divId++}`}
            onClick={() => this.handleClick(genre.id)}>
              {genre.name}
          </div>)
      });
      this.setState({genresList: genres});
    });
  }

  handleClick(id) {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a14b5a9649dfd4d14567efe27afe8ab4&with_genres=${id}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        genresList: false,
        movieList: data.results,
        genreId: id
      })
    })
    .catch( err => {
      console.log('handleclickerr', err)
    })
  }

  render() {
    return (
      <div className="Genres">
        {this.state.genresList ? this.state.genresList : ""}
        {this.state.movieList && this.state.genreId ? <ShowMovieList movieList={this.state.movieList} genreId={this.state.genreId} /> : ""}
    </div>);
  }
}

export default Genre;

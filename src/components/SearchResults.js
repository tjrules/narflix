//thing

import React, {Component} from 'react';
import Search from './Search';
import ShowMovie from './ShowMovie';


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: this.props.results,
      searchQuery: this.props.searchQuery,
      totalPages: this.props.totalPages,
      page: 1
    }
  }

  renderMovies() {
    let divId = 1
    return this.state.movieList.map((movie, index) => {
      return (
        <div
          key={index}
          className="SearchResultItem"
          id={`movie${divId++}`}
          onClick={() => this.handleClick(movie.id)}>
          <img src={`http://image.tmdb.org/t/p/w342${movie.backdrop_path}`}/>
          <div>{movie.title}</div>
        </div>)
    })
  }

  renderMoviesNext() {
    let divId = 1
    return this.state.movieListNext.map((movie, index) => {
      return (
        <div
          key={index}
          className="SearchResultItem"
          id={`movie${divId++}`}
          onClick={() => this.handleClick(movie.id)}>
          <img src={`http://image.tmdb.org/t/p/w342${movie.backdrop_path}`}/>
          <div>{movie.title}</div>
        </div>)
    })
  }


  handleClick(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        movieList: false,
        movieListNext: false,
        movie: data
      })
    })
  }

  nextPage() {
    if (this.state.page < this.state.totalPages) {
      let pageNumber = this.state.page + 1;
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US&query=${this.state.searchQuery}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          nextPage: true,
          movieListNext: data.results,
          movieList: false,
          page: pageNumber
        })
      })
    }
  }

  prevPage() {
    if (this.state.page > 1) {
      let pageNumber = this.state.page - 1;
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US&query=${this.state.searchQuery}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          nextPage: true,
          movieListNext: data.results,
          page: pageNumber
        })
      })
    }
  }

  render() {
    return (
      <div className="SearchResults">
        {this.state.movieList || this.state.movieListNext ? <div id="pageNumber">Page: {this.state.page}</div> : ""}
        {this.state.movieList ? this.renderMovies() : ""}
        {this.state.movieListNext ? this.renderMoviesNext() : ""}
        {this.state.movieList || this.state.movieListNext ? <input id="next" className="button" type="button" onClick={() => this.nextPage()} value="⇨" /> : ""}
        {this.state.movieList || this.state.movieListNext ? <input id="previous" className="button" type="button" onClick={() => this.prevPage()} value="⇦" /> : ""}
        {this.state.movie ? <ShowMovie movie={this.state.movie}/> : ""}
      </div>);
  }
}

export default SearchResults;

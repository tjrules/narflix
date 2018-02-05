import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class FavoriteMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      apiDataLoaded: false,
      fireRedirect: false,
    }
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    axios.get(`/favorites/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded:true,
          movie: res.data.data
        })
      }).catch(err => console.log(err))
  }

  deleteMovie() {
    axios.delete(`/favorites/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          fireRedirect: true,
        })
      }).catch(err => console.log(err))
  }

  renderMovieOrLoading() {
    if(this.state.apiDataLoaded) {
      return (
        <div className='inner'>
          <div className='img'>
            <img src={this.state.movie.poster_path} alt={this.state.Movie.title} />
          </div>
          <div className='info'>
            <h1>{this.state.Movie.tagline}</h1>
            <p>{this.state.Movie.overview}</p>
            <div className='links'>
              <Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
              <span className='delete' onClick={this.deleteMovie}>Delete</span>
               {this.state.fireRedirect
                ? <Redirect push to="/favorites" /> : ''}
            </div>
          </div>
        </div>
      )
    }
    else  return <p className='loading'>Loading...</p>
  }
   render() {
    return (
      <div className='Movie-single'>
        {this.renderMovieOrLoading()}
      </div>
    )
   }
}


export default FavoriteMovie;

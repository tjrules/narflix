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
        console.log('got this back',res)
        this.setState({
          apiDataLoaded:true,
          movie: res.data.movies
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
            <img src={this.state.movie.poster_path} alt={this.state.movie.title} />
          </div>
          <div className='info'>
            <h1>{this.state.movie.tagline}</h1>
            <p>{this.state.movie.overview}</p>
            <div className='links'>
              <Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
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
    console.log('rendered', this.state)
    return (
      <div className='Movie-single'>
        {this.renderMovieOrLoading()}
      </div>
    )
   }
}


export default FavoriteMovie;

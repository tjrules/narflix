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
     runtime: this.props.runtime,
   }

   this.handleSubmit = this.handleSubmit.bind(this);
 }

 renderGenres() {
   return this.props.movie.genres.map((genre, index) => {
     return (
       <div key={index}>
         {genre.name}
       </div>)
   })
 }

 handleSubmit(event) {
   axios({
       method: 'POST',
       url: '/favorites',
       data: {
         title: this.state.title,
         tagline: this.state.tagline,
         poster_path: this.state.poster_path,
         overview: this.state.overview,
         genre: this.state.genre,
         imdb_id: this.state.imdb_id,
         runtime: this.state.runtime,
       }
   }).then(() => {
     this.setState({
       fireRedirect: true
     })
   }).catch(err => console.log(err))
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

       <form onSubmit={() => this.handleSubmit}>
         <div>{this.props.movie.title}</div>
         <div>Tagline: {this.props.movie.tagline}</div>
         <img src={`http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}/>
         <div>Overview: {this.props.movie.overview}</div>
         <div>Genre: {this.renderGenres()}</div>
         <div>IMDB ID: {this.props.movie.imdb_id}</div>
         <div>Runtime: {this.props.movie.runtime} minutes</div>
         <input type="submit" value="Add Movie!" />
         <input type="hidden" name="title" value="this.props.movie.title" />
         <input type="hidden" name="tagline" value="this.props.movie.tagline" />
         <input type="hidden" name="poster_path" value="this.props.movie.poster_path" />
         <input type="hidden" name="overview" value="this.props.movie.overview" />
         <input type="hidden" name="genre" value="this.renderGenres()" />
         <input type="hidden" name="imdb_id" value="this.props.movie.imdb_id" />
         <input type="hidden" name="runtime" value="this.props.movie.runtime" />
       </form>

     </div>)
 }
}

export default ShowMovie;

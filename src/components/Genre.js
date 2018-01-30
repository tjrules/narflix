//genre

import React, {Component} from 'react';

class Genre extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=a14b5a9649dfd4d14567efe27afe8ab4&language=en-US")
    .then(data => data.json())
    .then(data => {
      console.log(data.genres);
      const genre = data.genres.map(genre => {
        return (<div>
          {genre.name}
        </div>)
      });
      this.setState({
        genreDropdown: genre
      });
    });
  }

  render() {
    return (
      <div className="Genre">
        {this.state.genreDropdown ? this.state.genreDropdown : ""}
      </div>
    );
  }
}

export default Genre;

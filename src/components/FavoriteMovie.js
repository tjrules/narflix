import React from 'react';
import UserFavorites from './UserFavorites'

class FavoriteMovie extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title: this.props.movies
    }

  }
  componentDidMount() {
    axios.get('/favorites')
      .then(res => {
        this.setState({
          apiDataLoaded:true,
          apiData: res.data.movies,
        })

      }).catch(err => {
        console.log(err)
      })
  }

  render(){
    return(
      <div>
        <p>{this.state.title}</p>
      </div>
    )
  }
}

export default FavoriteMovie;

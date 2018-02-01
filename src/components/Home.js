import React from 'react';
import Header from './Header';
import Genre from './Genre';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <h2>this is the Home Component, we will be rendering Genres here</h2>
        <Genre />
      </div>
    )
  }
}

export default Home;

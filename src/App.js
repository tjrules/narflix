import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import FavoriteAdd from './components/FavoriteAdd';
import FavoriteList from './components/FavoriteList';
import FavoriteEdit from './components/FavoriteEdit';
import Genre from './components/Genre';
import ShowMovieList from './components/ShowMovieList';
import ShowMovie from './components/ShowMovie';


class App extends Component {
  render(){
    return (
  <Router>
      <div className='App'>
      <h2>WHere is all my shit? </h2>
        <Switch>
          <Route path='/my-favorites' component={FavoriteList} />
          <Route path='/movies' component={ShowMovieList} />
          <Route path='/movies/:id' component={ShowMovie} />
          <Route path='/add' component={FavoriteAdd}/>
          <Route path='/edit/:id' component={FavoriteEdit}/>
        </Switch>
      </div>
  </Router>
      )
  }
}

export default App;

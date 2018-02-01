import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header';

class UserLoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      loggedInName: '',
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth/login', {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
    })
    .then( data => {
      console.log('thennnnnnn');
      this.setState({
        fireRedirect: true
      })
      })
    .catch(err => console.log(err))
    e.target.reset()
  }


  render() {
    console.log(this.state)
    return (
      <div className='form'>
      <Header />
      {(this.state.loggedInName) ? <h1>Welcome, {this.state.loggedInName}</h1> : <h1>Please Log In</h1>}
        <form onSubmit={this.handleSubmit}>
        <label>
          username
          <input type='text' onChange={this.handleChange} name='username' placeholder='write your username' />
        </label>
        <br />
        <label>
          password
          <input type='text' onChange={this.handleChange} name='password' placeholder='write your password' />
        </label>
        <br />
          <input type='submit' value='get em done' />
        </form>
        { this.state.fireRedirect ? <Redirect to='/' /> : '' }
      </div>
    )
  }
}

export default UserLoginPage;

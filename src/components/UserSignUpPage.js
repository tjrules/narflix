import React, { Component } from 'react';
import axios from 'axios'

class UserSignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      loggedInName: '',
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
    axios({
      method: 'POST',
      url: '/auth/register',
      data: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,

      }
    })
    .then( person => {
      console.log('got this back', person.data);
      this.setState({
        loggedInName: person.data.username
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='form'>
      <h1>Welcome Please Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <label />
          Email
          <input type='text' onChange={this.handleChange} name='email' placeholder='write your Email here' />
        <label />
          Username
          <input type='text' onChange={this.handleChange} name='username' placeholder='write your Username here' />
        <label />
          Password
          <input type='text' onChange={this.handleChange} name='password' placeholder='write your Password here' />
        <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
      )
  }
}

export default UserSignUpPage;

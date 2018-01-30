import React from 'react';

class UserLoginPage extends Component {
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
      url: '/auth/login',
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
      {(this.state.loggedInName) ? <h1>Welcome, {this.state.loggedInName}</h1> : <h1>Please Log In</h1>}
        <form onSubmit={this.handleSubmit}>
        <label />
          username
          <input type='text' onChange={this.handleChange} name='username' placeholder='write your username here' />
        <label />
          password
          <input type='text' onChange={this.handleChange} name='password' placeholder='write your password here' />
        <br />
          <input type='submit' value='get em done' />
        </form>
      </div>
      )
  }
}

export default UserLoginPage;
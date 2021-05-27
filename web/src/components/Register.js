import React from 'react';

class Register extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confpassword: ''
  };

  onClickSubmit = (e) => {
    this.props.onClickSubmit(this.state);

    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form>
          <label>First Name: </label>
          <input
            type="text"
            value={this.state.firstname}
            onChange={(e) => this.setState({ firstname: e.target.value })}
          /><br />
          <label>Last Name: </label>
          <input
            type="text"
            value={this.state.lastname}
            onChange={(e) => this.setState({ lastname: e.target.value })}
          /><br />
          <label>Username: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          /><br />
          <label>Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          /><br />
          <label>Confirm Password: </label>
          <input
            type="password"
            value={this.state.confpassword}
            onChange={(e) => this.setState({ confpassword: e.target.value })}
          /><br />
        </form>
        <div className="login-option">
          <span>Already have an account?</span>
          <span id="login-button" style={{ fontWeight: 'bold', color: 'blue' }}> Login</span>
        </div>

        <button className="register" onClick={this.onClickSubmit}>Register</button>
      </div>
    );
  }
}

export default Register;
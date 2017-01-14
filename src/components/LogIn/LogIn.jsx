import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  doLogin(e) {
    console.log('here')
    e.preventDefault();
    const bodyObj = {
      email: this.state.email,
      password: this.state.password,
    };

  updateEmailForm(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updatePasswordForm(e) {
    this.setState({
      password: e.target.value,
    });
  }


  render() {
    return (
      <div className={styles['']}>
        <div className="log-in">
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateEmailForm.bind(this)}
          />

        </div>

      </div>
    )
  }
}

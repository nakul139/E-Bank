import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    se: false,
    em: '',
  }

  userNo = event => {
    this.setState({userId: event.target.value})
  }

  pinNo = event => {
    this.setState({pin: event.target.value})
  }

  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  fail = em => {
    this.setState({
      se: true,
      em,
    })
  }

  BankLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data.jwt_token)
    } else {
      this.fail(data.error_msg)
    }
  }

  render() {
    const {userId, pin, se, em} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-container">
        <div className="central-container">
          <div className="img-icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="website-login"
            />
          </div>
          <form className="form-input" onSubmit={this.BankLogin}>
            <h1 className="heading">Welcome Back!</h1>
            <div className="input-container">
              <label className="label" htmlFor="user">
                User ID
              </label>
              <input
                id="user"
                type="text"
                placeholder="Enter User ID"
                className="input"
                value={userId}
                onChange={this.userNo}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="pin">
                PIN
              </label>
              <input
                id="pin"
                type="password"
                placeholder="Enter PIN"
                className="input"
                value={pin}
                onChange={this.pinNo}
              />
            </div>
            <button className="button" type="submit">
              Login
            </button>
            <div className="ct">
              {se === true && <p className="ep"> {em} </p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login

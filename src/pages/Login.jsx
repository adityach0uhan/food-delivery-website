import React from 'react'
import '../styles/Login.css'
const Login = () => {
  return (
    <div>

      <div className="login-container">

        <form action="">
          <div className="username-div">

          <label htmlFor="">Username</label>
          <input type="text" />
          </div>

          <div className="password-div">
          <label htmlFor=""> Password</label>
          <input type="text" />
          </div>
          <input type="submit" />

        </form>

      </div>

    </div>
  )
}

export default Login
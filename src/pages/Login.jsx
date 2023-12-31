import React, { useState } from 'react'
import '../styles/Login.css'
import { Link ,useNavigate} from 'react-router-dom'
const Login = () => {
  const [userDetails, setuserDetails] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendData = await fetch("http://localhost:5000/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password, 
        })
      })
      const resp = await backendData.json()
      console.log(resp)
      if (!resp.success) {
        alert("invalid password ")
      } else if(resp.success){
        navigate('/')
      }
    
    } catch (err) {
      console.log("something is not working" +err)
    }
  }
    
  const submitData = (e) => { 
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="login-container ">
        <form onSubmit={handelSubmit} >
          <div className="username-div">

            <label htmlFor="" >Email</label>
            <input type="text" placeholder='Email' name='email' onChange={submitData} value={userDetails.email} />
          </div>

          <div className="password-div">
            <label htmlFor=""> Password</label>
            <input type="text" placeholder='Password' name='password' onChange={submitData} value={userDetails.password} />
          </div>
          <input type="submit" value="Login" />
          <Link className='my-3' to={'/createUser'}><input type="button" value={'Create Account'}/></Link>

        </form>

      </div>

    </div>
  )
}

export default Login
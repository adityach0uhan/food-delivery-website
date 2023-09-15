import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      
      <div className='container my-5 '>

      <form className='container m-2'>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>


        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Location</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Location" />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
        </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/login">
          <button type="submit" className="btn btn-primary">login</button>
          </Link>
      </form>


      </div>
    </>
  )
}

export default SignUp
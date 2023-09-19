import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [formData, setformData] = useState({ name: "", email: "", password: "", location: "" });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendData = await fetch("http://localhost:5000/db/createUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          location:formData.location
        })
      }) 
      const resp = await backendData.json()
      console.log(resp)
      if (!resp.success) {
        alert("something is not right")
      } else {
        alert(" working")
      }
      
    } catch (err) {
      console.log(err)
    }
    
  }
  const onchange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>

      <div className='container my-5 '>

        <form className='container m-2 ' onSubmit={handelSubmit}>
          <div className="form-group">

            <label htmlFor="exampleInputEmail1">Email address</label>

            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formData.email} name="email" onChange={onchange} />

            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

          </div>


          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" name='password' onChange={onchange} value={formData.password} />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Location</label>
            <input type="text" className="form-control" placeholder="Location" name='location' onChange={onchange} value={formData.location} />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input type="text" className="form-control" placeholder="Name" name='name' onChange={onchange} value={formData.name} />
          </div>

          <button type="submit" className="btn btn-primary m-3">Submit</button>
          <Link to="/login">
            <button type="submit" className="btn btn-primary m-3">login</button>
          </Link>
        </form>


      </div>
    </>
  )
}

export default SignUp
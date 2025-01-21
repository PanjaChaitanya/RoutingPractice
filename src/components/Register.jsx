import React from 'react'

function Register() {
  return (
    <>
    <div className='mainContainer'>
        <div className='container'>
            <h2>Register</h2>
            <div className="inputs">
                <label htmlFor="userid">User ID</label>
                <input type="text" name="userid" id="userid"/>
                <label htmlFor="mailid">Email</label>
                <input type="email" name="mailid" id="mailid" />
                <label htmlFor="pswd">Create Password</label>
                <input type="password" name="pswd" id="pswd" />
                <label htmlFor="pswd1">Re-Enter Password</label>
                <input type="password" name="pswd1" id="pswd1" />
            </div>
            <button>Register</button>
        </div>
    </div>
    </>
  )
}

export default Register
import React from 'react'

function Login() {
  return (
    <>
    <div className='mainContainer'>
        <div className='container'>
            <h2>Login</h2>
            <div className="inputs">
                <label htmlFor="userid">User ID : </label>
                <input type="text" name="userid" id="userid"/>
                <label htmlFor="pswd">Password : </label>
                <input type="password" name="pswd" id="pswd" />
            </div>
            <button>
                Login
            </button>
        </div>
    </div>
    </>
  )
}

export default Login
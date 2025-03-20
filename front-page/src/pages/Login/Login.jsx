import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const [login , setLogin] = useState("Login")
  return (
    <div>
      <div className="login">
        <div className="login-page">
          <form className='log-d'>
            <div className="login-details">
              <h1>{login}<hr className='line-on'></hr></h1>
              <div className="login-her">
                {
                  (login==="Login" ?  <div className="login-in">
                    <input type='text' placeholder='E-mail'></input>
                    <input type='text' placeholder='Password' />
                    <div className="password">
                    <p>Forget Your Password ?</p>
                    <p onClick={()=>setLogin("Sign Up")}>Create Acoount</p>
                    </div>
                    <button type='submite'>{login}</button>
                  </div>  :  <div className="login-in">
                    <input type='text' placeholder='Name' />
                <input type='text' placeholder='E-mail'></input>
                <input type='text' placeholder='Password' />
                <div className="password">
                <p>Forget Your Password ?</p>
                <p onClick={()=>setLogin("Login")}>Login Here</p>
                </div>
                <button type='submite'>{login}</button>
              </div>)
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
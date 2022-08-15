import React, { useState } from 'react'
import "../css/Login.css"
import { auth } from './firebase';

export const Login = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")


  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {

    
  };

  return (
    <div className='login'>
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name (required if registering)' />
        <input type="text" placeholder='Profile picture URL (optionnal)' />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'/>
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member ?{" "}
        <span className='login_register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

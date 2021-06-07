import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice';
import {url} from './BaseUrl';
import logo from './assets/logo.png'
import './Login.css'
import { useHistory } from 'react-router';

function Login() {
  let history = useHistory();
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  const loginToApp = (e) => {
        e.preventDefault();
        axios.post(`${url}auth/login`, {
            username: name,
            password: password
          })
          .then((response) => {
          localStorage.setItem('user',JSON.stringify(response.data)) 
          console.log(response.data)
          history.push('/')     
        }, (error) => {
            console.log(error);
        });
  }
   return (
     <div className="background">

<div style={{backgroundColor:'white'}} className="login"> 
            <img src={logo} alt=""/>
            
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Usename" type="text"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
           <p>New to AutoHire? <a href='/signup' className="aa"> Join now</a></p>
        </div>
     </div>
      
    )
}
export default Login

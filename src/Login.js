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
          
          history.push('/home') 
     
        }, (error) => {
            console.log(error);
          });
    }
   return (
        <div className="login">
            <img src={logo} alt=""/>
            
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
                
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
           
        </div>
    )
}
export default Login

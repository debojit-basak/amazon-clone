import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from "../firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');
    const signIn = e =>{
        e.preventDefault();
        //some firebase stuff
        auth.signInWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        //some fancy firebase stuff
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            console.log(auth);
            if(auth) {
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
        
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange = {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="Password" value={password} onChange = {e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

                </form>

                <p>By signing in you agree to out terms and conditions</p>
                <button onClick={register} className="login__registerButton">Create Your Account</button>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import { auth, provider } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
 

const SignIn = ({ setIsAuth }) => {

    let navigate = useNavigate();

    const signInWithEmail = () =>{
        signInWithEmailAndPassword(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/home');
        });
    };

  return (
    <div className='content'>
        <header>
            <h3>Sign In</h3>
            <p>Fill in the basic info</p>
        </header>
        <form>
            <input className='field' type="email" placeholder="Email Address" />
            <input className='field' type="password" placeholder="Enter Password" />
            <p className="pass">Forgot password? <Link to="/reset">Reset</Link></p>
            <button className='field' onClick={signInWithEmail}>Sign In</button>
            <p className="pass">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
    </div>
  )
}

export default SignIn;
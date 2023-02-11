import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth"


const SignUp = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const signUpNewUser = () => {
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            //console.log(errorCode)
            // ..
        });
    };
  return (
    <div className='content'>
        <header>
            <h3>Sign Up</h3>
            <p>Welcome to iStore</p>
        </header>
        <form>
            <input className='field' type="email" value={registerEmail} placeholder="Email Address" onChange={(e) => {setRegisterEmail(e.target.value)}}/>
            <input className='field' type="password" value={registerPassword} placeholder="Enter Password" onChange={(e) => {setRegisterPassword(e.target.value)}}/>
            <button className='field' onClick={signUpNewUser}>Proceed To Sign Up</button>
            <p className="pass">Already have an account? <Link to="/">Sign In</Link></p>
        </form>
    </div>
  )
}

export default SignUp;
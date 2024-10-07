import React, { useEffect, useRef, useState } from 'react'
import '../Registration.css'
import { json, Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Registration() {
    const Navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    if (localStorage.getItem('localRegistrations') == null) {
        localStorage.setItem('localRegistrations', JSON.stringify([]));
    }
    return (
        <>
            <div className="my-container">
                <div className="div1">
                    <nav>
                        <Link to={'/'} className='link'>Login</Link>
                        <Link to={'/registration'} className='link active'>Register</Link>
                    </nav>
                    <main>
                        <header>
                            <h1>Welcome to Registration!</h1>
                            <p>Enter your email and password.</p>
                        </header>
                        <div className="register-form">
                            <div className="mb-2 email-container">
                                <label htmlFor="email" >Email</label>
                                <input type="text" id='email' placeholder='johndoe@example.com' ref={email} required />
                            </div>
                            <div className="mb-5 password-container">
                                <label htmlFor="password" >Password</label>
                                <input type="password" id='password' placeholder='********' ref={password} required />
                            </div>
                            <button className='btn btn-lg btn-primary' onClick={

                                () => {
                                    if (email.current.value === '' || password.current.value === '') {
                                        alert('A required field is empty.');
                                    } else {
                                        const arr = JSON.parse(localStorage.getItem('localRegistrations'));
                                        arr.push({ email: email.current.value, password: password.current.value });
                                        localStorage.setItem('localRegistrations', JSON.stringify(arr));
                                        Navigate('/')
                                    }
                                }

                            }>
                                Register
                            </button>
                        </div>





                    </main>
                </div>
                <div className="div2"></div>
            </div>
        </>
    )
}

// npm i bootstrap
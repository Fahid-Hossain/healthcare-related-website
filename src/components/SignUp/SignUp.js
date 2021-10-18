import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const {registerWithEmailAndPassword,error,setError}=useAuth();
    
    //useState for email and password 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    // handleRegistration form
    const handleRegistration = (e) => {
        e.preventDefault();
        if(password.length<6){
            setError("Password must be at least 6 characters Long")
            return;
        }
        if(!/(?=.*[A-Z])/.test(password)){
            setError("Password should contain at least one uppercase")
            return;
        }
        registerWithEmailAndPassword(email,password);
    }

    //handleEmailChange
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    //handlePasswordChange
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    // console.log(email,password);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">Stay connected with us & take your best service. Enjoy Your Healthy life .</h1>
                    <p className="leading-relaxed mt-4">Create your account to get a your best service.For any kind of news update of health tips stay connected with us with your account . Have a good day .</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Register to Login</h2>
                    <form onSubmit={handleRegistration} className="mt-8 space-y-2" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input onBlur={handleEmailChange}  id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                <br />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input onBlur={handlePasswordChange} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                <br />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Already have an account ?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <br />
                           
                           <p className="text-red-500">{error}</p>
                           
                            <br />
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <!--Heroicon name: solid/lock-closed--> */}
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Register & Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
// import Lottie from 'lottie-react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import loginImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const captchRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);

    useEffect( () => {
        loadCaptchaEnginge(6); // 6 characters captcha
    } ,[])



    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Login form submitted');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }

    const handleCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = captchRef.current.value;
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value) === true) {
            console.log('Captcha Matched');
            setDisabled(false);
        } else {
            console.log('Captcha Not Matched');
            setDisabled(true);
        }
    }


    return (
        <div className="p-20 py-28">
            <section className="">
                <div className='flex flex-col-reverse md:flex-row-reverse gap-10 items-center justify-center'>
                    <div className="w-full md:w-3/5 flex flex-col gap-4 justify-center text-left">
                        {/* <h1 className="text-4xl font-semibold">Welcome to Job Portal</h1> */}
                        <h2 className="text-2xl font-semibold">Login a Account</h2>
                        {/* <button onClick={ () => { googlenavigate(); } } className="btn"> <FcGoogle size={20}/> <span className="">Sing up with Google</span> </button> */}
                        <form onSubmit={handleLogin} className="w-full">
                            <fieldset className="fieldset w-full md:w-1/2">
                                <legend className="fieldset-legend">Email</legend>
                                <input type="email" name='email' className="input" placeholder="main@site.com" required />
                            </fieldset>
                            <fieldset className="fieldset w-full md:w-1/2">
                                <legend className="fieldset-legend">Password</legend>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} className='input' name='password' required placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                                    <button onClick={() => {setShowPassword(!showPassword)}} className="btn btn-xs absolute right-8 md:right-1 md:top-2" type="button">
                                        {
                                            showPassword ?  <FaEye /> : <FaEyeSlash />
                                        }
                                    </button>
                                </div>
                            </fieldset>
                            <fieldset className="fieldset w-full md:w-1/2">
                                <legend className="fieldset-legend">
                                    <LoadCanvasTemplate />
                                </legend>
                                <input ref={captchRef} type="text" className="input" placeholder="Type The Captcha" />
                                <div className="mt-1 mb-4">
                                    <button onClick={handleCaptcha} className="btn w-full btn-neutral btn-xs btn-outline">Valided</button>
                                </div>
                            </fieldset>
                            <input disabled={disabled} type="submit" value="Submit & Login" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/>
                        </form>
                        <h4 className="text-base text-left">Don't have an account? <Link to='/registration' >Register</Link></h4>
                    </div>
                    <div className="">
                        <img src={loginImg} alt="Login" className='w-full' />
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Login;
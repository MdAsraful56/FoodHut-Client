import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Providers/AuthProvider';
import loginImg from '../../assets/others/authentication2.png';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Registration = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log('Registration');

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password) 
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log('User profile updated successfully');
                        Swal.fire({
                            title: "Registration Successful",
                            icon: "success",
                            draggable: true
                        });
                        form.reset();
                        navigate('/login', {replace: true});
                        logOut()
                            .then(() => {
                                console.log('Logout Successful');
                            })
                            .catch(error => {
                                console.log(error.message);
                            })
                    })
                    .catch(error => {
                        console.log('Error updating user profile:', error.message);
                    })
                
            })

    }



    return (
        <div className="p-20 py-28">
            <Helmet>
                <title>FoodHut || Registration</title>
            </Helmet>
            <div className='flex flex-col-reverse md:flex-row gap-4 items-center justify-center'>
                <div className="w-full md:w-2/5 flex flex-col gap-4 items-center justify-center">
                    {/* <h1 className="text-4xl font-semibold">Welcome to Job Portal</h1> */}
                    <h2 className="text-2xl font-semibold">Create a Account</h2>
                    {/* <button onClick={googleSignIn} className="btn"> <FcGoogle size={20}/> <span className="">Sing up with Google</span> </button> */}
                    <form onSubmit={handleRegistration} className="md:w-3/5 w-full flex flex-col gap-4 items-center justify-center iansui-font">
                        {/* <h2 className="text-2xl font-semibold">Create a Account</h2> */}
                        <div className="flex items-center justify-center">
                            <span className="text-sm">Or Continue With</span>
                        </div>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                            <input type="input" name='name' required placeholder="Name" pattern="[A-Za-z][A-Za-z0-9\-]*" title="Only letters, numbers or dash" />
                        </label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
                            <input type="url" name='photo' required placeholder="Photo URL" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" title="Must be valid URL" />
                        </label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" name='email' placeholder="mail@site.com" required/>
                        </label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                            <input type={showPassword ? 'text' : 'password'} name='password' required placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                            <button onClick={() => {setShowPassword(!showPassword)}} className="btn btn-xs absolute right-1 top-2" type="button">
                                {
                                    showPassword ?  <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                        </label>
                        <input type="submit" value="Submit & Register" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/>
                    </form>
                    <h4 className="text-base">Already have an account? <Link to='/login' >Sign in</Link></h4>
                </div>
                <div className="">
                    <img src={loginImg} alt="Login" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Registration;
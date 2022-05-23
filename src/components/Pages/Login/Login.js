import React from 'react';
import './Login.css'
import loginPic from '../../../images/login.gif'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../Shared/firebase.init'
import { useForm } from "react-hook-form";
import {Link, useLocation, useNavigate} from 'react-router-dom'

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/"
    let signInError
    // if (loading || gLoading) {
    //     return <Loading />
    // }
    if (gUser) {
        console.log(gUser)
    }
    if (error || gError) {

        signInError = <p className='my-4 text-red-500'>{error?.message || gError?.message}</p>
        
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
       
        signInWithEmailAndPassword(data.email,data.password)
    }
    return (
        <section className='flex justify-center items-center bg-black w-full h-screen py-12'>

            <div className="login-container" >
                <div className='form-container'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Email is not valid'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className='text-red-500'>Email is required</span>}
                                {errors?.email?.type === 'pattern' && <span className='text-red-500'>Invalid Email</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="Password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password is too short'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                {errors?.password?.type === 'minLength' && <span className='text-red-500'>Password is too short</span>}


                            </label>
                        </div>
                        {
                            signInError
                        }
                        <button type='submit' className="btn btn-primary text-white-500 w-full max-w-xs">Login</button>
                        <p className='my-4'>New to Doctors Portal ? <Link className='text-secondary' to='/signUp'>Create new account</Link> </p>
                    </form> 
                </div>
                <div>
                    <img src={loginPic} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Login;
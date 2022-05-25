import React, { useState } from 'react';
import './Login.css'
import loginPic from '../../../images/login.gif'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../Shared/firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [customeError, setCustomeError] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let location = useLocation();
    const [token]  = useToken(gUser || user)
    let from = location.state?.from?.pathname || "/"
    let signInError
    if (loading) {
        return <Loading />
    }

    if (error || gError) {

        signInError = <p className='my-4 text-red-500'>Please check Email and Password</p>

    }
    if (token) {
        toast.success('Login successful', { toastId: 'login' })
        navigate(from, { replace: true });
    }
    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <section className='flex justify-center items-center bg-black w-full  py-12 '>

            <div className="login-container" >

                <div className='form-container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl text-center  my-4 text-primary">Login Here</h1>
                        <div className="form-control w-full">


                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
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
                        <div className="form-control w-full">


                            <input
                                type="Password"
                                placeholder="Your Password"
                                className="input input-bordered w-full"
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
                        <button type='submit' className="btn btn-primary  w-full">Login</button>
                        <p className='my-4'>New Here ? <Link className=' text-primary' to='/signUp '>Create new account</Link> </p>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline w-full'>Continue with Google</button>
                </div>
                <div className='lg:block md:block hidden'>
                    <img src={loginPic} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Login;
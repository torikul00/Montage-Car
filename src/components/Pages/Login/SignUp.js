import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../Shared/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginPic from '../../../images/login.gif'
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    let location = useLocation();
    const [token]  = useToken(user || gUser)

    let from = location.state?.from?.pathname || "/"

    let signInError
    if (loading || updating) {
        return <Loading />
    }
    if (error || gError || updatError) {

       
        if (error?.message.includes('email-already')) {

            signInError = <p className='my-4 text-red-500'>Email already exist</p>
        }
        else {
            signInError = <p className='my-4 text-red-500'>Something went wrong</p>
       }

    }
    if (token) {
        toast.success('Sign up successful',{toastId:'signup'})
        navigate(from, { replace: true });
    }
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

    }
    return (
        <section className='flex justify-center items-center bg-black w-full  py-12 '>

            <div className="login-container" >
                <div className='lg:block md:block hidden'>
                    <img src={loginPic} alt="" />
                </div>
                <div className='form-container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-3xl text-center my-4">Sign Up Here</h1>

                        <div className="form-control w-full ">


                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className='text-red-500'>Name is required</span>}



                            </label>
                        </div>
                        <div className="form-control w-full ">


                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full "
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
                                className="input input-bordered w-full "
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
                        <button type='submit' className="btn btn-primary text-white-500 w-full ">Sign Up</button>
                        <p className='my-4'>Already have an account ? <Link className='text-primary' to='/login'>Login</Link> </p>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline w-full'>Continue with Google</button>
                </div>

            </div>

        </section>
    );
};

export default SignUp;
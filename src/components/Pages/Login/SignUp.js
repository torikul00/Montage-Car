import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../Shared/firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom'


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
    let from = location.state?.from?.pathname || "/"

    let signInError
    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (gUser) {
        console.log(gUser)
    }
    if (error || gError || updatError) {

        signInError = <p className='my-4 text-red-500'>{error?.message || gError?.message || updatError?.message}</p>

    }
    if (user) {
        navigate(from, { replace: true });
    }
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
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
                        <button type='submit' className="btn btn-accent text-white-500 w-full max-w-xs">Sign Up</button>
                        <p className='my-4'>Already have an account ? <Link className='text-secondary' to='/login'>Login</Link> </p>
                    </form>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-accent btn-outline'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
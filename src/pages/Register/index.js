import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Register = () => {


    const handleSubmit = (e) => {
        console.log(e)
    }



    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>

            <div className="hero my-10 ">
                <div className="hero-content lg:max-w-[500px] w-full flex-col lg:flex-row-reverse">
                    <div className="card rounded  flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl font-semibold'>Register</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="photo" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className='flex items-center justify-between mt-1'>
                                <span>All ready have an account</span>
                                <Link href='/Login'>Please Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;
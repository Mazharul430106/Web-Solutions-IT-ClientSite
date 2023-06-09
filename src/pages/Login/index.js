import Head from "next/head";
import Link from "next/link";


const Login = () => {

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>

            <div className="hero my-10 ">
                <div className="hero-content lg:max-w-[500px] w-full flex-col lg:flex-row-reverse">
                    <div className="card rounded  flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl font-semibold'>Login</h1>
                            <form onSubmit={handleSubmit}>

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
                                <div className="form-control mt-2">
                                    <button className="btn btn-accent">Login</button>
                                </div>
                            </form>

                            <div className="form-control ">
                                <div className="divider">OR</div>
                            </div>

                            <div className="form-control ">
                                <button className="btn btn-primary">Login With Google</button>
                            </div>

                            <div className='flex items-center justify-between mt-1'>
                                <span>Create an account</span>
                                <Link href='/Register'>Please Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;
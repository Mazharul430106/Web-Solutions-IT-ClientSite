import Head from 'next/head';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>


            <div className="hero my-10 ">
                <div className="hero-content lg:max-w-[800px] w-full flex-col lg:flex-row-reverse">
                    <div className="card rounded  flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl font-semibold'>Contact Us</h1>
                            <form>
                                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-0'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Fast Name</span>
                                        </label>
                                        <input type="text" name='fastName' placeholder="fast name" className="input input-bordered focus:outline-none" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" name='lastName' placeholder="fast name" className="input input-bordered focus:outline-none" />
                                    </div>
                                </div>

                                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-0'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered focus:outline-none" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Gender</span>
                                        </label>
                                        <div className='flex items-center justify-between lg:mt-3 mt-0'>
                                            <div className='flex items-center gap-2'>
                                                <input type="radio" name="radio-1" className="radio" />
                                                <span>Mail</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input type="radio" name="radio-1" className="radio" />
                                                <span>FeMail</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input type="radio" name="radio-1" className="radio" />
                                                <span>Other</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea rows={5} className="textarea textarea-bordered focus:outline-none" placeholder="Message ....!"></textarea>
                                </div>

                                <div className="flex justify-end  mt-2 ">
                                    <button className=" btn btn-primary w-full lg:max-w-[200px]">Submit</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contact;
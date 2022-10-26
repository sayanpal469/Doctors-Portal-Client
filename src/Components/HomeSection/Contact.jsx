import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/PJGXqMrb/appointment.png')] p-10">
            <div className='text-center'>
                <h2 className='text-xl text-primary font-semibold'>Contact Us</h2>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
            </div>
            <form className="card w-full max-w-lg mx-auto">
                <div className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control my-2">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <textarea type="text" placeholder="Subject" className="input input-bordered h-28" />
                    </div>
                    <div className="form-control mt-2 w-24 mx-auto">
                        <input type='submit' value='Submit' className="btn btn-primary"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
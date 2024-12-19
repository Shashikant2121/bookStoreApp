import React from 'react';
import { useForm } from 'react-hook-form'; // Import useForm
import { Link } from 'react-router-dom';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h1 className="font-bold text-2xl">Contact Us</h1>
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                  type="text" 
                  placeholder=" Enter your name"
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("name", { required: true })} // Correctly register the name field
                />
                <br />
                {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder=" Enter your Email"
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("email", { required: true })} // Correctly register the email field
                />
                <br />
                {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              {/* Password */}
              <div className='mt-8 space-y-2'>
                <span>Message</span>
                <br />
               <input  className=" h-40 w-80"type="text" name='message' placeholder='Type your Message'
                  {...register("message", { required: true })} // Correctly register the password field
                />
                <br />
                {errors.message && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              {/* Button */}
              <div className=' justify-around mt-4 cursor-pointer'>
                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-300 submit'>Submit</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Contact;
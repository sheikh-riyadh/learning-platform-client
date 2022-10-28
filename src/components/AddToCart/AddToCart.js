import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AddToCart = () => {

    const cart = useLoaderData()
    const { price, photoUrl, courseName } = cart
    return (
        <div className='lg:w-5/12 m-auto my-16'>
            <div className='flex flex- lg:flex-row items-center justify-between bg-primary p-10 rounded-xl text-slate-200'>
                <img className='w-20 h-20 rounded-xl' src={photoUrl} alt="CouresImage" />
                <p className='text-3xl'>{courseName}</p>
                <strong className='text-3xl'>Price: {price}</strong>
            </div>
            <Link className='text-2xl' to='/courses'>Back to course</Link>
        </div>
    );
};

export default AddToCart;
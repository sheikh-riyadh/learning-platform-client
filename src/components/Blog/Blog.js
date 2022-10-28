import React from 'react';

const Blog = ({ image, title, description, option }) => {
    return (
        <div className='mt-10'>
            <img className='w-[500px] m-auto rounded-2xl' src={image} alt="BlogImage" />
            <h1 className='text-3xl lg:text-5xl font-semibold my-5'>{title}</h1>
            <p className='text-xl lg:text-justify'>
                {description} <br></br>
                <strong>{option}</strong>
            </p>

        </div>
    );
};

export default Blog;
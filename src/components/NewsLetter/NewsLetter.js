import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <h2 className='text-3xl lg:text-5xl text-center text-slate-200 my-5'>Subscribe our newsletter!!</h2>
            <div className='flex w-5/6 lg:w-2/4 m-auto'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button className="btn btn-active">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;
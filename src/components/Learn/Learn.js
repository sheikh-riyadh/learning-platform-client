import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
const Learn = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 justify-center items-center'>
            <img src="learn.png" alt="Learn" />
            <div>
                <h3 className='text-3xl lg:text-5xl text-start font-semibold my-10'>Learn from anywhere</h3>
                <p className='mb-10'>Take classes on the go with the educrat app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
                    <div>
                        <button className="outline outline-2 outline-primary p-4  outline-offset-2 rounded-2xl text-white font-bold flex items-center gap-3 w-full text-xl">
                            <FaApple className='text-4xl'></FaApple>
                            Get in apple store</button>
                    </div>
                    <div>
                        <button className="outline outline-2 outline-primary p-4  outline-offset-2 rounded-2xl text-white font-bold flex items-center gap-3 w-full text-xl">
                            <FaGooglePlay className='text-4xl'></FaGooglePlay>
                            Get in play store</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;
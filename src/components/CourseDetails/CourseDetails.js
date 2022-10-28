import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    const { courseName, id, courseDetails
    } = details
    return (
        <div className=' mx-5 lg:mx-16 my-10'>
            <h1 className='text-center text-5xl py-5 font-semibold'>{courseName}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    courseDetails?.map((courseDetail, index) => <p className='text-2xl p-5 bg-slate-200 rounded-2xl text-slate-800' key={index}>{courseDetail}</p>)
                }
            </div>
            <div>
                <Link to={`/add-to-cart/${id}`} className='bg-primary block p-4 rounded-xl mt-5 lg:w-3/12 m-auto text-2xl text-slate-200 font-semibold text-center'>Get Premium access</Link>
                <Link to='/courses' className='bg-primary block p-4 rounded-xl mt-5 lg:w-3/12 m-auto text-2xl text-slate-200 font-semibold text-center'>Back to course</Link>
            </div>
        </div>
    );
};

export default CourseDetails;
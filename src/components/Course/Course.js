import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { courseTitle, courseDuration, coursePhotoUrl, coursePrice, id } = course
    console.log(course)
    return (
        <div className='shadow-xl rounded-xl bg-slate-200 text-slate-800'>
            <img className='rounded-xl w-full' src={coursePhotoUrl} alt="courseImage" />
            <p className='p-4'>{courseTitle}</p>
            <div className='flex justify-between items-center gap-4 p-4'>
                <p>{courseDuration}</p>
                <p>{coursePrice}</p>
                <Link to={`/details/${id}`} className='bg-primary py-2 px-5 text-slate-200 rounded-xl'>Details</Link>
            </div>
        </div>
    );
};

export default Course;
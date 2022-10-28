import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    /*  const { courseTitle, courseDuration, coursePhotoUrl, coursePrice, id } = course */
    return (
        <div className='shadow-xl rounded-xl bg-slate-200 text-slate-800'>
            <img className='rounded-xl w-full' src={course?.coursePhotoUrl} alt="courseImage" />
            <p className='p-4'>{course?.courseTitle}</p>
            <div className='flex justify-between items-center gap-4 p-4'>
                <p>{course?.courseDuration}</p>
                <p>{course?.coursePrice}</p>
                <Link to={`/details/${course?.id}`} className='bg-primary py-2 px-5 text-slate-200 rounded-xl'>Details</Link>
            </div>
        </div>
    );
};

export default Course;
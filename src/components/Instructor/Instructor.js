import React from 'react';
import { FaStar } from 'react-icons/fa';

const Instructor = ({ image, course, name, star, totalCourse, students }) => {
    return (
        <div>
            <div className="card  glass">
                <figure><img className='w-full' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{course}</p>

                    <div className='flex gap-2'>
                        <div className='flex items-center'>
                            <FaStar className='text-yellow-600'></FaStar><strong>{star}</strong>
                        </div>
                        <strong>Course {totalCourse}</strong>
                        <strong>Students {students}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
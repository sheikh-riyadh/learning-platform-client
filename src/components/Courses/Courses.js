import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseList from '../CourseList/CourseList';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 my-10 lg:my-10 lg:mx-16'>
            <div className='lg:col-span-3 hidden lg:block'>
                <CourseList></CourseList>
            </div>
            <div className='lg:col-span-9'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        courses?.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
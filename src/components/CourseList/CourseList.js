import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {

    const [categoryList, setCategoryList] = useState()
    useEffect(() => {
        fetch('https://course-server-eight.vercel.app/courses')
            .then(res => res?.json())
            .then(data => setCategoryList(data))
    }, [])
    return (
        <div className='lg:mt-14'>
            {
                categoryList?.map(category => <p className='lg:my-10' key={category.id}><Link className='lg:text-3xl text-slate-200' to={`/details/${category.id}`}>{category.courseTitle}</Link></p>)
            }
        </div>
    );
};

export default CourseList;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../components/Courses/Courses';

const CourseLayout = () => {
    return (
        <div>
            <Courses></Courses>
            <Outlet></Outlet>
        </div>
    );
};

export default CourseLayout;
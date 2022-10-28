import React from 'react';

const FeatureCourse = ({ courseTitle, image, description }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="CourseImage" /></figure>
            <div className="card-body bg-primary-focus">
                <h2 className="card-title">
                    {courseTitle}
                    <div className="badge badge-secondary">FEATURED</div>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCourse;
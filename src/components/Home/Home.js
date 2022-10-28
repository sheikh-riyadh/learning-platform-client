import React from 'react';
import Brands from '../../brands/Brands/Brands';
import FeatureCourse from '../FeatureCourse/FeatureCourse';
import Footer from '../Footer/Footer';
import Instructor from '../Instructor/Instructor';
import Learn from '../Learn/Learn';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center my-16 mx-5 lg:mx-16 text-center lg:text-start'>
                <div>
                    <h1 className='text-3xl lg:text-5xl font-extrabold'>Master the Skills to Drive your Career</h1>
                    <p className='mt-3 lg:mt-10 text-xl'>Free online courses from the world’s leading experts. Join 17 million learners today</p>
                    <button className="btn btn-primary mt-7">Let's get started</button>
                </div>
                <div className='mt-5'>
                    <img src="hero-edu.png" alt="HeroImage" />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 lg:grid-cols-6 justify-between items-center bg-slate-200 mx-5 lg:mx-16 p-10 rounded-xl'>
                <Brands brands='amazon.png'></Brands>
                <Brands brands='amd.png'></Brands>
                <Brands brands='cisco.png'></Brands>
                <Brands brands='digitech.png'></Brands>
                <Brands brands='dropcam.png'></Brands>
                <Brands brands='dropcam.png'></Brands>
            </div>
            <div className='my-16 mx-5 lg:mx-16'>
                <div className='text-center'>
                    <h1 className='text-3xl lg:text-5xl text-start font-semibold'>Featured course</h1>
                </div>
                <div className='mt-10 grid grid-cols- lg:grid-cols-4 gap-5'>
                    <FeatureCourse
                        courseTitle="UI/UX design"
                        image="ui-ux.jpg"
                    ></FeatureCourse>
                    <FeatureCourse
                        courseTitle="Digital marketing"
                        image="digital-marketing.jpg"
                    ></FeatureCourse>
                    <FeatureCourse
                        courseTitle="Data structure and algorithm"
                        image="data-structure.png"
                    ></FeatureCourse>
                    <FeatureCourse
                        courseTitle="IOS development"
                        image="ios-dev.jpg"
                    ></FeatureCourse>
                </div>
                <div className='mt-16'>
                    <Learn></Learn>
                </div>
                <div className='mt-16'>
                    <h2 className='text-3xl lg:text-5xl text-start font-semibold'>Learn from the best instructors</h2>
                    <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6'>
                        <Instructor
                            image="instructors/instructor-1.jpeg"
                            name="Albert Flores"
                            course="Web development"
                            star="5"
                            totalCourse="2"
                            students="78"
                        >
                        </Instructor>
                        <Instructor
                            image="instructors/instructor-2.jpeg"
                            name="Ali Tufan"
                            course="AI development"
                            star="5"
                            totalCourse="2"
                            students="78"
                        >
                        </Instructor>
                        <Instructor
                            image="instructors/instructor-3.jpeg"
                            name="John Doe"
                            course="Python development"
                            star="5"
                            totalCourse="2"
                            students="78"
                        >
                        </Instructor>
                        <Instructor
                            image="instructors/instructor-4.jpeg"
                            name="Robert Fox"
                            course="JavaScript development"
                            star="5"
                            totalCourse="2"
                            students="78"
                        >
                        </Instructor>
                    </div>
                    <div className='mt-5 lg:mt-10 bg-primary py-11 rounded-2xl'>
                        <NewsLetter></NewsLetter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
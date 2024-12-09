import React from 'react'
import Hero from '../pages/Home/Hero.jsx';
import StartSection from '../pages/Home/StartSection';
import CourseCategory from '../pages/Home/CourseCategory';
import FeactureCourse from '../pages/Home/FeactureCourse';
import HomeInstructor from '../pages/Home/HomeInstructor';
import Testimonials from '../pages/Home/Testimonials';
import NewsLetter from '../pages/Home/NewsLetter';
import FAQ from '../pages/Home/FAQ';

function Home() {
  
  return (
    <div>
        <Hero/>
        <StartSection/>
        <CourseCategory/>
        <FeactureCourse/>
        <HomeInstructor/>
        <Testimonials/>
        <NewsLetter/>
        <FAQ/>
    </div>
  )
}
export default Home;
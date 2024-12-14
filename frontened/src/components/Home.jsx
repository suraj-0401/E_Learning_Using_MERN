import React from 'react'
import Hero from '../pages/Home/Hero.jsx';
import StartSection from '../pages/Home/StartSection';
import FeactureCourse from '../pages/Home/FeactureCourse';
import HomeInstructor from '../pages/Home/HomeInstructor';
import Testimonials from '../pages/Home/Testimonials';
import FAQ from '../pages/Home/FAQ';
import CommunitySection from '../pages/Home/Community.jsx';

function Home() {
  
  return (
    <div>
        <Hero/>
        <FeactureCourse/>
        <CommunitySection/>
        <StartSection/>
        <HomeInstructor/>
        <Testimonials/>
        <FAQ/>
    </div>
  )
}
export default Home;
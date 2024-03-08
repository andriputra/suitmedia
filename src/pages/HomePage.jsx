import React from 'react';
import Hero from '../components/Hero';
import PetsSection from '../components/PetsSeries';
import PetsProduct from '../components/PetsProduct';
import SectionBannerOne from '../components/SectionBannerOne';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero/>
      <PetsSection/>
      <SectionBannerOne/>
      <PetsProduct/>
    </div>
  );
};

export default HomePage;

import React from 'react';
import Hero from '../components/SectionHero';
import PetsSection from '../components/SectionPetsSeries';
import PetsProduct from '../components/SectionPetsProduct';
import SectionBannerOne from '../components/SectionBannerOne';
import Partner from '../components/SectionPartner';
import SectionBannerTwo from '../components/SectionBannerTwo';
import Post from '../components/SectionPost';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero/>
      <PetsSection/>
      <SectionBannerOne/>
      <PetsProduct/>
      <Partner/>
      <SectionBannerTwo/>
      <Post/>
    </div>
  );
};

export default HomePage;

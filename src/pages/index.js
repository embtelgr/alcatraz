import React, { useState, useEffect } from "react";
import HeroSection from "./../components/HeroSection";
import AboutUs from "./../components/AboutUs";
import WhyAlcatraz from "./../components/WhyAlcatraz";
import PopularTours from "./../components/PopularTours";
import DiscountCTA from "./../components/DiscountCTA";
import PopupVideo from "./../components/PopupVideo";
import CustomerReviews from "./../components/CustomerReviews";
import $ from 'jquery';

function IndexPage(props) {

  

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <WhyAlcatraz />
      <PopularTours />
      <DiscountCTA />
      <AboutUs />
      <PopupVideo />
      <CustomerReviews />
      
    </>
  );
}

export default IndexPage;

import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

import AboutHero from "./../components/AboutHero";
import AboutAlcatraz from "./../components/AboutAlcatraz";
import AboutCTA from "./../components/AboutCTA";
import TicketCollection from "./../components/TicketCollection";

function AboutPage(props) {
  return (
    <>
      <AboutHero />
      <AboutAlcatraz />
      <AboutCTA />
      <TicketCollection />
      {/* <HeroSection2
        bg="primary"
        textColor="white"
        size="lg"
        bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
        bgImageOpacity={0.2}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      /> */}
    </>
  );
}

export default AboutPage;

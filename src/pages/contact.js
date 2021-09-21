import React from "react";
import ContactSection from "./../components/ContactSection";
import ContactHero from "./../components/ContactHero";
import ContactInfo from "./../components/ContactInfo";
import ContactFormSection from "./../components/ContactFormSection";
import ContactMap from "./../components/ContactMap";

function ContactPage(props) {
  return (
    <>
    <ContactHero />
    <ContactInfo />
    <ContactFormSection />
    <ContactMap />
    {/* <ContactSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Contact Us"
      subtitle=""
      buttonText="Send message"
      buttonColor="primary"
      showNameField={true}
    /> */}
    </>
  );
}

export default ContactPage;

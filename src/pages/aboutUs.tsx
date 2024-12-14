import AboutHeroSection from "../layouts/aboutHeroSection";
import InfoGraphic from "../layouts/InfoGraphic";
import OurServices from "../layouts/OurServices";
import OurWork from "../layouts/OurWork";
import OurTeam from "../layouts/OurTeam";
import OurCustomer from "../layouts/OurCustomer";
import ContactForm from "../layouts/ContactForm";

const AboutUs = () => {
  return (
    <>
      <AboutHeroSection />
      <InfoGraphic />
      <OurServices />
      <OurWork showLimit={4} />
      <OurTeam />
      <OurCustomer />
      {/* <Testimonial/> */}
      <ContactForm />
    </>
  );
};

export default AboutUs;

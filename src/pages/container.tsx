import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import AboutUs from "./aboutUs";
import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import Services from "./services";
import ServicePage from "./servicePage";
import NotFound from "./notFound";
import Contact from "./contact";
import OurProjects from "./OurProjects";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";

const Container = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/our-projects" element={<OurProjects />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Container;

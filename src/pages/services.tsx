import OurServicesPage from '../layouts/OurServicesPage'
import ContactForm from '../layouts/ContactForm'
import { Link, useParams } from "react-router-dom";
import ServiceImg from "../assets/img/service.jpg";

const Services = () => {
  return (
    <>
    <section
        className="breadcrumb__area breadcrumb-height include-bg p-relative"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title">About Us</h3>
                <div
                  className="breadcrumb__list wow tpfadeUp d-flex align-items-center"
                  data-wow-duration=".9s"
                >
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fi fi-br-angle-right d-flex"></i>
                  </span>
                  <span>About Us</span>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-md-block">
              <img src={ServiceImg} alt="about us icon" />
            </div>
          </div>
        </div>
      </section>
    
        <OurServicesPage />
   
      {/* <WhoAreWe /> */}

      <ContactForm />
    </>
  )
}

export default Services

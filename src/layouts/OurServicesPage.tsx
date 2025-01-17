import { Link } from "react-router-dom";
import data from "../data.json"
const OurServicesPage = () => {
  return (
    <>
      <div className="tp-service-area service-space-bottom pb-70 ">
        <div className="container">
            <div
              className="col-xl-12 col-lg-12 wow tpfadeLeft"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="service-section-wrapper">
                <div className="tp-service-section-title-box">
                  <h3 className="tp-section-title">
                    Service we can help you with
                  </h3>
                </div>
                <div className="tp-service-content mb-10">
                  <h4 className="tp-service-sm-subtitle">
                    We'll ensure you always get the best Digital Service
                  </h4>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="row service-space-left">
                {data.services.map((service, i) => (
                  <div
                    className="col-12 col-md-4 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".7s"
                    key={i}
                  >
                    <div className="tp-service-item mb-20 d-flex gap-3 justify-content-between">
                      <div className="tp-service-item__content">
                        <h4 className="tp-service-sm-title">
                          <Link to="/our-services/web-development">
                            {service.name}
                          </Link>
                        </h4>
                        <div className="tp-service-item__button-link">
                          <Link to={`/our-services/${service.slug}`} >
                            <span>
                              <svg
                                width="34"
                                height="16"
                                viewBox="0 0 36 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928935C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM-8.74228e-08 9L33 9L33 7L8.74228e-08 7L-8.74228e-08 9Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            Read More
                          </Link>
                        </div>
                      </div>
                      <div className="">
                        <span>
                          <img width={100} src={service.icon} alt={service.name} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
         
        </div>
      </div >
    </>
  );
};

export default OurServicesPage;

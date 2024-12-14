import { Link, useParams } from "react-router-dom";
import data from "../data.json";

const ServicePage = () => {
  const { slug } = useParams();
  const filteredService = data.services.filter((d) => d.slug === slug);
  const cover = filteredService[0].banner;

  return (
    <>
      <section
        className="breadcrumb__area breadcrumb-height include-bg p-relative"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title">{filteredService[0].name}</h3>
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
                  <span>
                    <Link to="/our-services">Services</Link></span>
                  <span className="dvdr">
                    <i className="fi fi-br-angle-right d-flex"></i>
                  </span>
                  <span>{filteredService[0].name}</span>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-md-block">
              <img src={filteredService[0].icon} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="sv-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="sv-details-content">
                <div className="sv-details-thumb mb-50">
                  <img src={`${window.location.origin}/${cover}`} alt="" />
                </div>
                <div className="post-details"
                  dangerouslySetInnerHTML={{
                    __html: filteredService[0]["rich-text"],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ServicePage;

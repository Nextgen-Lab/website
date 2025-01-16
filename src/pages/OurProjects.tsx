import OurWork from "../layouts/OurWork";
import { Link, useParams } from "react-router-dom";
import ProjectImg from "../assets/img/project.jpg";
const OurProjects = () => {
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
              <img src={ProjectImg} alt="about us icon" />
            </div>
          </div>
        </div>
      </section>
    <div className="pt-5">
      <OurWork showLimit={1000} />
    </div>
    </>
  );
};

export default OurProjects;

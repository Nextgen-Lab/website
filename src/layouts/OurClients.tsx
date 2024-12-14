import brandbg from "../assets/img/brand/barnd-bg.png";
import brandOne from "../assets/img/brand/brand-1.png";
import brandTwo from "../assets/img/brand/brand-2.png";
import brand from "../assets/img/brand/brand-1.png";
import brandFour from "../assets/img/brand/brand-4.png";
import brandFive from "../assets/img/brand/brand-5.png";
import brandSix from "../assets/img/brand/brand-6.png";
import forlogo from "../assets/css/forlogo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";

const OurClients = () => {
  return (
    <>
      <div className="tp-brand-area brand-space-bottom pb-110  ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-brand-title-box pb-60">
                <h4 className="tp-brand-title">
                  <span>Over 250+</span> business growing with us
                </h4>
              </div>
            </div>
          </div>
          <div className="brand-slider-active d-flex align-items-center">
            <div className="brand-item">
              <div className="tp-brand-icon">
                <img src={brandOne} alt="" />
              </div>
            </div>
            <div
              className="brand-item wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".3s"
            >
              <div className="tp-brand-icon">
                <img src={brandTwo} alt="" />
              </div>
            </div>
            <div
              className="brand-item wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="tp-brand-icon">
                <img src={brandOne} alt="" />
              </div>
            </div>
            <div
              className="brand-item wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".7s"
            >
              <div className="tp-brand-icon">
                <img src={brandFour} alt="" />
              </div>
            </div>
            <div
              className="brand-item wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".9s"
            >
              <div className="tp-brand-icon">
                <img src={brandFive} alt="" />
              </div>
            </div>
            <div
              className="brand-item wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".9s"
            >
              <div className="tp-brand-icon">
                <img src={brandSix} alt="" />
              </div>
            </div>
            <div
              className="brand-item wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay="1s"
            >
              <div className="tp-brand-icon">
                <img src={brandSix} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;

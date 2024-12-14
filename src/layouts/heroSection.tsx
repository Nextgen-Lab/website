import HeroOne from "../assets/img/herosectionimg.jpg";
//import HeroThree from '../assets/img/hero-3.png';
import HeroAngleShape from "../assets/img/hero-angel-shape.png";
import HeroCircleShape from "../assets/img/hero-circle-shape.png";
// import HeroShapethrreone from '../assets/img/hero-shape-3-1.png';
// import HeroShapethreetwo from '../assets/img/hero-shape-3-2.png';
// import HeroShapethreethree from '../assets/img/hero-shape-3-3.png';
// import Herosm1 from '../assets/img/hero-sm-1.png';
//import Herosm2 from '../assets/img/hero-sm-2.png';
import HeroStarShape from "../assets/img/hero-star-shape.png";
import HeroStarShapesm from "../assets/img/hero-star-sm-shape.png";
// import SliderGridentbgtwo from '../assets/img/slider-grident-bg-2.png';
// import SliderGridentbg from '../assets/img/slider-grident-bg.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <div
        className="tp-hero-area hero-grideant-bg"
        data-background="assets/img/slider/slider-grident-bg.png"
      >
        <div className="container">
          <div className="row align-items-center hero-space">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero">
                <div className="tp-hero__section-box">
                  <h4
                    className="tp-section-subtitle  wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    Best solution we offer you
                  </h4>
                  <h2
                    className="tp-slider-title wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".6s"
                  >
                    Make a good plan & grow your business
                  </h2>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".8s"
                  >
                    We have almost 12+ years of experience for helping
                    consulting services and business solutions.{" "}
                  </p>
                </div>
                <div
                  className="tp-hero__wrapper d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay="1s"
                >
                  <div className="tp-hero__button">
                    <Link to="/contact" className="tp-btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero__wrapper-thumb p-relative">
                <div className="tp-hero-shape-one">
                  <img src={HeroStarShape} alt="" />
                </div>
                <div className="tp-hero-shape-two">
                  <img src={HeroCircleShape} alt="" />
                </div>
                <div className="tp-hero-shape-three">
                  <img src={HeroAngleShape} alt="" />
                </div>
                <div className="tp-hero-shape-four">
                  <img src={HeroStarShapesm} alt="" />
                </div>
                <div
                  className="tp-hero__thumb text-start text-lg-end wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay="1.2s"
                >
                  <img src={HeroOne} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-5 col-lg-5 wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".3s"
            >
              <div className="tp-slider-exprience">
                <div className="tp-slider-exprience__content">
                  <h4 className="tp-slider-exp-title">24 Year of Experience</h4>
                  <p>
                    “Lorem Ipsum is simply dummy text of printing and
                    typesetting industry Ipsum is dummy text of the printing
                    industry”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-slider-exp-item mb-30">
                    <div className="tp-slider-exp-item__icon icon-bg-green">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_289_84)">
                          <path
                            d="M23.2969 0H20.4375C20.0489 0 19.7344 0.314484 19.7344 0.703125V1.40625H13.9799C13.6886 0.589594 12.9155 0 12 0C11.0845 0 10.3114 0.589594 10.0201 1.40625H4.26562V0.703125C4.26562 0.314484 3.95114 0 3.5625 0H0.703125C0.314484 0 0 0.314484 0 0.703125V3.51562C0 3.90427 0.314484 4.21875 0.703125 4.21875H3.5625C3.95114 4.21875 4.26562 3.90427 4.26562 3.51562V2.80312H7.15331C4.71314 4.32755 3.10416 7.005 2.91183 10.0038C2.06817 10.28 1.45312 11.0653 1.45312 12C1.45312 13.1632 2.39934 14.1094 3.5625 14.1094C4.72566 14.1094 5.67188 13.1632 5.67188 12C5.67188 11.1028 5.10652 10.34 4.31531 10.0356C4.55522 6.69225 6.88809 3.87431 10.1331 3.07031C10.4841 3.74892 11.1847 4.21875 12 4.21875C12.8153 4.21875 13.5159 3.74892 13.8669 3.07031C17.1119 3.87427 19.4448 6.6922 19.6847 10.0356C18.8935 10.34 18.3281 11.1028 18.3281 12C18.3281 13.1632 19.2743 14.1094 20.4375 14.1094C21.6007 14.1094 22.5469 13.1632 22.5469 12C22.5469 11.0653 21.9318 10.28 21.0882 10.0038C20.8958 7.005 19.2869 4.33692 16.8467 2.8125H19.7344V3.51562C19.7344 3.90427 20.0489 4.21875 20.4375 4.21875H23.2969C23.6855 4.21875 24 3.90427 24 3.51562V0.703125C24 0.314484 23.6855 0 23.2969 0Z"
                            fill="currentColor"
                          />
                          <path
                            d="M16.7835 23.1279C16.4157 22.0025 15.3561 21.1406 14.1093 21.1406H9.89052C8.64365 21.1406 7.58408 22.0025 7.2163 23.1279C7.07451 23.5618 7.44365 24 7.90021 24H16.0996C16.5561 24 16.9253 23.5618 16.7835 23.1279Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.21 14.4225L12.7031 6.16217V12.8327C13.5198 13.1239 14.1094 13.8971 14.1094 14.8125C14.1094 15.9757 13.1632 16.9219 12 16.9219C10.8369 16.9219 9.89063 15.9757 9.89063 14.8125C9.89063 13.8971 10.4802 13.1239 11.2969 12.8327V6.16217L5.79001 14.4225C5.60391 14.7013 5.64099 15.0728 5.8779 15.3097C7.16869 16.6005 7.99379 18.2634 8.31221 20.0471C8.80065 19.849 9.33188 19.7344 9.89063 19.7344H14.1094C14.6681 19.7344 15.1994 19.8489 15.6878 20.047C16.0062 18.2632 16.8313 16.6005 18.1221 15.3097C18.359 15.0728 18.3961 14.7013 18.21 14.4225Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 14.1094C11.6121 14.1094 11.2969 14.4246 11.2969 14.8125C11.2969 15.2004 11.6121 15.5156 12 15.5156C12.3879 15.5156 12.7031 15.2004 12.7031 14.8125C12.7031 14.4246 12.3879 14.1094 12 14.1094Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_289_84">
                            <rect width="24" height="24" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="tp-slider-exp-item__content">
                      <h4 className="tp-exp-sm-title">
                        Service we can <br /> help you with
                      </h4>
                    </div>
                    <div className="tp-slider-exp-item__service-link">
                      <div className="tp-link tp-link-green">
                        <a href="/our-services">
                          <svg
                            width="34"
                            height="16"
                            viewBox="0 0 34 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928935C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM-8.74228e-08 9L33 9L33 7L8.74228e-08 7L-8.74228e-08 9Z"
                              fill="#202026"
                            />
                          </svg>
                          <span>Our Service</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  <div className="tp-slider-exp-item mb-30">
                    <div className="tp-slider-exp-item__icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_289_84)">
                          <path
                            d="M23.2969 0H20.4375C20.0489 0 19.7344 0.314484 19.7344 0.703125V1.40625H13.9799C13.6886 0.589594 12.9155 0 12 0C11.0845 0 10.3114 0.589594 10.0201 1.40625H4.26562V0.703125C4.26562 0.314484 3.95114 0 3.5625 0H0.703125C0.314484 0 0 0.314484 0 0.703125V3.51562C0 3.90427 0.314484 4.21875 0.703125 4.21875H3.5625C3.95114 4.21875 4.26562 3.90427 4.26562 3.51562V2.80312H7.15331C4.71314 4.32755 3.10416 7.005 2.91183 10.0038C2.06817 10.28 1.45312 11.0653 1.45312 12C1.45312 13.1632 2.39934 14.1094 3.5625 14.1094C4.72566 14.1094 5.67188 13.1632 5.67188 12C5.67188 11.1028 5.10652 10.34 4.31531 10.0356C4.55522 6.69225 6.88809 3.87431 10.1331 3.07031C10.4841 3.74892 11.1847 4.21875 12 4.21875C12.8153 4.21875 13.5159 3.74892 13.8669 3.07031C17.1119 3.87427 19.4448 6.6922 19.6847 10.0356C18.8935 10.34 18.3281 11.1028 18.3281 12C18.3281 13.1632 19.2743 14.1094 20.4375 14.1094C21.6007 14.1094 22.5469 13.1632 22.5469 12C22.5469 11.0653 21.9318 10.28 21.0882 10.0038C20.8958 7.005 19.2869 4.33692 16.8467 2.8125H19.7344V3.51562C19.7344 3.90427 20.0489 4.21875 20.4375 4.21875H23.2969C23.6855 4.21875 24 3.90427 24 3.51562V0.703125C24 0.314484 23.6855 0 23.2969 0Z"
                            fill="currentColor"
                          />
                          <path
                            d="M16.7835 23.1279C16.4157 22.0025 15.3561 21.1406 14.1093 21.1406H9.89052C8.64365 21.1406 7.58408 22.0025 7.2163 23.1279C7.07451 23.5618 7.44365 24 7.90021 24H16.0996C16.5561 24 16.9253 23.5618 16.7835 23.1279Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.21 14.4225L12.7031 6.16217V12.8327C13.5198 13.1239 14.1094 13.8971 14.1094 14.8125C14.1094 15.9757 13.1632 16.9219 12 16.9219C10.8369 16.9219 9.89063 15.9757 9.89063 14.8125C9.89063 13.8971 10.4802 13.1239 11.2969 12.8327V6.16217L5.79001 14.4225C5.60391 14.7013 5.64099 15.0728 5.8779 15.3097C7.16869 16.6005 7.99379 18.2634 8.31221 20.0471C8.80065 19.849 9.33188 19.7344 9.89063 19.7344H14.1094C14.6681 19.7344 15.1994 19.8489 15.6878 20.047C16.0062 18.2632 16.8313 16.6005 18.1221 15.3097C18.359 15.0728 18.3961 14.7013 18.21 14.4225Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 14.1094C11.6121 14.1094 11.2969 14.4246 11.2969 14.8125C11.2969 15.2004 11.6121 15.5156 12 15.5156C12.3879 15.5156 12.7031 15.2004 12.7031 14.8125C12.7031 14.4246 12.3879 14.1094 12 14.1094Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="24" height="24" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="tp-slider-exp-item__content">
                      <h4 className="tp-exp-sm-title">
                        Why you should choose us{" "}
                      </h4>
                    </div>
                    <div className="tp-slider-exp-item__service-link">
                      <div className="tp-link">
                        <a href="/about-us">
                          <svg
                            width="34"
                            height="16"
                            viewBox="0 0 34 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928935C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM-8.74228e-08 9L33 9L33 7L8.74228e-08 7L-8.74228e-08 9Z"
                              fill="#202026"
                            />
                          </svg>
                          <span>About us</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;

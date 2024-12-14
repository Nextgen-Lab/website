import aboutimg from "../assets/img/about/aboutimg1.jpg";
// import aboutimg from"../assets/img/about/about-shape-1.png"
import HeroStarShape from "../assets/img/hero-star-shape.png";
import HeroStarShapesm from "../assets/img/hero-star-sm-shape.png";
// import aboutCircleShape from"../assets/img/about/about-circle-shape.png"
// import abInnerThree from"../assets/img/about/ab-inner-3.jpg"
// import abInnerTwo from"../assets/img/about/ab-inner-2.jpg"
// import abInnerTwoFour from"../assets/img/about/ab-inner-2-4.jpg"
// import abInnerTwoThree from"../assets/img/about/ab-inner-2-3.jpg"
// import abInnerTwoTwo from"../assets/img/about/ab-inner-2-2.jpg"
// import abInnerTwoOne from"../assets/img/about/ab-inner-2-1.jpg"
// import abInnerOne from"../assets/img/about/ab-inner-1.jpg"
const WhoAreWe = () => {
  return (
    <>
      <div className="tp-about-area ab-area-sapce pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-5 col-lg-5 order-2 order-lg-1 wow tpfadeLeft"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="tp-ab-wrapper p-relative">
                <div className="tp-ab-shape-one z-index-3">
                  <img src={HeroStarShape} alt="" />
                </div>
                <div className="tp-ab-shape-two z-index-3">
                  <img src={HeroStarShapesm} alt="" />
                </div>
                <div className="tp-about-thumb">
                  <img
                    src={aboutimg}
                    //   style={{
                    //  objectFit: "cover",
                    //  width: "100%",
                    //  height: "100%",
                    //   }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-7 order-1 order-lg-2 wow tpfadeRight"
              data-wow-duration=".7s"
              data-wow-delay=".7s"
            >
              <div className="tp-ab-section-title-box">
                <h4 className="tp-section-subtitle tp-green-color">
                  Who we are?
                </h4>
                <h3 className="tp-section-title">
                  We are dynamic team of creative design and development
                </h3>
                <p>
                  We have almost 12+ years of experience for helping consulting
                  services <br /> and business solutions and best protect.
                </p>
                <a className="tp-btn" href="/about-us">
                  About our Agency
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;

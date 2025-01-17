import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import abInnerOne from "../assets/img/about/abInThree.jpg";
import abInnerTwo from "../assets/img/about/abInOne.jpg";
import abInnerThree from "../assets/img/about/abinTwo.jpg";

const AboutHeroSection = () => {
  return (
    <>
      <div className="tp-about-us-area pt-40 pb-60 mt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="ab-inner-content">
                <h4 className="ab-title-xs mb-25">
                  Next Gen Lab do Design, Code, <br /> Develop and Branding
                </h4>
                <p>
                  Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
                  commodo claritatem insitamconse quat.Exerci tation ullamcorper
                  suscipit loborti excommodo habent claritatem insitamconse
                  quat.Exerci tationlobortis nisl aliquip ex ea commodo habent
                  claritatem{" "}
                </p>
                <div className="tp-inner-list">
                  <ul>
                    <li>
                      <i className="far fa-check"></i> FRONTEND 90%
                    </li>
                    <li>
                      <i className="far fa-check"></i> Web Development 95%
                    </li>
                    <li>
                      <i className="far fa-check"></i> Ui\Ux design 90%
                    </li>
                    <li>
                      <i className="far fa-check"></i> Branding Design 80%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6 wow tpfadeRight"
              data-wow-duration=".7s"
              data-wow-delay=".8s"
            >
              <div className="tp-img-inner text-end">
                <div className="row gx-3">
                  <div className="col-xl-7 col-lg-6 col-md-7 col-7">
                    <div className="ab-inner-img">
                      {/* <img src="assets/img/about/ab-inner-1.jpg" alt=""> */}
                      <img src={abInnerOne} alt="" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-5">
                    <div className="ab-inner-img mb-20">
                      {/* <img src="assets/img/about/ab-inner-2.jpg" alt=""> */}
                      <img src={abInnerTwo} alt="" />
                    </div>
                    <div className="ab-inner-img">
                      {/* <img src="assets/img/about/ab-inner-3.jpg" alt=""> */}
                      <img src={abInnerThree} alt="" />
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

export default AboutHeroSection;

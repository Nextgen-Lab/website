import caseOne from "../assets/img/galaxy.png";
import caseTwo from "../assets/img/krish.png";
import caseThree from "../assets/img/intense.png";
import caseFour from "../assets/img/mentor.jpg";

const cases = [
  {
    id: 1,
    to: "https://www.galaxycare.com.au/",
    title: "Galaxy care",
    image: caseOne,
    delay: ".5s",
  },
  {
    id: 2,
    to: "https://www.krishrealestate.com.au/",
    title: "Krish",
    image: caseTwo,
    delay: ".7s",
  },
  {
    id: 3,
    to: "https://intensesupportcare.com.au/",
    title: "Intense Support Care",
    image: caseThree,
    delay: ".9s",
  },
  {
    id: 4,
    to: "https://mentoredu.com.au/",
    title: "Mentor",
    image: caseFour,
    delay: "1s",
  },
];

const OurWork = ({ showLimit = 20 }) => {
  return (
    <>
      <div
        className="tp-case-area case-bg case-space"
        data-background="assets/img/case/case-grident-shape.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-8 col-12 wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".3s"
            >
              <div className="tp-case-section-title-box text-center mb-60">
                <h4 className="tp-section-subtitle tp-green-color">
                  Check our Work
                </h4>
                <h3 className="tp-section-title">
                  Some of Our Recent Projects
                </h3>
              </div>
            </div>
          </div>

          <div className="row gx-20">
            {cases
              .slice(0, showLimit ? showLimit : cases.length)
              .map((item, index) => (
                <div
                  className={`col-xl-6 col-lg-6 wow ${
                    index % 2 === 0 ? "tpfadeLeft" : "tpfadeRight"
                  }`}
                  data-wow-duration=".7s"
                  data-wow-delay={item.delay}
                >
                  <div className="tp-case-thumb p-relative fix mb-20">
                    <img src={item.image} alt={`Case ${item.id}`} />
                    <div className="case-icon">
                      <a href={item.to} target="_blank">
                        <i
                          className="fas fa-arrow-up"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {showLimit <= 4 && (
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-case-button text-center mt-40">
                  <a className="tp-btn" href="our-projects">
                    All Projects
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurWork;

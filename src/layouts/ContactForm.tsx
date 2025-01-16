import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import contactOne from "../assets/img/contact/contact-1.png";
import contactTwo from "../assets/img/contact/contact-2.png";
import contactThree from "../assets/img/contact/contact-3.png";

const ContactForm = () => {
  return (
    <>
      <div
        className="tp-contact-area grey-bg pb-60 pt-60 wow tpfadeUp"
        data-wow-duration=".7s"
        data-wow-delay=".5s"
      >
        <div className="container mt-5">
          <div className="tp-contact-wrapper p-relative">
            <div className="tp-contact-shape d-none d-xl-block">
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-us-sction-box mb-60">
                  <h4 className="tp-section-subtitle">Contact me</h4>
                  <h3 className="tp-section-title-xs">
                    Let’s Work <br /> Together.
                  </h3>
                </div>
                <div className="contact-info">
                  <div className="contact-info-item d-flex align-items-center">
                    <div className="contact-icon">
                      <img src={contactOne} alt="" />
                    </div>
                    <div className="contact-loaction">
                      <a
                        href="https://www.google.com.bd/maps/place/United+States/@37.2756214,-104.656551,5z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sydney, Australia
                      </a>
                    </div>
                  </div>
                  <div className="contact-info-item d-flex align-items-center">
                    <div className="contact-icon">
                      <img src={contactTwo} alt="" />
                    </div>
                    <div className="contact-loaction">
                      <a href="mailto:support@nextgenlab.com.au">support@nextgenlab.com.au</a>
                    </div>
                  </div>
                  <div className="contact-info-item d-flex align-items-center">
                    <div className="contact-icon">
                      <img src={contactThree} alt="" />
                    </div>
                    <div className="contact-loaction">
                      <a href="tel:08778886664">088 (778 886 664)</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tpcontact">
                  <div className="tpcontact__heading">
                    <h4 className="tp-contact-title mb-20">
                      <i
                        className="fas fa-pen-to-square me-2"
                        style={{ color: "#007BFF" }}
                      ></i>
                      Fill the form
                    </h4>
                  </div>
                  <div className="tpcontact__form">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Company name"
                      />
                      <input
                        type="email"
                        placeholder="Enter your mail"
                      />
                      <textarea
                        placeholder="Enter your message"
                      ></textarea>
                      <button
                        className="tp-btn"
                      >
                        Let’s Talk
                      </button>
                    </form>
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

export default ContactForm;

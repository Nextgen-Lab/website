import testiImgOne from '../assets/img/testimonial/testi-img-1.png'
// import testiBorderShape from '../assets/img/testimonial/testi-border-shape.png'
// import testiImgTen from '../assets/img/testimonial/testi-img-10.png'
import testiImgTwo from '../assets/img/testimonial/testi-img-2.png'
import testiImgThree from '../assets/img/testimonial/testi-img-3.png'
import herosmimg from '../assets/img/herosmimg.jpg'
// import testiImgFour from '../assets/img/testimonial/testi-img-4.png'
// import testiImgFive from '../assets/img/testimonial/testi-img-5.png'
// import testiImgSix from '../assets/img/testimonial/testi-img-6.png'
// import testiImgSeven from '../assets/img/testimonial/testi-img-7.png'
// import testiImgEight from '../assets/img/testimonial/testi-img-8.png'
// import testiImgNine from '../assets/img/testimonial/testi-img-9.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for styling
import { Carousel } from "react-responsive-carousel";


const OurCustomer = () => {

   const testimonials = [
      {
        id: 1,
        text: "Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.",
        name: "Wade Warren",
        position: "Founder of Edardx",
      },
      {
        id: 2,
        text: "He works very smart, always fast and ahead of time. He's also a team player. Looking forward to working with him in the future.",
        name: "Marvin McKinney",
        position: "Founder of Edardx",
      },
      {
        id: 3,
        text: "Next Gen Lab is an excellent writer. His magical words added value to the growth of our business. Highly recommended.",
        name: "Savannah Nguyen",
        position: "Founder of Edardx",
      },
    ];

    const customArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => (
      <button
        type="button"
        onClick={onClickHandler}
        className="custom-arrow custom-arrow-prev"
        style={{ display: hasPrev ? "block" : "none" }}
      >
        ❮
      </button>
    );
  
    const customArrowNext = (onClickHandler: () => void, hasNext: boolean) => (
      <button
        type="button"
        onClick={onClickHandler}
        className="custom-arrow custom-arrow-next"
        style={{ display: hasNext ? "block" : "none" }}
      >
        ❯
      </button>
    );

    return (
      <div className="tp-testimonial-area tp-testimonial-space p-relative testimonial-border-shape">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="service-section-wrapper">
                <div className="tp-testimonial-section-title-box">
                  <h4 className="tp-section-subtitle tp-yellow-color">
                    Happy customer feedback
                  </h4>
                  <h3 className="tp-section-title">Happy customer feedback</h3>
                </div>
                <div className="tp-service-content mb-20">
                  <h4 className="tp-service-sm-title">
                    We love our client and our clients <br /> loved us. See all feedback.
                  </h4>
                </div>
              </div>
            </div>
  
            <div className="col-xl-6 col-lg-12">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
                stopOnHover={true}
                renderArrowPrev={customArrowPrev}
                renderArrowNext={customArrowNext}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="tp-testimonial-item">
                    <div className="tp-testimonial-item__icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="tp-testimonial-item__text">
                      <p>{testimonial.text}</p>
                    </div>
                    <div className="tp-testimonial-item__wrapper d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-item__info d-flex align-items-center">
                        <div className="tp-testimonial-item__info-text">
                          <h4 className="client-name">{testimonial.name}</h4>
                          <span>{testimonial.position}</span>
                        </div>
                      </div>
                      <div className="tp-testimonial-item__ratting d-none d-md-block">
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default OurCustomer

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
const OurCustomer = () => {
   return (
      <>
         <div className="tp-testimonial-area tp-testimonial-space p-relative testimonial-border-shape" data-background="assets/img/testimonial/testi-border-shape.png">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-12 wow tpfadeLeft" data-wow-duration=".7s" data-wow-delay=".5s">
                     <div className="service-section-wrapper">
                        <div className="tp-testimonial-section-title-box">
                           <h4 className="tp-section-subtitle tp-yellow-color">Happy customer feedback</h4>
                           <h3 className="tp-section-title">Happy customer feedback</h3>
                        </div>
                        <div className="tp-service-content mb-20">
                           <h4 className="tp-service-sm-title">We love our client and our clients <br /> loved us. see all
                              feedback</h4>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                     <div className="row">
                        <div className="col-xl-12 col-lg-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".7s">
                           <div className="tp-testimonial-item mb-30">
                              <div className="tp-testimonial-item__icon">
                                 <i className="fas fa-quote-right"></i>
                              </div>
                              <div className="tp-testimonial-item__text">
                                 <p>Our office is something we are pleased with. We consider it the little magnet; it is
                                    wanting to come here and afterward difficult to leave it.</p>
                              </div>
                              <div className="tp-testimonial-item__wrapper d-flex justify-content-between align-items-center">
                                 <div className="tp-testimonial-item__info d-flex align-items-center">
                                    <div className="tp-testimonial-item__info-img">
                                       {/* <img src="assets/img/testimonial/testi-img-1.png" alt=""/> */}
                                       <img src={herosmimg} alt="" />
                                    </div>
                                    <div className="tp-testimonial-item__info-text">
                                       <h4 className="client-name">Wade Warren</h4>
                                       <span>Founder of Edardx</span>
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-item__ratting d-none d-md-block">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                           <div className="tp-testimonial-item testimonial-bg-color-2 mb-30">
                              <div className="tp-testimonial-item__icon">
                                 <i className="fas fa-quote-right"></i>
                              </div>
                              <div className="tp-testimonial-item__text">
                                 <p>He works very smart always fast and ahead of time. He's also a team player Looking
                                    forward to working with him in the future</p>
                              </div>
                              <div className="tp-testimonial-item__wrapper d-flex justify-content-between align-items-center">
                                 <div className="tp-testimonial-item__info d-flex align-items-center">
                                    <div className="tp-testimonial-item__info-img">
                                       {/* <img src="assets/img/testimonial/testi-img-2.png" alt=""/> */}
                                       <img src={herosmimg} alt="" />
                                    </div>
                                    <div className="tp-testimonial-item__info-text">
                                       <h4 className="client-name">Marvin McKinney</h4>
                                       <span>Founder of Edardx</span>
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-item__ratting d-none d-md-block">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                           <div className="tp-testimonial-item testimonial-bg-color-3 mb-30">
                              <div className="tp-testimonial-item__icon">
                                 <i className="fas fa-quote-right"></i>
                              </div>
                              <div className="tp-testimonial-item__text">
                                 <p>Next Gen Lab is an Excellent Writer, His magical words added value in growth of our
                                    business. Highly Recommended</p>
                              </div>
                              <div className="tp-testimonial-item__wrapper d-flex justify-content-between align-items-center">
                                 <div className="tp-testimonial-item__info d-flex align-items-center">
                                    <div className="tp-testimonial-item__info-img">
                                       {/* <img src="assets/img/testimonial/testi-img-3.png" alt=""/> */}
                                       <img src={herosmimg} alt="" />
                                    </div>
                                    <div className="tp-testimonial-item__info-text">
                                       <h4 className="client-name">Savannah Nguyen</h4>
                                       <span>Founder of Edardx</span>
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-item__ratting d-none d-md-block">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
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
   )
}

export default OurCustomer

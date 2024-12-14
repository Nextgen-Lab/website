import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import data from "../data.json"
import { Link } from 'react-router-dom';
import logo from "../assets/img/next-gen-lab-logo.png";
const Footer = () => {
   const date = new Date()

   return (
      <>
         <div className="tp-footer-area footer-bg pt-130" data-background="assets/img/footer/footer-bg.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-md-3 col-6 mb-30">
                     <div className="tp-footer-widget z-index-3">
                        <div className="tp-footer-widget__list">
                           <img src={logo} alt="" style={{ filter: "brightness(0) invert(1)", width: "200px" }} />
                           <p className='fs-6'>Next Gen Lab do Design, Code,Develop and Branding</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-6 mb-30">
                     <div className="tp-footer-widget footer-space-two z-index-3">
                        <div className="tp-footer-widget__title">
                           <h4 className="tp-footer-title">Quick Links</h4>
                        </div>
                        <div className="tp-footer-widget__list">
                           <ul className='p-0'>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/about-us">About Us</Link></li>
                              <li><Link to="/our-services">Services</Link></li>
                              <li><Link to="/our-projects">Our Projects</Link></li>
                              <li><Link to="/contact">Contact Us</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-6 mb-30">
                     <div className="tp-footer-widget footer-space-three z-index-3">
                        <div className="tp-footer-widget__title">
                           <h4 className="tp-footer-title">Our Services</h4>
                        </div>
                        <div className="tp-footer-widget__list">
                           <ul className='p-0'>
                              {data.services.map((service, i) => (
                                 <li key={i}><Link to={`/our-services/${service.slug}`}>{service.name}</Link></li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-md-3 col-6 mb-30">
                     <div className="tp-footer-widget z-index-3">
                        <div className="tp-footer-widget__title">
                           <h4 className="tp-footer-title">Contact Us</h4>
                        </div>
                        <div className="tp-footer-widget__list">
                           <ul className="footer-position p-0">
                              <i className="fi fi-rr-marker"></i>
                              <li>
                                 <a href="https://www.google.com/maps/@38.4999525,-103.0632285,6.46z" target="_blank">
                                    Sydney, Austrila</a>
                              </li>
                              <li><a href="mailto:support@nextgenlab.com">
                                 <i className="fi fi-rr-envelope"></i>
                                 support@nextgenlab.com</a>
                              </li>
                              <li><a href="tel:778886664">
                                 <i className="fi fi-rr-phone-flip"></i>
                                 088 (778 886 664)</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="row">
               <div className="col-12">
                  <div className="tp-newsletter-wrapper z-index-3">
                     <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="tp-newsletter">
                              <div className="tp-newsletter__title">
                                 <h4 className="tp-newsletter-title">Get latest updates</h4>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="tp-newsletter">
                              <div className="tp-newsletter__input p-relative">
                                 <form action="#">
                                    <input type="email" placeholder="Enter your mail"/>
                                    <button className="tp-btn-yellow">Subscribe <i className="far fa-arrow-right"></i></button>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
               <div className="copy-right-wrapper z-index-3">
                  <div className="row">
                     <div className="col-xl-6 col-lg-7 col-12">
                        <div className="copyright-left text-center text-lg-start">
                           <p>©Copy RIght @{date.getFullYear()} All Rights Reserved - Next Gen lab</p>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-5 col-12">
                        <div className="copyright-right-side text-center text-lg-end">
                           <ul>
                              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer

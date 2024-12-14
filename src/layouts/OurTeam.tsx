import React from 'react'
// import billGate from'../assets/img/'
import billGate from '../assets/img/case/billgate.jpg'

const OurTeam = () => {
  return (
    <>
 <div className="tp-taem-area pb-80">
         <div className="container">
            <div className="row wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
               <div className="tp-team-section-area text-center mb-60">
                  <h3 className="tp-section-subtitle">Our Team</h3>
                  <h4 className="tp-section-title-sm">Meet with our team</h4>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 mb-60 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".5s">
                  <div className="tp-team team-inner text-center">
                     <div className="tp-team-thumb p-relative">
                        {/* <img src="assets/img/team/team-4.jpg" alt=""> */}
                        <img src={billGate} alt=""/>
                        <div className="tp-team-thumb-icon">
                           <a href="about-me.html"><i className="far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                     <div className="tp-team-content">
                        <h4 className="tp-team-title"><a href="about-me.html">Alextina Ditarson</a></h4>
                        <span>UX Designer</span>
                     </div>
                     <div className="tp-team-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 mb-60 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".7s">
                  <div className="tp-team team-inner text-center">
                     <div className="tp-team-thumb p-relative">
                        {/* <img src="assets/img/team/team-1.jpg" alt=""> */}
                        <img src={billGate} alt=""/>
                        <div className="tp-team-thumb-icon">
                           <a href="about-me.html"><i className="far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                     <div className="tp-team-content">
                        <h4 className="tp-team-title"><a href="about-me.html">Ken F. Berry</a></h4>
                        <span>Product Manager</span>
                     </div>
                     <div className="tp-team-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 mb-60 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
                  <div className="tp-team team-inner text-center">
                     <div className="tp-team-thumb p-relative">
                        {/* <img src="assets/img/team/team-2.jpg" alt=""> */}
                        <img src={billGate} alt=""/>
                        <div className="tp-team-thumb-icon">
                           <a href="about-me.html"><i className="far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                     <div className="tp-team-content">
                        <h4 className="tp-team-title"><a href="about-me.html">Jonathan Mercado</a></h4>
                        <span>Ui Designer</span>
                     </div>
                     <div className="tp-team-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 mb-60 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <div className="tp-team team-inner text-center">
                     <div className="tp-team-thumb p-relative">
                        {/* <img src="assets/img/team/team-3.jpg" alt=""> */}
                        <img src={billGate} alt=""/>
                        <div className="tp-team-thumb-icon">
                           <a href="about-me.html"><i className="far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                     <div className="tp-team-content">
                        <h4 className="tp-team-title"><a href="about-me.html">David D. Rethman</a></h4>
                        <span>Web Developer</span>
                     </div>
                     <div className="tp-team-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default OurTeam

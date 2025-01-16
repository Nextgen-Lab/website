import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import billGate from '../assets/img/avatar.jpg';

const OurTeam = () => {
  const teamMembers = [
    { name: 'Alextina Ditarson', role: 'UX Designer' },
    { name: 'Ken F. Berry', role: 'Product Manager' },
    { name: 'Jonathan Mercado', role: 'UI Designer' },
    { name: 'David D. Rethman', role: 'Web Developer' },
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  // Function to update slides based on screen width
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesToShow(3); // Desktop
    } else if (width >= 768) {
      setSlidesToShow(2); // Tablet
    } else {
      setSlidesToShow(1); // Mobile
    }
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial setup
    window.addEventListener('resize', updateSlidesToShow); // Listen for window resize

    return () => {
      window.removeEventListener('resize', updateSlidesToShow); // Cleanup listener
    };
  }, []);

  return (
    <div className="tp-taem-area pb-20">
      <div className="container">
        <div className="row text-center mb-60">
          <div className="tp-team-section-area">
            <h3 className="tp-section-subtitle">Our Team</h3>
            <h4 className="tp-section-title-sm">Meet with our team</h4>
          </div>
        </div>
        <Carousel
          showArrows
          infiniteLoop
          autoPlay
          interval={3000}
          stopOnHover
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={100 / slidesToShow} // Dynamically adjust based on slidesToShow
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="tp-team team-inner text-center">
              <div className="tp-team-thumb p-relative">
                <img src={billGate} alt={member.name} />
                <div className="tp-team-thumb-icon">
                  <a href="about-me.html">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="tp-team-content">
                <h4 className="tp-team-title">
                  <a href="about-me.html">{member.name}</a>
                </h4>
                <span>{member.role}</span>
              </div>
              <div className="tp-team-social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeam;

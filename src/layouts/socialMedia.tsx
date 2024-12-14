import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialMedia = () => {
  return (
   
   <>
      <div className="tp-social-area social-space-bottom fix">
         <div className="container-fluid p-0">
            <div className="row g-0">
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <a href="#">
                     <div className="tp-social-item">
                        <span><i className="fab fa-facebook-f"></i> Facebook</span>
                     </div>
                  </a>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <a href="#">
                     <div className="tp-social-item tp-youtube">
                        <span><i className="fab fa-youtube"></i> youtube</span>
                     </div>
                  </a>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                 <a href="#">
                     <div className="tp-social-item tp-behance">
                        <span><i className="fab fa-behance"></i> behance</span>
                     </div>
                 </a>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <a href="#">
                     <div className="tp-social-item tp-dribble">
                        <span><i className="fab fa-dribbble"></i> dribbble</span>
                     </div>
                  </a>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <a href="#">
                     <div className="tp-social-item tp-twitter">
                        <span><i className="fab fa-twitter"></i> twitter</span>
                     </div>
                  </a>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                 <a href="#">
                     <div className="tp-social-item tp-linkedin">
                        <span><i className="fab fa-linkedin"></i>linkedin</span>
                     </div>
                 </a>
               </div>
            </div>
         </div>
      </div>
   </>
  )
}

export default SocialMedia

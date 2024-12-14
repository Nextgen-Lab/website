import React from 'react'
import pagenotfound from "../assets/img/pageNotFound.avif"

const NotFound = () => {
  return (
    <>
      <section className="tp-404-area height-404" data-background={pagenotfound}>
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="wrapper-404 d-flex justify-content-center align-items-end">
                     <div className="tp-404-content text-center pb-60">
                        <h4 className="mb-40">Opps! Page Not Found</h4>
                        <a className="tp-btn" href="index.html">Back To Home</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default NotFound

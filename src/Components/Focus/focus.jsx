import React from "react";
import "./focus.css";
import image1 from './Images/1.jpg';
import image2 from './Images/2.jpg';
import image3 from './Images/3.jpg';
import image4 from './Images/4.jpeg';
import image5 from './Images/5.jpg';
import image6 from './Images/6.jpg';
import image7 from './Images/7.jpg';

function FocusAreas() {
  return (
    <section className="py-5 bg-light">
      <div className="container-fluid px-4">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase">Our Focus Areas</h2>
          <p className="text-success fw-bold">TOUCHING LIVES WITH COMPASSION</p>
        </div>

        <div className="row g-4">          
          <div className="col-md-4 col-lg-3">
            <div className="card text-white border-0 h-100">
              <img 
                src={image1} 
                className="card-img img-tall rounded-4" 
                alt="Woman and Child" 
              />
              <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                <h5 className="fw-bold text-center">Woman and Child Welfare</h5>
              </div>
            </div>
          </div>

          <div className="col-md-8 col-lg-9">
            <div className="row g-4">
              
              
              <div className="col-sm-6 col-md-4">
                <div className="card text-white border-0">                  
                  <img src={image2} className="card-img img-small rounded-4" alt="Education" />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                    <h5 className="fw-bold text-center">Education</h5>
                  </div>
                </div>
              </div>

              
              <div className="col-sm-6 col-md-4">
                <div className="card text-white border-0">
                  <img src={image3} className="card-img img-small rounded-4" alt="Healthcare" />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                    <h5 className="fw-bold text-center">Healthcare</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-white border-0">
                  <img src={image4} className="card-img img-small rounded-4" alt="Skill" />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                    <h5 className="fw-bold text-center">Skill Development</h5>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="card text-white border-0">
                  <img src={image5} className="card-img img-small rounded-4" alt="Animal" />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                    <h5 className="fw-bold text-center">Animal Welfare</h5>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="card text-white border-0">
                  <img src={image6} className="card-img img-small rounded-4" alt="Elderly" />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                    <h5 className="fw-bold text-center">Elderly Care</h5>
                  </div>
                </div>
              </div>
           
              <div className="col-sm-6 col-md-4">
                <div className="card text-white border-0">
                  <img src={image7} className="card-img img-small rounded-4" alt="Environment" />
                  <div className="card-img-overlay d-flex align-items-end justify-content-center gradient-overlay rounded-4">
                    <h5 className="fw-bold text-center">Environment</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
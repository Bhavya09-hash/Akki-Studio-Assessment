import React from "react";
import image1 from "./Images/carousel1.png"
import image2 from './Images/carousel2.jpg'
import image3 from './Images/carousel3.png'
import "./carousel.css"


function Carousel() {
return (
  <div>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="car-holder carousel-item active" data-bs-interval="1000">
      <img src={image1} className="car-img img-fluid d-block w-100" alt="..."/>
      <div className="carousel-caption d-flex justify-content-between align-items-center" style={{bottom: "5%"}}>
             <div className=" d-flex  justify-content-center j">
             <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold">
               Learn More
             </button>
             <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold ms-3">Volunteer</button>
             </div>   
             <div>
                <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold">
               Learn less
             </button>
             </div>
          </div>
    </div>
    <div className="car-holder carousel-item" data-bs-interval="2000">
      <img src={image2} className="car-img img-fluidd-block w-100" alt="..."/>
      <div className="carousel-caption d-flex justify-content-between align-items-center" style={{bottom: "5%"}}>
             <div className=" d-flex  justify-content-center j">
             <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold">
               Learn More
             </button>
             <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold ms-3">Volunteer</button>
             </div>   
             <div>
                <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold">
               Learn less
             </button>
             </div>
          </div>
    </div>
    <div className="car-holder carousel-item">
      <img src={image3} className="car-img img-fluid d-block w-100" alt="..."/>
      <div className="carousel-caption d-flex justify-content-between align-items-center" style={{bottom: "5%"}}>
             <div className=" d-flex  justify-content-center j">
             <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold">
               Learn More
             </button>
             <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold ms-3">Volunteer</button>
             </div>   
             <div>
                <button className="btn btn-outline-light rounded-pill px-4 py-2 border-2 fw-bold">
               Learn less
             </button>
             </div>
          </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    <div className="slogan">
      <p className="text-center fs-4 fw-semibold ">Empowering Those Who Empower Others: Investing in Grassroots, Investing in India's Future.</p>
    </div>
</div>
)}

export default Carousel;
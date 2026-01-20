import React from "react";
import "./events.css";
import { useState } from "react";
import image1 from './Images/1.jpg';
import image2 from './Images/2.jpg';
import image3 from './Images/3.jpg';


const Events = () => {
    const [activeTab, setActiveTab] = useState("past");
  return (
    <section className="events py-5">
      <div className="container">
        <div className="header text-center">
            <div className="title">
                <h2 className="title-head fw-bold fs-1">Our Events</h2>
                <p className="title-text fs-4">What’s Next & What’s Been</p>
            </div>
            <div className="event-btn">
                <button onClick={() => setActiveTab('past')} className={`btn btn-outline btn-events rounded-pill px-4 py-2 transition-colors ${
            activeTab === 'past' 
              ? 'active-style'  
              : 'inactive-style'    
          }`}>Pasts Events</button>
                <button onClick={() => setActiveTab('upcoming')} className={`btn btn-outline btn-events rounded-pill px-4 py-2 ms-3 transition-colors ${
            activeTab === 'upcoming' 
              ? 'active-style'  
              : 'inactive-style'    
          }`}>Upcoming Events</button>
            </div>

        </div>
        <div className="event-content rounded mt-5">
            {activeTab === "past" ? (<div className="text-left">
            
            <div className="border p-4 rounded flex gap-4">
              <div className="bg-gray-200 w-32 h-24 rounded"></div>
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="border border-black indicate active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="indicate border border-black" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="indicate border border-black" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner pb-5">
                    <div className="carousel-item active">
                    <div className="card card-inner mb-3 w-100 border-0 border border-black shadow rounded" >
                        <div className="row g-0">
                            <div className="col-md-5">
                            <img src={image1} className="img-fluid rounded-start h-100" alt="Cat shelter"/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body p-4 p-lg-5">
                                <h5 className="card-title card-title fw-bold text-success mb-3">Guardians of all Voiceless – Cat Shelter Foundation Stone</h5>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-calendar-date text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">01-09-2025</span>                        
                                </div> 
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">Patiala</span>
                                </div>                               
                                </div>
                                <div className="d-flex gap-2 mb-4">
                                    <button className="btn btn-outline-primary btn-sm px-3 rounded-2">Past Events</button>
                                    <button className="btn btn-outline-success btn-sm px-3 rounded-2">Animal Welfare</button>
                                </div>
                                <p className="card-text text-muted mb-4">
                                    In India, millions of street animals face challenges like lack of shelter, medical care, and compassion. Animal welfare remains a critical concern...
                                </p>

                                
                                <button className="btn btn-success px-4 py-2 rounded-pill fw-bold">
                                    Read More
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="card card-inner mb-3 w-100 border-0 shadow rounded" >
                        <div className="row g-0">
                            <div className="col-md-5">
                            <img src={image2} className="img-fluid rounded-start h-100" alt="Health Checkup Camp"/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body p-4 p-lg-5">
                                <h5 className="card-title card-title fw-bold text-success mb-3">Mega Health Checkup Camp</h5>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-calendar-date text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">011-09-2025</span>                        
                                </div> 
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">Faidan, chd</span>
                                </div>   
                                  <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-map-fill text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">Don Bosco Navjeevan Society</span>
                                </div>                           
                                </div>
                                <div className="d-flex gap-2 mb-4">
                                    <button className="btn btn-outline-primary btn-sm px-3 rounded-2">Past Events</button>
                                    <button className="btn btn-outline-success btn-sm px-3 rounded-2">Health Care</button>
                                </div>
                                <p className="card-text text-muted mb-4">
                                    India faces significant healthcare challenges, particularly in rural and underserved areas. According to recent reports, 
                                    many communities lack access to essential healthcare services, leading to a high vulnerability ....
                                </p>

                                    
                                <button className="btn btn-success px-4 py-2 rounded-pill fw-bold">
                                    Read More
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="card card-inner mb-3 w-100 border-0 shadow rounded" >
                        <div className="row g-0">
                            <div className="col-md-5">
                            <img src={image3} className="img-fluid rounded-start h-100" alt="Stationery Distribution"/>
                            </div>
                            <div className="col-md-7">
                            <div className="card-body p-4 p-lg-5">
                                <h5 className="card-title card-title fw-bold text-success mb-3">Stationery Distribution at Maharish Dayanand Bal Ashram</h5>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-calendar-date text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">01-09-2025</span>                        
                                </div> 
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">Chandiarh</span>
                                </div>    
                                <div className="d-flex align-items-center bg-light border rounded px-3 py-2">
                                    <i className="bi bi-map-fill text-danger me-2"></i>
                                    <span className="fw-semibold text-secondary">Udham Singh Colony in Sector 74, Mohali </span>
                                </div>                           
                                </div>
                                <div className="d-flex gap-2 mb-4">
                                    <button className="btn btn-outline-primary btn-sm px-3 rounded-2">Past Events</button>
                                    <button className="btn btn-outline-success btn-sm px-3 rounded-2">Education</button>
                                </div>
                                <p className="card-text text-muted mb-4">
                                    According to a 2023 report, people living in slum areas like Udham Singh Colony in Sector 74, Mohali, Chandigarh, face significant challenges. Often, these slums lack adequate infrastructure,... 
                                </p>

                                    
                                <button className="btn btn-success px-4 py-2 rounded-pill fw-bold">
                                    Read More
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
          </div>
        ): (
          <div className="py-10 bg-gray-50 rounded">
            <p className="text-xl text-dark-600 font-medium">
              Stay tuned for our upcoming events!
            </p>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Events;
import React from "react";
import './grant.css'
import image1 from './Images/1.jpg'
import image2 from './Images/2.png'
import image3 from './Images/3.png'
import image4 from './Images/4.png'
import image5 from './Images/5.png'

const Grant = () => {
    return (
        <div className="container-fluid text-center px-5 py-5">
            <div className="row">
                <div className="col-lg-6 text-start mb-4 mb-lg-0 pe-lg-5">
                    <h2 className="grant-title fw-bold mb-4">The Shrihaan Sahyog Grant</h2>
                    <p className="grant-text mb-4">As a testament to our unwavering commitment to direct and impactful support, 
                        Adhishrihaan Foundation proudly offers the “Shrihaan Sahyog” Grant.</p>
                    <p className="grant-text mb-5">This annual grant provides crucial, catalytic funding to 3-5 carefully 
                      selected micro-NGOs that are undertaking powerful ground-level work but 
                      are often constrained by a lack of visibility or financial resources.</p>  
                    <button className="btn btn-grant rounded-pill px-4 py-2 text-white fw-bold">Know More</button>    
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="car-inner carousel-inner rounded-4 shadow">
                            <div className="carousel-item active" data-bs-interval="5000">
                            <img src={image1} className="d-block w-100 grant-img" alt="Grant Activity 1"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            <img src={image2} className="d-block w-100 grant-img" alt="Grant Activity 2"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            <img src={image3} className="d-block w-100 grant-img" alt="Grant Activity 3"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            <img src={image4} className="d-block w-100 grant-img" alt="Grant Activity 4"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            <img src={image5} className="d-block w-100 grant-img" alt="Grant Activity 5"/>
                            </div>
                        </div>
                        </div>
                </div>                
            </div>
        </div>
    )
}
export default Grant;
import React from "react";
import "./container.css"

function Container(){
    return(
        <div className="holder container-fluid  ">
            <div className=" container d-flex flex-column justify-content-center align-items-center px-5 py-4">
            <div>
            <p className=" text-white text-center fs-5">At Adhishrihaan Foundation, we believe true transformation begins at the roots. 
                We are the steadfast support system for the unsung heroes of community development: 
                grassroots NGOs, nurturing their vital work with unwavering care and commitment.</p>
            </div>
            <div className="d-flex gap-4 fw-bold mt-4">
            <p className="text-white text-center fs-5 fw-bold">DISCOVER OUR IMPACT</p>
            <p>|</p>
            <p className="text-white text-center fs-5">SUPPORT OUR MISSION</p>
            </div>
            </div>
        </div>
    )
}

export default Container;
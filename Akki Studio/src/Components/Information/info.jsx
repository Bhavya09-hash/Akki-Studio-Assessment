import React from "react";
import "./info.css";

function Information() {
    return (
    <section className="what-we-do-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold">WHAT WE DO</h2>
          <p className="section-subtitle text-uppercase fw-bold">
            Our Pillars of Support
          </p>
        </div>

        <div className="d-flex flex-column gap-5">
        
            <div className="row">
              <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
                <h3 className="pillar-title fw-bold text-uppercase">
                  CAPACITY BUILDING
                </h3>
              </div>

              <div className="col-md-8 col-lg-9">
                <p className="pillar-text mb-3">We offer tailored training programs, essential funding assistance, and critical 
                  technological support to enhance the operational efficiency and program effectiveness of our partner NGOs. 
                  This includes workshops on project management, financial literacy, fundraising strategies, and digital tools.
                   We believe in strengthening their internal capabilities so they can serve their communities even better.",
                </p>
                <p className="pillar-action fw-bold mb-0">
                  Care in Action: Providing the tools and knowledge that empower grassroots leaders to sustain their vital work, 
                  ensuring their dedication translates into lasting impact.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
                <h3 className="pillar-title fw-bold text-uppercase">
                  VISIBILITY
                </h3>
              </div>

              <div className="col-md-8 col-lg-9">
                <p className="pillar-text mb-3">
                    We are dedicated to amplifying the impactful stories of these silent warriors. We help them effectively 
                    communicate their achievements, document their journeys, and gain the recognition they truly deserve through 
                    strategic communication and media outreach. This includes developing compelling narratives, creating impact 
                    reports, and connecting them with broader audiences.
                </p>
                <p className="pillar-action fw-bold mb-0">
                  Care in Action: Shining a spotlight on the tireless efforts of those who work selflessly on the ground, ensuring 
                  their dedication inspires more support and change.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
                <h3 className="pillar-title fw-bold text-uppercase">
                  NETWORKING
                </h3>
              </div>

              <div className="col-md-8 col-lg-9">
                <p className="pillar-text mb-3">
                    We connect grassroots NGOs with each other, fostering collaborative learning and shared solutions. We also link 
                    them with larger philanthropic organizations, corporate CSR initiatives, academic institutions, and government 
                    bodies. This builds a robust ecosystem of collective action and greater synergy for wider reach and sustainable 
                    impact.
                </p>
                <p className="pillar-action fw-bold mb-0">
                    Care in Action: Building bridges of partnership and shared purpose, creating a stronger, more united front for 
                    social transformation.
                </p>
              </div>
            </div>
            
        </div>
      </div>
    </section>
  );
}

export default Information;
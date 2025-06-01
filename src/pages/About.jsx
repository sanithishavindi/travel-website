import React from 'react'

function About() {
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              {/* <li className="breadcrumb-item">
                <a href="/Pages">Pages</a>
              </li> */}
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
        
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Dinuka Tours</span>
            </h1>
            <p className="mb-4">
              Golden Lanka Tours own by Krishnajith who is passionate about his beautiful home land and with 18 years experience in 
              the tourist and hospitality industry is a knowledgeable tour agent and guide. 
            </p>
            <p className="mb-4">
              Specializing in providing tour packages that can be tailor made to suit each clients needs from airport pick and drop 
              off or hotel pick up all the guides are flexible and accommodating.
            </p>
            <div>
              <a className="btn btn-primary py-3 px-5 mt-2" >
              What we have to offer
            </a>
            <br></br><br></br>
            </div>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Safety and Security.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Friendliness and knowledge.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />5 Star
                  Experience and well Qualified Drivers and Guides.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Comfortable Vehicles fully insured.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Tourist Board Approved certificates.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Itineraries to suit all requirements.
                </p>
              </div>
            </div>
            {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Travel Guide
          </h6>
          <h1 className="mb-5">Meet Our Team</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/krishna.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="info@goldenlankatours.com">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Sujeewa Krishnajith</h5>
                <small>Proprietor</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/kerv.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="nfo@goldenlankatours.com">
                  <i className="fa fa-envelope" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Alston kervyn Celestine</h5>
                <small>Tour Oprator</small>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-19px" }}
              >
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    {/* Transportation Start */}
<div className="container-xxl py-5">
  <div className="container">
    <h2 className="mb-4">TRANSPORTATION</h2>
    <p>
      Whether you are visiting an important business client, planning a conference, or simply an airport transfer, our chauffeur drive service can make a difference with our excellent service! Just take a back seat and let our professional chauffeur drive you to your location. You will never have to worry about traffic blocking or parking, as our chauffeur drive service will get you to your destination relaxed and on-time.
    </p>
    <p>
      Our fleet of vehicles range from luxury cars, luxury vans, tour buses to suit each client’s needs.
    </p>
    <div className="row">
      <div className="col-md-4 mb-3">
        <img src="assets/img/v1.jpg" alt="Luxury Car" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 mb-3">
        <img src="assets/img/v2.jpg" alt="Luxury Van" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 mb-3">
        <img src="assets/img/v3.jpg" alt="Mini Bus" className="img-fluid rounded" />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-4 mb-3">
        <img src="assets/img/v5.jpg" alt="Tour Bus" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 mb-3">
        <img src="assets/img/v4.jpg" alt="Van Interior" className="img-fluid rounded" />
      </div>
      <div className="col-md-4 mb-3">
        <img src="assets/img/v6.jpg" alt="Bus Interior" className="img-fluid rounded" />
      </div>
    </div>
  </div>
</div>
{/* Transportation End */}

    {/* Team End */}
    </div>
  )
}

export default About
import React from 'react';

function Packages() {
  const sriLankaPackages = [
    {
      title: 'HONEYMOON PACKAGE',
      image: 'assets/img/honymoon2.jpg',
      location: 'Sri Lanka',
      duration: '5 Days',
      persons: '2 Persons',
      price: '$499.00',
      description: 'Romantic escapes with private beaches, luxury resorts, and candle-lit dinners under the stars.',
    },
    {
      title: 'BEAUTY OF SRI LANKA',
      image: 'assets/img/travelsrilanka.jpg',
      location: 'Sri Lanka',
      duration: '7 Days',
      persons: 'Up to 4 Persons',
      price: '$699.00',
      description: 'Explore lush landscapes, ancient temples, tea plantations, and vibrant local culture.',
    },
    {
      title: 'BEACH & MOUNTAINS TOUR',
      image: 'assets/img/beach-mountain.jpg',
      location: 'Sri Lanka',
      duration: '6 Days',
      persons: '2-6 Persons',
      price: '$629.00',
      description: 'Relax on golden beaches and hike through misty mountains in one unforgettable trip.',
    },
    {
      title: 'WILD LIFE & SCENIC',
      image: 'assets/img/wildlife.jpg',
      location: 'Sri Lanka',
      duration: '5 Days',
      persons: 'Group or Private',
      price: '$589.00',
      description: 'Safari through national parks, spot elephants and leopards, and enjoy scenic viewpoints.',
    },
    {
      title: 'CLASSIC & RELAX',
      image: 'assets/img/classic.jpg',
      location: 'Sri Lanka',
      duration: '6 Days',
      persons: '2 Persons',
      price: '$549.00',
      description: 'A mix of heritage sites, wellness retreats, and slow-paced scenic drives.',
    },
    {
      title: 'BEST OF SRI LANKA',
      image: 'assets/img/best.jpg',
      location: 'Sri Lanka',
      duration: '8 Days',
      persons: 'Custom Group',
      price: '$799.00',
      description: 'Hit every major highlight from Sigiriya to Galle — ideal for first-time visitors.',
    },
    {
      title: 'SCIENIC SRI LANKA',
      image: 'assets/img/scienic.jpg',
      location: 'Sri Lanka',
      duration: '8 Days',
      persons: 'Custom Group',
      price: '$799.00',
      description: 'Hit every major highlight from Sigiriya to Galle — ideal for first-time visitors.',
    },
  ];

  const hotelWidgetStyles = {
    container: {
      position: 'relative',
      color: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#000',
      height: '100%',
      minHeight: '450px',
    },
    background: {
      backgroundImage: "url('assets/img/hotel-bg.jpg')", // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      padding: '1.5rem',
    },
  };

  return (
    <div>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Tour Packages</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Packages</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Package Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
            <h1 className="mb-3">Tour Packages</h1>
            <p>Custom Package? <a href="/contact">Contact Us</a></p>
          </div>

          {/* Packages Grid */}
          <div className="row g-4 justify-content-center">
            {sriLankaPackages.map((pkg, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
                <div className="package-item border rounded shadow-sm h-100">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={pkg.image} alt={pkg.title} />
                    <div
                      className="position-absolute top-0 start-0 w-100 text-white text-center py-2"
                      style={{ backgroundColor: 'rgba(0, 128, 0, 0.8)', fontWeight: 'bold', fontSize: '1rem' }}
                    >
                      {pkg.title}
                    </div>
                  </div>
                  <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      {pkg.location}
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt text-primary me-2" />
                      {pkg.duration}
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-user text-primary me-2" />
                      {pkg.persons}
                    </small>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="mb-0">{pkg.price}</h3>
                    <div className="mb-3">
                      {[...Array(5)].map((_, i) => (
                        <small className="fa fa-star text-success" key={i} />
                      ))}
                    </div>
                    <p>{pkg.description}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="btn btn-sm btn-success px-4 rounded-pill">Read More</a>
                      <a href="#" className="btn btn-sm btn-success px-4 rounded-pill">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Agoda-Style Hotel Search Widget */}
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div style={hotelWidgetStyles.container}>
                <div style={hotelWidgetStyles.background}></div>
                <div style={hotelWidgetStyles.content}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Agoda_logo.svg/2560px-Agoda_logo.svg.png" alt="agoda" style={{ height: '24px' }} />
                  <h4 className="mt-3 fw-bold">FIND YOUR<br />NEXT HOTEL</h4>
                  <p className="mb-3">in agoda.com</p>
                  <form>
                    <input type="text" placeholder="Enter a Destination or Property Name" className="form-control mb-3" />
                    <div className="d-flex gap-2 mb-3">
                      <div className="flex-fill bg-white text-dark p-2 rounded text-center">
                        <div className="fw-bold fs-4">3</div>
                        <div>Jun <span className="text-muted">Tue</span></div>
                        <div className="small text-muted">Check-in</div>
                      </div>
                      <div className="flex-fill bg-white text-dark p-2 rounded text-center">
                        <div className="fw-bold fs-4">5</div>
                        <div>Jun <span className="text-muted">Thu</span></div>
                        <div className="small text-muted">Check-out</div>
                      </div>
                    </div>
                    <input type="text" value="1 Room 1 Guest" className="form-control mb-3" readOnly />
                    <button type="submit" className="btn btn-primary w-100">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Packages;

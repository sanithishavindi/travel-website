import React from 'react';

function HoneymoonPackage() {
  const itinerary = [
    {
      day: 'Day 01',
      route: 'Air port To Negombo',
      attraction: ['Visit Fish Market', 'Negombo Beach'],
      stay: 'Negombo',
    },
    {
      day: 'Day 02 & Day 03',
      route: 'Negombo to Giritale',
      attraction: ['Anuradhapura sightseeing', 'Polonnaruwa sightseeing', 'Sri Lanka Ayurvedic Herbal Massage'],
      stay: 'Giritale',
    },
    {
      day: 'Day 04',
      route: 'Giritale To Sigiriya',
      attraction: ['Minneriya jeep safari', 'Sigiriya Lion Rock', 'Village Safari by Cart'],
      stay: 'Sigiriya',
    },
    {
      day: 'Day 05',
      route: 'Sigiriya To Kandy',
      attraction: [
        'Dambulla Golden Temple',
        'Visit Ayurvedic Spice Garden',
        'Gem museum and factory',
        'Kandy cultural show',
        'Kandy Temple of Tooth Relic',
        'Wood Carving Factory',
      ],
      stay: 'Kandy',
    },
    {
      day: 'Day 06',
      route: 'Kandy to Nuwaraeliya',
      attraction: [
        'Ramboda Water Fall',
        'Visit Tea plantation and Tea Factory',
        'Old English town',
        'Gregory lake',
      ],
      stay: 'Nuwaraeliya',
    },
    {
      day: 'Day 07',
      route: 'Nuwaraeliya to Ella',
      attraction: [
        'Visit Tea plantation',
        'Train ride to Ella',
      ],
      stay: 'Ella',
    },
    {
      day: 'Day 08',
      route: 'Ella to Krinda',
      attraction: [
        'seta covila',
        'Rawana ealla',
      ],
      stay: 'Kirinda',
    },
  ];

  return (
    <div className="container my-5">
      <h3
        className="text-center fw-bold"
        style={{ marginTop: '100px', color: '#FFA500', fontSize: '2rem' }}
      >
        HONEYMOON PACKAGE <span className="text-secondary">11 Nights & 12 Days</span>
      </h3>

      <div className="row mt-4">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-0">
              <table className="table table-hover table-bordered mb-0">
                <thead className="bg-success text-white text-center text-uppercase">
                  <tr>
                    <th style={{ width: '15%' }}>Days</th>
                    <th style={{ width: '25%' }}>Route</th>
                    <th>Attraction</th>
                    <th style={{ width: '20%' }}>Overnight Stay</th>
                  </tr>
                </thead>
                <tbody>
                  {itinerary.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-light' : ''}>
                      <td className="fw-semibold">{item.day}</td>
                      <td>{item.route}</td>
                      <td>
                        <ul className="mb-0 ps-3">
                          {item.attraction.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="fw-semibold">{item.stay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="mb-3 position-relative overflow-hidden rounded shadow-sm">
            <img
              src="assets/img/honeymoon-beach.jpg"
              alt="Beach Dining"
              className="img-fluid rounded hover-zoom"
              style={{ objectFit: 'cover', height: '250px', width: '100%' }}
            />
          </div>
          <div className="position-relative overflow-hidden rounded shadow-sm">
            <img
              src="assets/img/srilanka-landscape.jpg"
              alt="Scenic View"
              className="img-fluid rounded hover-zoom"
              style={{ objectFit: 'cover', height: '250px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoneymoonPackage;

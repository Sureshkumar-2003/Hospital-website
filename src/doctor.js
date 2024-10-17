import './index.css'

import doctor1 from './image/d-im1.avif';
import doctor2 from './image/d-w-2.avif';
import doctor3 from './image/d-3.jpg';
import doctor4 from './image/d-w4.avif';



function Doctor (){
    return(
         
    <section id="doctor">
    <h1 className="text-center my-5" data-aos="fade-up" data-aos-duration="900">
      Our Doctor
    </h1>

    <div className="container">
      <div className="row">
        <div
          className="col-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-up-right"
          data-aos-duration="1200"
        >
          <div className="card">
            {/* <img src="image/d-im1.avif" class="card-img-top" alt="..." /> */}

            <img src={doctor1} alt='doctor pic'></img>
            <div className="card-body text-center">
              <h5 className="card-title">Dr.Suresh</h5>
              <p className="card-text">Our Expert</p>
              <div className="doctor-icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <div className="card">
            {/* <img src="image/d-w-2.avif" class="text-center" alt="..." /> */}
            <img src={doctor2} alt='doctor pic'></img>


            <div className="card-body text-center">
              <h5 className="card-title">Dr.Logitha</h5>
              <p className="card-text">Our Expert</p>
              <div className="doctor-icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="card">
            {/* <img src="image/d-3.jpg" className="card-img-top" alt="..." /> */}

            <img src={doctor3} alt='doctor pic'></img>

            <div className="card-body text-center">
              <h5 className="card-title">Dr.Mohan</h5>
              <p className="card-text">Our Expert</p>
              <div className="doctor-icon">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-up-left"
          data-aos-duration="1200"
        >
          <div className="card">
            {/* <img src="image/d-w4.avif" className="card-img-top" alt="d-image" /> */}
            <img src={doctor4} alt='doctor pic'></img>

            <div className="card-body text-center">
              <h5 className="card-title">Dr.Priya</h5>
              <p className="card-text">Our Expert</p>
              <div className="doctor-icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
};

export default Doctor;
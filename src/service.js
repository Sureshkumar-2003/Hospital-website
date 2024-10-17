
import './index.css'

function Service () {
    return(
        <section id="service">
        <h1 className="text-center my-5" data-aos="fade-up" data-aos-duration="1000">
          Our Service
        </h1>
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-6 col-lg-3 mt-4"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <div className="card card-1">
                <i className="fa-solid fa-heart-pulse"></i>
                <div className="card-body">
                  <h5 className="card-title">Total care</h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere maxime voluptatibus minima velit et atque iusto totam
                    recusandae corporis assumenda
                  </p>
                  <a href="#" className="btn">Learn More</a>
                </div>
              </div>
            </div>
  
            <div
              className="col-12 col-md-6 col-lg-3 mt-4"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="card card-2">
                <i className="fa-solid fa-user-doctor"></i>
                <div className="card-body">
                  <h5 className="card-title">Expert Doctors</h5>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere maxime voluptatibus minima velit et atque iusto totam
                    recusandae corporis assumenda
                  </p>
                  <a href="#" className="btn">Learn More</a>
                </div>
              </div>
            </div>

            {/* 

             <div class="col-12 col-md-6 col-lg-2">
  
              <div class="card" >
                <i class="fa-solid fa-pills"></i>
                <div class="card-body body-3  ">
                  <h5 class="card-title">Medicines</h5>
                  <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere maxime voluptatibus minima velit et atque iusto totam recusandae corporis assumenda</p>
                  <a href="#" class="btn">Learn More</a>
                </div>
              </div>
  
            </div>
             */}
  
            
            <div
              className="col-12 col-md-6 col-lg-3 mt-4"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <div className="card card-3">
                <i className="fa-solid fa-bed-pulse"></i>
                <div className="card-body">
                  <h5 className="card-title">Bed Facillty</h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere maxime voluptatibus minima velit et atque iusto totam
                    recusandae corporis assumenda
                  </p>
                  <a href="#" className="btn">Learn More</a>
                </div>
              </div>
            </div>

            {/* 

              <div class="col-12 col-md-6 col-lg-2">
  
  
              <div class="card" >
                <i class="fa-solid fa-notes-medical"></i>
                <div class="card-body body-5  ">
                  <h5 class="card-title">Free Checkup</h5>
                  <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere maxime voluptatibus minima velit et atque iusto totam recusandae corporis assumenda</p>
                  <a href="#" class="btn">Learn More</a>
                </div>
              </div>
  
            </div> -->

             */}
  
            
  
            <div
              className="col-12 col-md-6 col-lg-3 mt-4"
              data-aos="fade-up-left"
              data-aos-duration="1200"
            >
              <div className="card card-4">
                <i className="fa-solid fa-truck-medical"></i>
                <div className="card-body body-6">
                  <h5 className="card-title">
                    <span className="text-danger">24/7</span> Ambulance
                  </h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere maxime voluptatibus minima velit et atque iusto totam
                    recusandae corporis assumenda
                  </p>
                  <a href="#" className="btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Service;
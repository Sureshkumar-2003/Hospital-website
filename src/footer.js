
import './index.css'
import logo from "./image/header .logo.png"


function Footer (){
    return(
        <section id="footer" className="mt-5">

        <div className="container-fluid  my-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up-right" data-aos-duration="1200">

              <div className="d-flex align-items-center justify-content-center foot-logo">

                <div >
                  {/* <img src="image/header .logo.png" width="300px" height="300px" alt="nav-logo" /> */}
                  <img src={logo} width="300px" height="300px"></img>

                </div>
                <h3>SKS HOSPITAL</h3>

              </div>
              

            </div>

            <div className="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up-right" data-aos-duration="1000">
              <h2 className="my-4">Tags</h2>

              <div className="my-2">
                <button>Medical care</button>
              </div>
              <div className="my-2">
                <button>Emergency</button>

              </div>

              <div className="my-2">
                <button>Surgery</button>

              </div>

              <div  className="my-2">
              <button>Nurse</button>

              </div>

            </div>


            <div className="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up-left" data-aos-duration="1000">
              <h2 className="my-4">Quick Links</h2>
              <p>Our Service</p>
              <p>Our Plan</p>
              <p> Privacy Policy</p>
              <p>Appoinment Schedule</p>

            </div>


            <div className="col-12 col-md-6 col-lg-3 text-center" data-aos="fade-up-left" data-aos-duration="1000">
              <h2 className="my-4">MAKE AN APPOINMENT</h2>
              <div>
              <h5>8:00 AM - 11:00 AM</h5>
              <h5>2:00 PM - 5:00 AM</h5>
              <h5>8:00 PM - 11:00 PM</h5>
              </div>
            

              <div>
                <p><i class="fa-solid fa-envelope mx-2 text-danger"></i> sureshmoni01@gmail.com</p>
              </div>

              <div>
                <p><i class="fa-solid fa-phone mx-2 text-danger"></i>+91-7810035479</p>
              </div>

            </div>


                     
            <div className="col-12" data-aos="fade-up" data-aos-duration="500" >

              <hr data-aos="fade-up" data-aos-duration="500"/>

              <div className="footer-icon text-center my-4">
               <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook"></i>
               </a> 
               <a href="https://in.linkedin.com/" >
                <i className="fa-brands fa-linkedin-in"></i>

               </a>
               <a href="https://x.com/">
                <i className="fa-brands fa-twitter"></i>
                     
               </a>
              </div>

            </div>
            
          </div>
        </div>

       </section>
    )
};

export default Footer;
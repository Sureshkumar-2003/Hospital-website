
import './index.css';
import homeImage from "./image/group-medical-specialists-hospital-with-leading-doctor.png";
import Appoimg from  './image/hospital-.png';







function Home() {


  

const Click=()=>{
//  alert("hello");
 const ApToggle = document.querySelector("#ap-toggle");
 const ApButton = document.querySelector(".appoinment");
 const CloseBtn =document.querySelector(".remove-icon");
 const submit =document.querySelector("#submit");



    //click open function

    ApToggle.addEventListener("click",function () {
    ApButton.classList.add("active");



    // click close function


    CloseBtn.addEventListener("click",function(){

        ApButton.classList.remove("active");

    })

    
});




}
   
 
  return (
    <main id="home">

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center mt-4">
          <div className="col-12 col-md-6 col-lg-6" data-aos="fade-up-right" data-aos-duration="1200">
            <div className="image-fluid home-img">
              <img src={homeImage}></img>
              {/* <img src="image/group-medical-specialists-hospital-with-leading-doctor.png" alt="home-img" /> */}
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 home-content p-2 text-center mt-4">
            <h3 className="text-dark" data-aos="fade-up-right" data-aos-duration="1000">
              Welcome To <span className="text-danger">Hospital</span> Management
            </h3>
            <h1 className="mt-3" data-aos="fade-up-left" data-aos-duration="1100">
              We Take Care Of Our Patients Health
            </h1>
            <p className="mt-3" data-aos="fade-up-right" data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique fugiat porro nulla veniam.
            </p>
            <div className="home-btn mt-3">
              <button className="btn bg-warning me-3" data-aos="fade-up" data-aos-duration="1000">
                Read More
              </button>
              <button onClick={Click} className="btn bg-info" id="ap-toggle" data-aos="fade-up" data-aos-duration="1000">
                Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

           {/* Appoinment form */}

      <section className="appoinment">
        <div className="container bg-white">
          <div class="remove-icon">
            <i class="fa-solid fa-xmark"></i>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="div">
                {/* <img
                  src="image/hospital-.png"
                  className="w-100"
                  alt="hospital-pic"
                /> */}

                <img src={Appoimg}  className="w-100"></img>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <form className="p-2">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label"
                    >Patient Name: </label >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Patient name"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label"
                    >Date Of Birth</label >

                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter your DOB"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label"
                    >Age:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Date & Time</label>
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Enter your age"
                  />
                </div>

                <button type="submit" id='submit' className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      

  
    </main>
  );
}





export default Home;

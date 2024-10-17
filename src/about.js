import './index.css';
import aboutimage from './image/ab-home.avif'
import gal1 from './image/our-h-1.avif'
import gal2 from './image/our-h2.jpg'
import gal3 from './image/our-3.avif'
import gal4 from './image/our-h4.avif'



function About() {
  return (
    <section id="about">
      <h1 className="text-center my-5" data-aos="fade-up" data-aos-duration="1000">
        About Us
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 about-content" data-aos="fade-up-right" data-aos-duration="1300">
            <h2 className="text-center">SKS Hospital</h2>
            <p className="mt-3">
              A hospital is an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and injured; and for their housing during this process. The modern hospital often serves as a center for investigation and teaching. To better serve the wide-ranging needs of the community, hospitals have developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. "Bedless hospitals" provide strictly ambulatory (outpatient) care and day surgery, allowing patients to arrive for short appointments or stay for treatment before being discharged for follow-up by a primary care provider. While hospitals exist in most countries, developing countries often lack sufficient facilities, equipment, and trained staff, leading to lower life expectancies and inadequate access to modern medicine.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 ab-img" data-aos="fade-up-left" data-aos-duration="1300">
            {/* <img src="image/ab-home.avif" width="100%" height="450px" alt="A view of SKS Hospital" /> */}
            <img src={aboutimage} width="100%" height="400px" alt='hospital image'></img>
          </div>
        </div>

        {/* Our Hospital Image Gallery */}

        <div className="row mt-5 gallery">
          <div
            className="col-12 col-md-6 col-lg-3 mt-2 "
            data-aos="fade-up-right"
            data-aos-duration="1300"
          >
            <div className="about-gallery">
              {/* <img src="image/our-h-1.avif" alt="image" /> */}
            <img src={gal1} alt='hospital image'></img>

              <h4>Doctor</h4>
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-3 mt-2"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <div class="about-gallery">
              {/* <img src="image/our-h2.jpg" alt="pic" /> */}
            <img src={gal2} alt='hospital image'></img>

              <h4>patient</h4>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 mt-2"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <div className="about-gallery">
              {/* <img src="image/our-3.avif" alt="pic" /> */}
            <img src={gal3} alt='hospital image'></img>

              <h4>Opreation Theater</h4>
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 mt-2"
            data-aos="fade-up-left"
            data-aos-duration="1300"
          >
            <div className="about-gallery">
              {/* <img src="image/our-h4.avif" alt="pic" /> */}
            <img src={gal4} alt='hospital image'></img>

              <h4>Lab</h4>
            </div>
          </div>
        </div>

      
      </div>

       {/* emergency section */}

   
     
    </section>
  );
}

export default About;

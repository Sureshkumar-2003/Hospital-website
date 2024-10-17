import './index.css';

import formimage from './image/contact.png'

function Contact (){
    return(
        <section id="contact">
      <h1 className="text-center my-5 " data-aos="fade-up" data-aos-duration="1000">Contact Us</h1>
      <div className="container">
        <div className="row">
          <div class="col-12 col-md-6 col-lg-6 text-center" data-aos="fade-up-right" data-aos-duration="1200">
            {/* <img src="image/contact.png" alt="image"> */}
            <img src={formimage} alt='image'></img>

          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5" data-aos="fade-up-left" data-aos-duration="1200">
            <form className="contact-form">

              <div className="form-floating mb-3">
                <input type="text" className="form-control"  placeholder="name"/>
                <label for="floatingInput">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating my-2">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>


              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
};


export default Contact;
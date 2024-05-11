export default function Hero() {
  return (
    <section className="herosection herobgcolor mt-4">
      <div className="container pt-5 pb-5 d-flex flex-wrap justify-content-around">
        <img src="images/heroimg.png"></img>
        <div className="d-flex flex-wrap flex-column justify-content-center">
          <p className="mainbluecolor fw-bold fs-1 mb-4 lh-sm">
            Powerful Digital IT<br></br> Service for Your<br></br> Business
          </p>
          <p className="fs-4">
            Powerful IT solutions, empowering clients to thrive in the<br></br>{" "}
            digital landscape with unparalleled success.
          </p>
          <div className="shadow d-flex justify-content-between mb-4 mt-3">
              <input className="boxmail p-3" type="email" placeholder="Enter Your Email Address"></input>
            <button
                class="btn btn-primary rounded-0 mainblue border border-0"
                type="submit"
              >
               <a href="mailto:circleofhope1@gmail.com" class="text-decoration-none fw-normal text-light">Send Enquiry</a>
              </button>
          </div>
          <div className="d-flex align-items-center">
            <img src="images/circleimg.png" className="me-3"></img>
            <p>Over <span className="fw-bold mainbluecolor">10,000+</span>Clients in the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

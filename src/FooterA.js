export default function FooterA() {
  return (
    <section id="contact" className="footer1 py-5 mainblue text-light">
      <div className="container d-flex flex-wrap justify-content-around ">
        <div className="hei">
          <div className="mb-3">
            <p className="fs-5 fw-normal text-light">
              Have quick{" "}
              <span className="text-decoration-underline link-offset-2">
                access
              </span>
            </p>
            <p className="fs-2 fw-medium text-light">Quick Links</p>
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            <ul>
              <a href="#about">
                <li className="mb-3">About</li>
              </a>
              <a href="#services">
                <li className="mb-3">Services</li>
              </a>
              <a href="#contact">
                <li className="mb-3">Privacy Policy</li>
              </a>
            </ul>
            <ul className="me-4">
              <a href="#career">
                <li className="mb-3">Career</li>
              </a>
              <a href="#career">
                <li className="mb-3">Drop Your CV</li>
              </a>
              <a href="#contact">
                <li className="mb-3">Current Opening</li>
              </a>
            </ul>
            <ul>
              <a href="#contact">
                <li className="mb-3">Contact Us</li>
              </a>
              <a href="#contact">
                <li className="mb-3">Terms of Use</li>
              </a>
              <a href="#contact">
                <li className="mb-3">News & Events</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="heis">
        <p className="fs-2 mb-3 fw-medium text-light">Contact Us</p>
          
          {/* <br></br> */}
          <br></br>
          <address>
            <p>
              OmniTechno Nepal Pvt. Ltd.<br></br>
              429 Putalisadak<br></br>
              <a href="mailto:omnitechno@gmail.com" className="text-light">
                PO Box 6058
              </a>
              <br></br>
              Kathmandu, Nepal
            </p>
            <a href="tel:+977-1-568248" className="text-light">
              Tel: +977-1-568248
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}

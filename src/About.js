export default function About() {
  return (
    <section className="my-5">
      <div className="container d-flex flex-wrap justify-content-evenly">
        <div className="">
          <p className="fs-5 fw-bold mainbluecolor">
            ABOUT OUR{" "}
            <span className="text-decoration-underline link-offset-2">
              COMPANY
            </span>
          </p>
          <p className="fs-2 fw-bold mainbluecolor">
            Exclusive Technology To<br></br>Provide IT Solutions
          </p>
          <p className="">
            OmniTechno is a leading IT company renowned for its expertise
            <br></br> in web development, SEO marketing, and Google ranking{" "}
            <br></br>
            strategies, empowering clients to thrive in the digital landscape
            <br></br> with unparalleled success.
          </p>
          <hr></hr>
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <div
                class="d-flex flex-wrap  my-3 align-items-center btn btn-primary rounded-0 fw-medium border border-0 mainblue"
                type="submit"
              >
                <div className="circle me-2"></div>
                Targeted Audience
              </div>
              <div
                class="d-flex flex-wrap my-3 align-items-center btn btn-primary rounded-0 fw-medium border border-0 mainblue"
                type="submit"
              >
                <div className="circle me-2"></div>
                Sales Increment
              </div>
            </div>

            <div>
              <div
                class="d-flex flex-wrap align-items-center my-3 btn btn-primary rounded-0 fw-medium border border-0 mainblue"
                type="submit"
              >
                <div className="circle me-2"></div>
                Quick Support
              </div>
              <div
                class="d-flex flex-wrap align-items-center my-3 btn btn-primary rounded-0 fw-medium border border-0 mainblue"
                type="submit"
              >
                <div className="circle me-2"></div>
                Business Applicationn
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly align-items-center">
          <div className="me-5">
            <div className="mainblue p-2 d-flex justify-content-center align-items-center rounded-pill my-4">
              <img src="images/david.png"></img>
              <div className="pe-3">
                <p className="fs-5 fw-medium text-light">David Peterson</p>
                <p className="text-center fs-6 text-light">CEO & Founder</p>
              </div>
            </div>
            <img src="images/discuss.png"></img>
          </div>
          <div className="mt-4">
            <img src="images/worker.png"></img>
            <div className="mainblue p-2 d-flex justify-content-center align-items-center mt-4">
              <div className="pe-3 ">
                <p className="text-center fw-medium text-light mb-2">
                  Our Team
                </p>
                <img src="images/team-circle.png"></img>
                <p className="text-center text-light mt-2">Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Data from "./Data";

export default function Testimonials() {
  return (
    <section className="my-5 py-4">
      <div className="container">
        <p className="fs-2 fw-bold mainbluecolor">Customer’s Testimonials</p>
        <div className="row ">
          <div className="col-sm-3 my-4 me-4">
            <Data
            img="images/Nora.png"
            detail="Web development: flawless execution, exceeded expectations, highly recommended for any project."></Data>
          </div>
          <div className="col-sm-5 my-4 me-4">
            <Data
             img="images/Zyan.png"
             detail=' SEO marketing significantly boosted our online visibility and drove substantial traffic. Exceptional service, highly recommend their expertise!'>

            </Data>
          </div>
          <div className="col-sm-3 my-4">
            <Data
             img="images/Zadi.png"
             detail='Web development exceeded expectations; sleek design, smooth functionality, highly satisfied.'>

            </Data>
          </div>
        </div>
      </div>
    </section>
  );
}

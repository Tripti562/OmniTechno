import Card from "./Card";

export default function Services() {
  return (
    <section id="services" className="services py-5 herobgcolor">
      <div className="container">
        <div>
          <p className="fs-5 fw-bold mainbluecolor">
            BEST{" "}
            <span className="text-decoration-underline link-offset-2">
              SERVICES
            </span>
          </p>
          <p className="fs-2 fw-bold mainbluecolor">Fully Dedicated Services</p>
        </div>
        <div className="row  my-3">
          <div className="col-sm-6 col-lg-3 g-4">
            <Card
              img="images/webd.png"
              servicename="Web Development"
              detail="Crafting digital experiences that seamlessly blend creativity and functionality to captivate users."
            ></Card>
          </div>
          <div className="col-sm-6 col-lg-3 g-4">
            <Card
              img="images/UI.png"
              servicename="Interface Design"
              detail="Designing intuitive interfaces that harmonize aesthetics and usability, guiding users effortlessly through engaging digital experiences."
            ></Card>
          </div>
          <div className="col-sm-6 col-lg-3 g-4">
            <Card
              img="images/GR.png"
              servicename="Google Ranking"
              detail="Strategically optimizing content and leveraging SEO techniques to enhance visibility and climb the ranks on Google."
            ></Card>
          </div>
          <div className="col-sm-6 col-lg-3 g-4">
            <Card
              img="images/SEO.png"
              servicename="SEO Marketing"
              detail="Elevating brands through strategic SEO tactics, driving traffic, boosting visibility, and maximizing online presence for lasting success."
            ></Card>
          </div>
        </div>
      </div>
    </section>
  );
}

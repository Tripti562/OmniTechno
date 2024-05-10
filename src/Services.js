import Card from "./Card";

export default function Services() {
  return (
    <section className="services my-5">
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
        <div className="row my-3">
          <div className='col-sm-3 col-md-3'>
             <Card
              img='images/david.png'
              servicename='Web Development'
              detail='Crafting digital experiences that seamlessly blend creativity and functionality to captivate users and elevate brands to new heights.'>
              </Card>
          </div>
          <div className='col-sm-3 col-md-3'>
             <Card
              img='images/david.png'
              servicename='Interface Design'
              detail='Designing intuitive interfaces that harmonize aesthetics and usability, guiding users effortlessly through engaging digital experiences.'>
              </Card>
          </div>
          <div className='col-sm-3 col-md-3'>
             <Card
              img='images/david.png'
              servicename='Google Ranking'
              detail='Strategically optimizing content and leveraging SEO techniques to enhance visibility and climb the ranks on Google.'>
              </Card>
          </div>
          <div className='col-sm-3 col-md-3'>
             <Card
              img='images/david.png'
              servicename='SEO Marketing'
              detail='Elevating brands through strategic SEO tactics, driving traffic, boosting visibility, and maximizing online presence for lasting success.'>
              </Card>
          </div>
        </div>
        
      </div>
    </section>
  );
}

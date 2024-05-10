export default function Card(props) {
  return (
    <div className="shadow point p-4">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
      <img src={props.img} class="me-3"></img>
      <span className="fw-bold fs-5">{props.servicename}</span>
      </div>
      
      <p className="fw-normal my-3">{props.detail}</p>
      <a href="#" className="">
        Learn More
      </a>
    </div>
  );
}

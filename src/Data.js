export default function Data(props) {
  return (
    <div className="shadow points p-4 rounded">
      <div className="d-flex flex-wrap justify-content-center align-items-center height">
        <div className="">
        <img src={props.img} class="me-3"></img>
        </div>
        
        <p className="fw-normal grcolor text-center">{props.detail}</p>
      </div>
    </div>
  );
}

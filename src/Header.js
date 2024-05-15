import Services from "./Services";

export default function Header() {
  return (
    <section className="header">
      <nav className="navbar shadow navbar-expand-lg top">
        <div className="container d-flex flex-row justify-content-center align-items-center">
          <a className="navbar-brand" href="#">
            <img src="images/logo.png"></img>
          </a>

          <div
            className="collapse  navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#career">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="register btn btn-primary rounded-0 fw-medium border border-0 mainblue"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="ham-menu">
          <div className="menu" onclick="toggleMenu()">
            <img src="images/List.svg" className="svg me-4"></img>
          </div>
          <div className="menu-links">
            <a href="#" onclick="toggleMenu()">
              <li className=" pe-8 ">Home</li>
            </a>
            <a href="#stories" onclick="toggleMenu()">
              <li className="pe-8 ">Stories</li>
            </a>
            <a href="#events" onclick="toggleMenu()">
              <li className="pe-8 ">Events</li>
            </a>
            <a href="#blog" onclick="toggleMenu()">
              <li className="pe-8 ">Blog</li>
            </a>
            <button className="donates m-2 orange rounded-3xl text-white font-medium flex justify-center items-center pt-2 pb-2 px-4 text-base">
              <img className="me-1" src="svg/svg-top/HeartFill.svg" alt="" />
              Donate
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

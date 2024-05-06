export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container d-flex flex-row justify-content-center align-items-center">
        <a class="navbar-brand" href="#">
          <img src="images/logo.png"></img>
        </a>

        <div class="collapse  navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Project
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Career
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          class="btn btn-primary rounded-0 fw-medium border border-0 mainblue"
          type="submit"
        >
          Register
        </button>
      </div>
    </nav>
  );
}

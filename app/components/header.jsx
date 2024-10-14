export default function Header() {
  return (
    <nav className="lg:mx-40 lg:my-8 navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Tomo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse lg:flex lg:justify-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item lg:px-4">
              <a className="nav-link active" aria-current="page" href="#">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item lg:px-4">
              <a className="nav-link" href="#">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item lg:px-4">
              <a className="nav-link" href="#">
                PROJECTS
              </a>
            </li>
            <li className="nav-item lg:px-4">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

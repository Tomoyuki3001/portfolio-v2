export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="bg-white container-fluid">
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
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item bg-white">
              <a className="nav-link active" aria-current="page" href="#">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item bg-white">
              <a className="nav-link" href="#">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item bg-white">
              <a className="nav-link" href="#">
                PROJECTS
              </a>
            </li>
            <li className="nav-item bg-white">
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

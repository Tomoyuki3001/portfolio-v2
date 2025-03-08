"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoBlack from "../../public/images/logo-black.png";
import LogoWhite from "../../public/images/logo-white.png";

export default function Header() {
  const [navBg, setNavBg] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [logo, setLogo] = useState(LogoWhite);
  const [menu, setMenu] = useState(`url(/images/menu-white.png)`);

  useEffect(() => {
    const changeTheStyle = () => {
      if (window.scrollY >= 20) {
        setNavBg("#ffffff");
        setTextColor("#000000");
        setLogo(LogoBlack);
        setMenu(`url(/images/menu-black.png)`);
      } else {
        setNavBg("transparent");
        setTextColor("#ffffff");
        setLogo(LogoWhite);
        setMenu(`url(/images/menu-white.png)`);
      }
    };
    window.addEventListener("scroll", changeTheStyle);
  }, []);

  return (
    <section
      className="z-[100] fixed top-0 w-full ease-in-out duration-300 drop-shadow-xl"
      style={{ backgroundColor: navBg }}
      id="navbar-example2"
    >
      <nav className="navbar navbar-expand-lg navbar-light lg:mx-56 lg:my-1">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="My logo" width={120} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "2px solid transparent" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundImage: menu }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse lg:flex lg:justify-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item lg:px-4">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#scrollspyHeading1"
                  style={{ color: textColor }}
                >
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item lg:px-4">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#experience"
                  style={{ color: textColor }}
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item lg:px-4">
                <a
                  className="nav-link"
                  href="#project"
                  style={{ color: textColor }}
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item lg:px-4">
                <a
                  className="nav-link"
                  href="#contact"
                  style={{ color: textColor }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

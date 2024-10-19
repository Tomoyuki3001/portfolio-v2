"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoWhite from "../../public/images/logo-white.png";
import LogoBlack from "../../public/images/logo-black.png";

export default function Header() {
  const [navBg, setNavBg] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [logo, setLogo] = useState(LogoWhite);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setNavBg("#ffffff");
        setTextColor("#000000");
        setLogo(LogoBlack);
      } else {
        setNavBg("transparent");
        setTextColor("#ffffff");
        setLogo(LogoWhite);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <section
      className="z-[100] fixed top-0 w-full ease-in-out duration-300 drop-shadow-xl"
      style={{ backgroundColor: navBg }}
    >
      <nav className="navbar navbar-expand-lg navbar-light lg:mx-56 lg:my-8">
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
          >
            <span className="navbar-toggler-icon"></span>
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
                  href="#bio"
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

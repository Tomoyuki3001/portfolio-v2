"use client";

import Header from "./components/header";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Introduction from "./components/introduction";
import Top from "./components/top";
import Contact from "./components/contact";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {
  const [topLink, setTopLink] = useState("none");

  useEffect(() => {
    const changeLinkStyle = () => {
      if (window.scrollY > 1500) {
        setTopLink("block");
      } else {
        setTopLink("none");
      }
    };
    window.addEventListener("scroll", changeLinkStyle);
  }, []);

  return (
    <>
      <Header />
      <Top />
      <div className="lg:px-60">
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <button
        type="button"
        className="btn btn-danger btn-floating btn-lg fixed bottom-10 right-10 !p-4 !bg-sky-500 hover:!bg-sky-700 !border-none"
        style={{ display: topLink }}
        id="btn-back-to-top"
      >
        <a href="#" className="text-white">
          <IoIosArrowUp size={30} />
        </a>
      </button>
    </>
  );
}

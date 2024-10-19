import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Introduction from "./components/introduction";
import Top from "./components/top";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <div className="lg:px-72 bg-gray-50">
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

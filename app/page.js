import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Introduction from "./components/introduction";
import Top from "./components/top";

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <div className="lg:mx-60 px-4">
        <Introduction />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

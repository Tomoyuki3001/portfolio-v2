import Image from "next/image";
import Header from "./components/header";
import Footer from "./footer";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Introduction from "./components/introduction";
import Top from "./components/top";

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <Introduction />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

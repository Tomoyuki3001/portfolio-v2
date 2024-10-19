import { PiCodeLight } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";

export default function Experience() {
  const experience = [
    {
      id: 6,
      image: <PiCodeLight size={50} />,
      title: "Full-Stack Developer",
      url: "https://connec10.co.jp/",
      name: "CONNECT Inc.",
      term: "Sep 2024 - Present",
      skills: "JavaScript, PHP, Laravel, MySQL",
    },
    {
      id: 5,
      image: <PiCodeLight size={50} />,
      title: "Front-End Developer Intern",
      url: "https://www.linkedin.com/company/onyx-creative-media/",
      name: "Onyx Creative Media",
      term: "Mar 2024 - May 2024",
      skills: "HTML/CSS, JavaScript, GoDaddy",
    },
    {
      id: 4,
      image: <PiCodeLight size={50} />,
      title: "Front-End Developer Intern",
      url: "https://gaorfid.com/",
      name: "GAO RFID",
      term: "Nov 2023 - Feb 2024",
      skills: "JavaScript, PHP, WordPress",
    },
    {
      id: 3,
      image: <PiCodeLight size={50} />,
      title: "Front-End Developer Intern",
      url: "https://tellext.com/",
      name: "Tellext",
      term: "Feb 2023 - Jul 2023",
      skills: "React, Next, WordPress",
    },
    {
      id: 2,
      image: <PiCodeLight size={50} />,
      title: "Front-End Developer Intern",
      url: "https://www.onecommunityglobal.org/",
      name: "One Community Global",
      term: "Mar 2023 - Apr 2023",
      skills: "HTML/CSS, JavaScript",
    },
    {
      id: 1,
      image: <VscGraphLine size={50} />,
      title: "Sales Representative",
      url: "https://dunlopsports.com/",
      name: "Dunlop Sports",
      term: "Apr 2018 - Jun 2021",
      skills: "DUNLOP / BabolaT",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full flex flex-col items-center py-36"
    >
      <div>
        <div className="text-center mb-12">
          <p className="uppercase mb-8 text-xl tracking-widest text-gray-500">
            Experience
          </p>
          <h2>What I&apos;ve Worked</h2>
        </div>
        <div className="container">
          <div className="row justify-content-start g-4">
            {experience.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className="border p-4 flex flex-col items-center  h-full">
                  <div className="mb-6">{item.image}</div>
                  <p className="font-bold">{item.title}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#339AF0] no-underline my-2"
                  >
                    {item.name}
                  </a>
                  <p className="">{item.term}</p>
                  <p className="">{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

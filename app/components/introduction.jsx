import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import Profile from "../../public/images/profile.jpg";

export default function Introduction() {
  const linkButtonStyle =
    "rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-gray-900";

  return (
    <section id="bio" className="w-full flex items-center py-36">
      <div>
        <div className="text-center mb-12">
          <p className="uppercase mb-8 text-xl tracking-widest text-gray-500">
            About
          </p>
          <h2>Who I Am</h2>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/2 flex flex-col items-center p-2">
            <Image
              src={Profile}
              className="rounded"
              alt="My profile image"
              width={450}
            />
          </div>
          <div className="lg:w-1/2 text-lg lg:p-6 p-2">
            <p>Hello, my name is Tomoyuki Fujii(Tomo).</p>
            <br />
            <p>
              I started my web development journey at{" "}
              <span>
                <a
                  className="text-[#339AF0] no-underline"
                  href="https://ciccc.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cornerstone International Community College of Canada
                </a>
              </span>
              , mastering HTML/CSS, JavaScript, React, Node.js, and MySQL in
              2022. After my class term, I started working on some internship
              using React, TypeScript, and WordPress to specialize in creating
              user and mobile friendly full-stack applications and websites.
            </p>
            <br />
            <p>
              I have previously worked as a Sales and Marketing Representative
              at a company and I can bring my knowledge of SEO strategies and
              marketing experience.
            </p>
            <br />
            <p>
              In my free time, I enjoy playing tennis and running outside. I
              went to the Laver Cup 2023 in Vancouver and it was my first time
              watching an international tennis game like a grand slam. My
              favorite players are Denis Shapovalov and Ben Shelton.
            </p>
            <br />
            <p>
              As my project, I have created{" "}
              <span>
                <a
                  className="text-[#339AF0] no-underline"
                  href="https://vancouver-tennis.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vancouver Tennis Guide
                </a>
              </span>{" "}
              which is a website designed for anyone who is interested in
              playing tennis in Vancouver, whether you are a beginner or you
              want to improve your tennis skills.
            </p>
            <div className="lg:px-24">
              <div className="flex justify-around py-16">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
                >
                  <div className={linkButtonStyle}>
                    <FaLinkedin size={25} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Tomoyuki3001"
                >
                  <div className={linkButtonStyle}>
                    <FaGithub size={25} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:mjr01300828@gmail.com"
                >
                  <div className={linkButtonStyle}>
                    <VscMail size={25} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

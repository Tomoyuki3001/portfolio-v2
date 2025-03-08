import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="flex flex-col items-center py-16 bg-gray-900 text-white">
      <div className="flex mb-6">
        <a
          target="_blank"
          className="text-inherit"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          target="_blank"
          className="text-inherit mx-6"
          rel="noopener noreferrer"
          href="https://github.com/Tomoyuki3001"
        >
          <FaGithub size={30} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit"
          href="mailto:mjr01300828@gmail.com"
        >
          <VscMail size={30} />
        </a>
      </div>
      <p className="sm:text-xs text-sm">
        © Copyright - Tomoyuki Fujii {year} All Rights Reserved
      </p>
    </section>
  );
}

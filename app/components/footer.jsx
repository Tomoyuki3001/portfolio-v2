import { FaLinkedin, FaGithub } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";

export default function Footer() {
  return (
    <section className="flex flex-col items-center py-16 bg-gray-900 text-white">
      <div className="flex mb-6">
        <div>
          <FaLinkedin size={40} />
        </div>
        <div className="mx-6">
          <FaGithub color="white" size={40} />
        </div>
        <div>
          <VscMail color="white" size={40} />
        </div>
      </div>
      <p className="sm:text-xs text-sm">
        © Copyright - Tomoyuki Fujii 2024 All Rights Reserved
      </p>
    </section>
  );
}

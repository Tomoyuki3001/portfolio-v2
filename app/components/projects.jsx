import { BsChatLeftDots } from "react-icons/bs";
import { MdOutlineHealthAndSafety, MdOutlineCelebration } from "react-icons/md";
import { GiWeightLiftingUp, GiMeal } from "react-icons/gi";
import { CiBank, CiLocationArrow1 } from "react-icons/ci";
import { PiTennisBallLight, PiShoppingCartSimpleLight } from "react-icons/pi";
import {
  IoGameControllerOutline,
  IoDocumentTextOutline,
  IoPartlySunnyOutline,
} from "react-icons/io5";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: <MdOutlineCelebration size={50} />,
      name: "Birthday Celeblations",
      demo: "https://hbd-template.vercel.app/",
      description:
        "This is a website which has all of materials what you want to send your patner.",
      code: "https://github.com/Tomoyuki3001/hbd-template",
      skills: "React, CSS(Tailwind)",
    },
    {
      id: 2,
      image: <IoPartlySunnyOutline size={50} />,
      name: "Weather App",
      demo: "https://tomoyuki3001.github.io/weather-react-apps/",
      description:
        "User-friendly simplicity and avoiding unnecessary complexities for ease of use.",
      code: "https://github.com/Tomoyuki3001/weather-react-apps",
      skills: "React, Weather API",
    },
    {
      id: 3,
      image: <IoDocumentTextOutline size={50} />,
      name: "My Memo",
      demo: "https://tomoyuki3001.github.io/to-do-list/",
      description:
        "Using modern programming languages and an improved database structure.",
      code: "https://github.com/Tomoyuki3001/to-do-list",
      skills: "React, Firebase",
    },
    {
      id: 4,
      image: <IoGameControllerOutline size={50} />,
      name: "Hangman",
      demo: "https://typescript-practice-1.vercel.app/",
      description:
        "Typing game that generates a Hangman figure with a word for players to guess.",
      code: "https://github.com/Tomoyuki3001/typescript-practice-1",
      skills: "TypeScript, Node.js",
    },
    {
      id: 5,
      image: <PiShoppingCartSimpleLight size={50} />,
      name: "Small E-commerce",
      demo: "https://shopping-cart-typescript-ashen.vercel.app/",
      description:
        "Users can save products, adjust quantities, and remove items from their cart.",
      code: "https://github.com/Tomoyuki3001/shopping-cart-typescript",
      skills: "TypeScript, JSON",
    },
    {
      id: 6,
      image: <GiMeal size={50} />,
      name: "TM Recipes",
      demo: "https://food-recipes-tomo.netlify.app/",
      description:
        "The recipes, sourced from an API, can be easily found using various keywords.",
      code: "https://github.com/Tomoyuki3001/food-recipes-app",
      skills: "React, Recipe API",
    },
    {
      id: 7,
      image: <PiTennisBallLight size={50} />,
      name: "Vancouver Tennis Guide",
      demo: "https://vancouver-tennis.vercel.app/",
      description:
        "This is a website designed for anyone who is interested in playing tennis in Vancouver.",
      code: "https://github.com/Tomoyuki3001/van-tennis",
      skills: "React, CSS(Tailwind)",
    },
    {
      id: 8,
      image: <CiLocationArrow1 size={50} />,
      name: "Tellext Inc.",
      demo: "https://tellext.com/",
      description:
        "Worked on designing this company website using WordPress and JavaScript.",
      code: "",
      skills: "JavaScript, WordPress",
    },
    {
      id: 9,
      image: <CiLocationArrow1 size={50} />,
      name: "Onyx Creative Media",
      demo: "https://onyx-creative.com/",
      description: "Worked on designing this company website using GoDaddy.",
      code: "",
      skills: "GoDaddy",
    },
    {
      id: 10,
      image: <CiBank size={50} />,
      name: "Secret Account",
      demo: "https://auth-app-topaz-nine.vercel.app/",
      description:
        "Users can create track logs, and utilize a database for data management.",
      code: "https://github.com/Tomoyuki3001/auth-app",
      skills: "React, Firebase",
    },
    {
      id: 11,
      image: <GiWeightLiftingUp size={50} />,
      name: "Workout Tracking",
      demo: "https://workout-record.vercel.app/",
      description:
        "Users can record the training, edit each log, and update their profile.",
      code: "https://github.com/Tomoyuki3001/workout-record",
      skills: "React, Node, Express, MongoDB",
    },
    {
      id: 12,
      image: <MdOutlineHealthAndSafety size={50} />,
      name: "Health Management",
      demo: "https://mern-health-front.vercel.app/",
      description:
        "Users can create new doctor appointments, manage account statuses.",
      code: "https://github.com/Tomoyuki3001/mern-health",
      skills: "React, Node, Express, MongoDB",
    },
    {
      id: 13,
      image: <BsChatLeftDots size={50} />,
      name: "Chat App",
      demo: "https://mern-chat-app-lilac.vercel.app/",
      description:
        "Users can create an account, send messages, and create a chat group.",
      code: "https://github.com/Tomoyuki3001/mern-chat",
      skills: "Next.js, Prisma, MongoDB",
    },
  ];

  const reversedProjectArray = [...projects].reverse();
  return (
    <section
      id="project"
      className="w-full flex flex-col items-center py-20 lg:py-36"
    >
      <div>
        <div className="text-center mb-12">
          <p className="uppercase mb-8 text-xl tracking-widest text-gray-500">
            Projects
          </p>
          <h2>What I&apos;ve Built</h2>
        </div>
        <div className="container px-4 lg:px-0">
          <div className="row justify-content-start g-4">
            {reversedProjectArray.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className="border p-4 flex flex-col items-center text-center h-full">
                  <div className="mb-6 text-gray-500">{item.image}</div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xl">
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl text-[#339AF0] no-underline"
                    >
                      Demo{" "}
                    </a>
                    <span>{item.code === "" ? "" : "|"}</span>
                    <a
                      href={item.code}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl text-[#339AF0] no-underline"
                    >
                      {item.code === "" ? "" : " Code"}
                    </a>
                  </p>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

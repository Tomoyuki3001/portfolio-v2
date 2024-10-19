export default function Top() {
  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center items-center bg-blue-200"
    >
      <div className="text-center">
        <h2 className="py-4 text-white">Hello!</h2>
        <div className="waviy">
          <span className="waviy-span" style={{ "--i": 1 }}>
            I
          </span>
          <p className="waviy-span" style={{ "--i": 2 }}>
            &nbsp;
          </p>
          <span className="waviy-span" style={{ "--i": 3 }}>
            a
          </span>
          <span className="waviy-span" style={{ "--i": 4 }}>
            m
          </span>
          <p className="waviy-span" style={{ "--i": 5 }}>
            &nbsp;
          </p>
          <span className="waviy-span" style={{ "--i": 6 }}>
            T
          </span>
          <span className="waviy-span" style={{ "--i": 7 }}>
            o
          </span>
          <span className="waviy-span" style={{ "--i": 8 }}>
            m
          </span>
          <span className="waviy-span" style={{ "--i": 9 }}>
            o
          </span>
          <span className="waviy-span" style={{ "--i": 10 }}>
            .
          </span>
        </div>
        <p className="pt-10 pb-6 px-4 text-white text-xl">
          I am a Junior Full-Stack Developer based in Tokyo.
        </p>
        <button className="mainBtn">
          <a
            href="https://drive.google.com/file/d/12x3bSZKNJxTgqUkHozYKTL3gVH-bhsTN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
        </button>
      </div>
    </section>
  );
}
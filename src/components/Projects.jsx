import  { useEffect, useState } from "react";


const projects = [
  {
    title: "Glamour World",
    subtitle: "Salon Management App",
    percentage: "85%",
    desc: "This is a React and Bootstrap–based salon management web application designed to streamline salon operations through a user-friendly interface. It features appointment scheduling, staff management, and income tracking to improve efficiency and organization.",
  },
  {
    title: "Pegasus For Kids",
    subtitle: "E-commerce Platform",
    percentage: "92%",
    desc: "Pegasus for Kids is a child-friendly e-commerce platform built with React and Redux, seamlessly connecting with backend data to offer a dynamic and responsive shopping experience. With Bootstrap, the site features a modern, visually engaging design that makes browsing and buying fun for kids and parents alike",
  },
  {
    title: "RetroMad1",
    subtitle: "Pets Medicine Website",
    percentage: "78%",
    desc: "I designed and implemented the website RetroMad1 , where I also developed a multi-step form with validation to enhance user interaction and functionality. Skilled in HTML, CSS, JavaScript, and Elementor, I am passionate about creating visually appealing and high-performing websites while continuously learning and improving my skills.",
  },
    {
    title: "JRP",
    subtitle: "Media Website",
    percentage: "80%",
    desc: "I recently worked on Project JRP, where I designed the full website and implemented interactive sliders in Shopify to enhance visual appeal and user engagement. Proficient in HTML, CSS, JavaScript, and design tools, I am passionate about creating modern web experiences while continuously expanding my expertise in web design.",
  },
    {
    title: "Chef's Kitchen",
    subtitle: "Cooking Site",
    percentage: "82%",
    desc: "I created a recipe website from scratch, designing a user-friendly interface that allows visitors to easily browse, search, and explore a variety of recipes. Built with HTML, CSS, React and JavaScript, the site focuses on a visually appealing and engaging experience for cooking enthusiasts.",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE (continuous, no reverse)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slideUp = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const slideDown = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="mx-2 mx-lg-5 text-light row d-flex justify-content-center"
      id="project-section"
    >
      <h2>Projects</h2>
      <div id="line"></div>

      <div className="vertical-slider-container col-12 col-md-12 col-lg-10">
        {projects.map((item, i) => (
          <div
            key={i}
            className={`project-showcase-card ${
              i === index ? "active-slide" : "inactive-slide"
            }`}
          >
            <div className="project-right m-auto">
              <h5>{item.title}</h5>
              <h6 className="text-secondary">~{item.subtitle}</h6>
              <p>{item.desc}</p>
            </div>
            {/* CENTER */}
            <div className="project-center m-auto">
              <h1>{item.percentage}</h1>
              <p>success rate</p>
            </div>
          </div>
        ))}

        {/* BUTTONS */}
        <div className="slider-buttons">
          <button onClick={slideUp}>▲</button>
          <button onClick={slideDown}>▼</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

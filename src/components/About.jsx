

const About = () => {
  return (
    <div id="about-section" className="my-5 mx-2 mx-lg-5 text-light">
      <div>
        <h2 id="about" className="animate__animated animate__fadeInLeft">
          About Me
        </h2>
        <div id="line" className="animate__animated animate__fadeInLeft"></div>
      </div>
      <div className="row ">
        <div className="my-5 col-lg-6 col-12 animate__animated animate__fadeInLeft">
          <h3 className="my-3">Project</h3>
          <h1 id="pro">
            10<sup>+</sup>
          </h1>
          <div>
            <p className="fs-4 display-4">
              Adapting and creating solutions
              <br /> for customer’s needs & services
            </p>
          </div>
        </div>
        <div className="col-lg-6 my-5 text-justify col-12 animate__animated animate__fadeInRight">
          <p className="fs-5">
            {" "}
            Hello, I’m a passionate Front-End Developer with 2 years of
            experience, specializing in creating responsive and user-friendly
            web interfaces. I am proficient in HTML, CSS, JavaScript, React,
            Bootstrap, Material-UI, as well as platforms like WordPress,
            Webflow, and Shopify, enabling me to transform design concepts into
            engaging and interactive digital experiences. I am constantly
            exploring new tools and techniques to deliver modern,
            high-performing web solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

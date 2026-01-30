
import Skills from "../assets/Screenshot 2023-10-29 133609.png";
import Js from "../assets/JavaScript-logo.png";
import Html from "../assets/html-removebg-preview.png";
import Css from "../assets/css-removebg-preview.png";
import Rlogo from "../assets/React-removebg-preview (1).png";
import Bootstrap from "../assets/Bootstrap-removebg-preview (1).png";
import Material from "../assets/material-removebg-preview.png";
import Redux from "../assets/download-removebg-preview (1).png";
import Wordpress from "../assets/wordpress-logo-removebg-preview.png";
import Webflow from "../assets/webflow.jpeg";
import Shopify from "../assets/shopify-removebg-preview.png";
import Tailwind from "../assets/tailwind-removebg-preview.png";

const Skill = () => {
  return (
    <div className="mx-0 mx-lg-5" id="skill-section">
      <h2 className="animate__animated animate__fadeInLeft text-light">
        Skills & Expertise
      </h2>
      <div
        id="line"
        className=" my-2 animate__animated animate__fadeInLeft"
      ></div>
      <div id="card-skill" className="d-flex row">
        <div className="col-lg-6 col-md-12 col-sm-12 animate__animated animate__fadeInLeft">
          <div id="boxes" className="my-5 w-100 text-light">
            <h3>Design</h3>
            <h3>Integration</h3>
            <h5 className="text-secondary">
              Style and tools, javascript Frameworks, Bootstrap , Material UI
            </h5>
            <hr id="hr-line" className="text-light my-5 me-5" />
          </div>
          <div id="boxes" className="my-5 w-100 text-light">
            <h3>Development</h3>
            <h3>Frameworks</h3>
            <h5 className="text-secondary">
              Style and tools, javascript Frameworks, React
            </h5>
            <hr id="hr-line" className="text-light my-5 me-5" />
          </div>
        </div>
        <div
          id="skill-box"
          className="col-lg-6 col-md-12 col-sm-12 border border-primary-subtle my-5 rounded-4 p-4 text-light animate__animated animate__fadeInRight"
        >
          <div className=" d-flex justify-content-between">
            <div>
              <h3>
                Programming <br />
                Languages
              </h3>
              <h5 className="my-4">
                10<sup>+</sup>Project
              </h5>
            </div>
            <img id="skill" src={Skills} alt="" />
          </div>
          <div className="row">
            <span className="col-12 col-md-8 col-lg-6 ">
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Js} alt="" />
                <h6 className="">Javascript</h6>
                <p className="text-primary">Intermediate</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Html} alt="" />
                <h6 className="">HTML</h6>
                <p className="text-primary">Advance</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Css} alt="" />
                <h6 className="">CSS</h6>
                <p className="text-primary">Advance</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Rlogo} alt="" />
                <h6 className="">React</h6>
                <p className="text-primary">Intermediate</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Bootstrap} alt="" />
                <h6 className="">BootStrap</h6>
                <p className="text-primary">Advance</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Material} alt="" />
                <h6 className="">Material UI</h6>
                <p className="text-primary">Intermediate</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Redux} alt="" />
                <h6 className="">Redux</h6>
                <p className="text-primary">Intermediate</p>
              </div>
            </span>
            <span className="col-12 col-md-8 col-lg-6">
                 <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Tailwind} alt="" />
                <h6 className="">Tailwind</h6>
                <p className="text-primary">Intermediate</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Wordpress} alt="" />
                <h6 className="">Wordpress</h6>
                <p className="text-primary">Intermediate</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Webflow} alt="" />
                <h6 className="">webflow</h6>
                <p className="text-primary">Intermediate</p>
              </div>
              <div
                id="skill-part"
                className="p-2 border border-primary-subtle rounded-2 my-2 d-flex justify-content-between align-item-center"
              >
                <img id="js" src={Shopify} alt="" />
                <h6 className="">Shopify</h6>
                <p className="text-primary">Intermediate</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

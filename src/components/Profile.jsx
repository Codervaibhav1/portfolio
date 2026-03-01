import { HiDownload } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import resume from "../assets/Vaibhav-Upadhyay-New.pdf";
const Profile = () => {
  return (
    <div id="home"
      className=" mx-2 mx-lg-5 row mt-5 mt-lg-5 d-flex justify-content-center"
      style={{ minHeight: "500px" }}
    >
      <div className="container col-12 col-md-12 col-lg-6 d-flex justify-content-center flex-column animate__animated animate__fadeInUp">
        <h1 id="head">Vaibhav Upadhyay</h1>

        <h4 id="front" className="mt-3 text-light display-1">
          Front-End Devloper
        </h4>
      </div>
      <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-end col-md-5 animate__animated animate__fadeInRight">
        <div className=" d-flex mt-5 flex-column">
          <p className="fs-5 text-light ms-3">
            Creating visually engaging and performance-driven web experiences with React and WordPress.
          </p>
          <div className="my-2">
            <a
              href="https://www.linkedin.com/in/vaibhav-upadhyay-9489b7219/"
              className=" btn btn-outline-light rounded-2 mx-3"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Codervaibhav1"
              className=" btn btn-outline-light rounded-2"
            >
              <BsGithub />
            </a>
          </div>
          <div className="d-flex ms-3">
            <a href={resume} download className="btn btn-light w-75 mt-2">
              Download Resume <HiDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

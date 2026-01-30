import React from 'react';
import Contectimg from '../assets/contect.png';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contect = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0v8ga1h', 'template_ywwj86k', e.target, '3tYNXnllYBqUcMlJp')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send email. Please try again.');
        }
      );

    // Clear the form after submission
    e.target.reset();
  };

  return (
    <div className="my-5 mx-2 mx-lg-5 text-light animate__animated animate__fadeInUp" id='contect-section'>
      <h2 className="animate__animated animate__fadeInLeft">Contact Me</h2>
      <div id="line" className="animate__animated animate__fadeInLeft"></div>

      <div className="d-flex justify-content-between">
        <div className="form-container my-5">
          <form className="form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="10" cols="50" required=""></textarea>
            </div>
            <button className="form-submit-btn" type="submit">
              Send
            </button>
          </form>
        </div>
        <img id="contect" className="my-5" src={Contectimg} alt="" />
      </div>
    </div>
  );
};

export default Contect;

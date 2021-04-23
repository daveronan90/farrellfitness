import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.scss";
import emailjs from "emailjs-com";

const SignUpForm = () => {
  const imgStyle = {
    background: `url(${process.env.PUBLIC_URL}/formBackground.jpeg) no-repeat center`,
  };

  const [userCreds, setUserCreds] = useState({
    userName: "",
    userEmail: "",
    userMobile: "",
    userMessage: "",
  });

  const { userName, userEmail, userMobile, userMessage } = userCreds;

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: userName,
      to_name: "Robbie Farrell",
      reply_to: "",
      email_from: userEmail,
      mobile: userMobile,
      message: userMessage,
    };

    emailjs
      .send(
        "service_96179bg",
        "template_yzej7hf",
        templateParams,
        "user_CvNDBwrqvJvmrZ8szGIjh"
      )
      .then(
        (result) =>
          alert(`We've got your details and will be in touch soon...`),
        (error) => alert(`Something went wrong try again later, thanks...`)
      );

    setUserCreds({
      userName: "",
      userEmail: "",
      userMobile: "",
      userMessage: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <div style={imgStyle} className="form-container">
      <div className="sign-up-container">
        <div className="sign-up-title">
          <h1>SIGN</h1>
          <h1>UP</h1>
          <h1>NOW</h1>
        </div>
        <div>
          <h3>
            By signing up you agree to our
            <Link to="/t&c"> Terms & Conditions</Link>
          </h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <p>Your Name</p>
        <input
          required
          type="text"
          className="userName"
          value={userName}
          name="userName"
          onChange={handleChange}
        />
        <p>Your Email</p>
        <input
          required
          type="email"
          className="userEmail"
          value={userEmail}
          name="userEmail"
          onChange={handleChange}
        />
        <p>Your Number</p>
        <input
          required
          type="tel"
          className="userMoblie"
          value={userMobile}
          name="userMobile"
          onChange={handleChange}
        />
        <p>Your Message</p>
        <textarea
          cols="30"
          rows="10"
          value={userMessage}
          name="userMessage"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

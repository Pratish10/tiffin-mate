import React, { useState } from "react";
import "./Joinus.css";

const JoinUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    alert(data);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="joinus-container">
      <div className="column-1">
        <div className="joinus-img">
          <img
            src="images/img_digitaltransformationbro.svg"
            alt="digitaltransfor"
          />
        </div>
        <h3>We are for you</h3>
        <h2>Let's Build Together</h2>
        <p>
          &quot;Want to have your very own breakfast place? Be a Tiffin Mate and
          share delicious breakfast dishes with your town. It&#39;s fun and
          yummy!&quot;
        </p>
      </div>
      <div className="column-2">
        <h2>Come Join Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Email - ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <textarea
              className="input"
              rows={5}
              id="message"
              name="message"
              placeholder="Tell us few words about your business"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="joinus-button">
            <button
              style={{
                backgroundColor: isHovered ? "#fed35c" : "",
                color: isHovered ? "#333333" : "#9e7e0c",
                border: "1px solid #9e7e0c",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Send and Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;

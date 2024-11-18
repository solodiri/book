import React from "react";
import "./contact.css";
import contactImg from "../../assets/contact.jpg";

const Contact = () => {
  return (
    <div className=" contact">
      <div className="contactContainer">
        <div className="contactLeft">
          <h1>Contact</h1>
          <h3>
            <strong style={{ color: "blue" }}> Phone N0.: </strong>
            +234 803 551 1278
          </h3>
          <h3>
            <strong style={{ color: "blue" }}> Email: </strong>
            drchrisdiri@gmail.com
          </h3>
          <h3>
            <strong style={{ color: "blue" }}> Address: </strong>
            federal university otuoke, Yenagoa, Bayelsa State, Nigeria
          </h3>
        </div>
        <div className="contactRight">
          {/* <img className="imageBox" src={contactImg} alt="image" /> */}
        </div>
      </div>
    </div>
  );
};
export default Contact;

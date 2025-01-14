import React from "react";
import "../css/Contacts.css";



const Contacts = () => {
  return (
    <>
      <section className="con-cta-section">
        <div className="con-cta-left">
          <h2 className="con-cta-heading">
            Ready To Get
            <br />
            Started?
          </h2>
        </div>
        <div className="con-cta-right">
          <p className="con-cta-text">You Know About Me, Let’s Talk</p>
          <p className="con-cta-text">About You.</p>
          <div className="con-cta-buttons">
            <button className="con-cta-button">Shoot Message</button>
            <button
              className="con-cta-button email-button"
              onClick={() => (window.location.href = "mailto:your-email@example.com")}
            >
              Email Us
            </button>

          </div>
        </div>

        {/* Background Shapes */}
        <div className="background-shapes">
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape square"></div>
        </div>
      </section>


    </>
  );
};

export default Contacts;

import React from "react";

function Contact() {
  return ( 
  <>
         <div className="container" id="contact">
      <h3>Contact Me</h3>
      <section className="contact-details">
        <div>
          <i className="fa-solid fa-mobile-retro" />
          <a href="tel:+44.777.555.333"> +44.777.555.333</a>
        </div>
        <div>
          <i className="fa-regular fa-paper-plane" />
          <a href="mailto:someone@example.com"> Email</a>
        </div>
        <div>
          <i className="fa-brands fa-github" />
          <a href="https://github.com/EmilieLondon/" target="_blank" rel="noreferrer">
            {" "}
            GitHub
          </a>
        </div>
        <div>
          <i className="fa-brands fa-instagram" />
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            {" "}
            Instagram
          </a>
        </div>
      </section>
    </div>
  
  </>
  );
}

export default Contact;

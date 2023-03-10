import React from "react";
import ContactForm from "../ContactForm";

function Contact() {
  return ( 
  <>
         <div className="container" id="contact">
      <h3>Contact Me</h3>
      <section className="contact-details">
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
      <div className="py-6">
          <ContactForm />
        </div>
    </div>
  
  
  </>
  );
}

export default Contact;

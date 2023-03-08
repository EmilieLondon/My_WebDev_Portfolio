import React from "react";
import headshot from "../assets/headshot.jpg"

function Home() {
  return ( 
  <>
  <section className="jumbotron text-center">
    <div className="container">
                  <h1 className="jumbotron-heading">Emilie, Web Developer</h1>
      <p className="lead text-muted">
        You can find here my main projects to date, showcasing a wide array of skills.
      </p>
      <img src={headshot} alt="Emilie" height="80px" width="80px" />
    </div>
  </section>

  <div className="container" id="skills">
      <h3>Skills</h3>
      <section className="skills-list">
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Node.js</li>
        </ul>
      </section>
    </div>
   
  </>
  );
}

export default Home;
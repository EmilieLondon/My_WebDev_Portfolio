import React from "react";
import projects from "../projects.json";

function Project(props) {
  return (
    <div className="card">
      <div className="content">
        {projects.map((item) => {
          return (
            <div className="cardContainer">
              <div className="card" key={item.id}>
                <div className="card-body card-style">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.link}>
                    <img
                      className="img-container"
                      src={item.image}
                      alt={item.title}
                    />
                  </a>
                  <section>GitHub repository: {item.repo}</section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;

// import React from "react";

// function Project(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img src={props.image} alt={props.title}  />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Title:</strong> {props.title}
//           </li>
//           <li>
//             <strong>Description:</strong> {props.description}
//           </li>
//           <li>
//             <strong>Deployed version:</strong> {props.link}
//           </li>
//           <li>
//             <strong>GitHub repository:</strong> {props.repo}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Project;

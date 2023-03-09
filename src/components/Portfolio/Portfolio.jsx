import React from "react";
import projects from "../projects.json";
import Card from 'react-bootstrap/Card';

function Portfolio(props) {
  return (
    <Card style={{ width: '18rem' }}>

      {projects.map((item, index) => {
        return (
          <>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} />
      <Card.Body key={item.id}>
      <Card.Title>{item.title}</Card.Title>

         <Card.Text>
         {item.description}
        </Card.Text>
          </Card.Body>

        <Card.Body>
        <Card.Link href="{item.link}">Deployed Version</Card.Link>
        <Card.Link href="{item.repo}">GitHub Repository</Card.Link>
        </Card.Body>
        </>
          );
      })}
    </Card>
    );
    }

   
export default Portfolio;

{/* // function Portfolio(props) { */}
{/* //   return (
//     <div className="card">
//       <div className="content">
//         {projects.map((item, index) => { */}
{/*           
//           return (
//             <div className="cardContainer">
//               <div className="card" key={item.id}>
//                 <div className="card-body card-style">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.description}</p>
//                   <a href={item.link}>
//                     <img */}
{/* //                       className="img-container"
//                       src={process.env.PUBLIC_URL + item.image}
//                       alt={item.title}
//                     />
//                   </a> */}
{/* //                   <section>GitHub repository: {item.repo}</section>
//                 </div> */}
{/* //               </div> */}
{/* //             </div>
//           ); */}
{/* //         })}
//       </div> */}
{/* //     </div> */}
{/* //   );
// }

// export default Portfolio; */}


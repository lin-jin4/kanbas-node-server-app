// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function WorkingWithObjects() {
//     const [assignment, setAssignment] = useState({
//         id: 1, title: "NodeJS Assignment",
//         description: "Create a NodeJS server with ExpressJS",
//         due: "2021-10-10", completed: false, score: 0,
//       });
//       const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
//   return (
//     <div>
//       <h3>Working With Objects</h3>
//       <h4>Retrieving Objects</h4>

//       <a className="btn btn-primary"
//   href={`http://localhost:4000/a5/assignment`}>
//         Get Assignment
// </a><br/>
// <h4>Retrieving Objects</h4>
// <a className="btn btn-primary"
//   href={`http://localhost:4000/a5/assignment/title`}>
//         Get Title
// </a><br/>

// <h4>Modifying Properties</h4>
// <a className="btn btn-primary"
//   href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
//         Update Title
// </a>
     
//       <input type="number" 
//         onChange={(e) => setAssignment({ ...assignment,
//             title: e.target.value })}
//         value={assignment.title}/>

//     </div>
//   );
// }
// export default WorkingWithObjects;


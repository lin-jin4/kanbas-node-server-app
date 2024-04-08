// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function EncodingParametersInURLs() {
//     const [a, setA] = useState<number>(34); 
//     const [b, setB] = useState<number>(23);
//     const [welcome, setWelcome] = useState<string>("");
//     const [result, setResult] = useState<number>(0);
  
//     const fetchWelcome = async () => {
//       const response = await axios.get<string>("http://localhost:4000/a5/welcome");
//       setWelcome(response.data);
//     };
  
//     const fetchSum = async (numA: number, numB: number) => {
//       const response = await axios.get<number>(`http://localhost:4000/a5/add/${numA}/${numB}`);
//       setResult(response.data);
//     };
  
//     const fetchSubtraction = async (numA: number, numB: number) => {
//       const response = await axios.get<number>(`http://localhost:4000/a5/subtract/${numA}/${numB}`);
//       setResult(response.data);
//     };
  
//     useEffect(() => {
//       fetchWelcome();
//     }, []);


//   return (
//     <div>
//       <h3>Encoding Parameters In URLs</h3>
//       <h4>Integrating React with APIs</h4>
//       <h5>Fetching Welcome</h5>
//       <h6>{welcome}</h6>

//       <h4>Calculator</h4>
//       <input
//         type="number"
//         value={a}
//         onChange={(e) => setA(parseInt(e.target.value))}
//       /><br/>
//       <input
//         type="number"
//         value={b}
//         onChange={(e) => setB(parseInt(e.target.value))}
//       />
//        <input value={result} type="number" readOnly />
//       <h3>Fetch Result</h3>
//       <button onClick={() => fetchSum(a, b)} >
//         Fetch Sum of {a} + {b}
//       </button>
//       <button onClick={() => fetchSubtraction(a, b)} >
//         Fetch Substraction of {a} - {b}
//       </button>
      
//       <h3>Path Parameters</h3>
//       <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
//         Add {a} + {b}
//       </a><br/>
//       <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
//         Subtract {a} - {b}
//       </a>
      
//       <h3>Query Parameters</h3>
// <a className="btn btn-primary"
//   href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
//   Add {a} + {b}
// </a><br/>
// <a className="btn btn-danger"
//   href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
//   Substract {a} - {b}
// </a><br/>

// <a className="btn btn-success"
//   href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
//   Multiply {a} * {b}
// </a><br/>
// <a className="btn btn-warning"
//   href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
//   Divide {a} / {b}
//   </a><br/>

//     </div>
//   );
// }

// export default EncodingParametersInURLs;

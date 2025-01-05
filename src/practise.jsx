import React ,{useState} from 'react';
// import Greeting from './greeting';  // Corrected the name to match the file export

import { h1 } from "framer-motion/client";
import PropTypes, { func } from "prop-types";

// function App() {
//   return (
//     <div>
//       <Greeting />  {/* Render the Greeting component */}
//     </div>
//   );
// }



// Change value

// export default App;

// import React, { useState } from 'react'

// const App = () => {
  
//   const[a,setA]=useState(10)

// const changeA=()=>{
//   setA(23)
// }

//   return (
//     <div>
//       <h1>value of a is {a}</h1>
//       <button onClick={changeA}>Change value</button>

      
//     </div>
  
//   )
// }

// export default App



//increment and decerement

// import React, { useState } from 'react'

// const App = () => {
//   const[num,setNum]=useState(0)

//   return (
//     <div>
//       <h1>the number is {num}</h1>
//       <button onClick={()=>setNum(num+1)}>Increment</button>
//       <button onClick={()=>setNum(num-1)}>decerement</button>

      
      
//     </div>
//   )
// }

// export default App



//  function App() {
//   return (
//     <div>
//     <h2 className="text-5xl font-bold bg underline">
//       Hello world!
//     </h2>
//     <h2>fa</h2>
//     </div>
//   )
// }
// export default App

// import { useState } from 'react';

// const App=()=>{
  
  
//   const[num,setNum]=useState(0);
//   function upper(){
//     setNum(num+1)
//   }
//   function lower(){
//     setNum(num-1)
//   }
  
  
//   return(
    
//     <div>
//       <h1 className='text-5xl bg-pink-300 font-bold underline'>the number is {num}</h1>
//       <button onClick={upper}>upper</button>
//       <button onClick={lower}>lower</button>
      

    
//     </div>
  
//   )
  
  
// }
// export default App


// function App() {
//   const [username, setUsername] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername(''); // Clear the input after submission
//   };

//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <input
//           value={username}
//           type="text"
//           onChange={(e) => setUsername(e.target.value)}
//           className="bg-pink-300 text-white border-2 border-pink-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder:text-gray-400"
//           placeholder="Enter your Name"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 text-white font-semibold py-3 px-8 my-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
//         >
//           Click me
//         </button>
//       </form>
//     </>
//   );
// }

// export default App



// function App(){

//   return (
    
//     <Greeting name="Ayush" age ="21" location="Nepal" ></Greeting>
    
//   )
  
// }

// function Greeting(props){
//   return <h1> My Name is,{props.name} and my age is {props.age}</h1>
// }



// export default App;




// function App() {
//   return (
//     <div>
//       <Profile name="Ayush" age="23" isStudent={false} />
//     </div>
//   );
// }

// function Profile(props) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>isStudent: {props.isStudent ? "Yes" : "No"}</h3>
//     </div>
//   );
// }

// // Prop type validation
// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   isStudent: PropTypes.bool.isRequired,
// };

// // Default props in case no value is provided
// Profile.defaultProps = {
//   name: "Guest",
//   age: 13,
//   isStudent: false,
// };

// export default App;
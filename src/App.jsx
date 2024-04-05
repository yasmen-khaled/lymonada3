import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


import './App.css';
import '../main.js';
import './main.jsx';




import Home from '../public/Land';
import Navbar from './navbar';
import Mash from './mash';
import Lujain from './lujain';
import Maram from './maram';




// const MyComponent = () => {
//  // Create a reference to the Mash component container
//  const mashRef = useRef(null);

//  // Function to handle the click event
//  const handleClick = () => {
//     mashRef.current?.scrollIntoView({ behavior: 'smooth' });
//  };

//  return (
//     <div>
//       {/* Your navigation or other components */}
//       <a href="#home" className="active" onClick={handleClick}>Home</a>

//       {/* Other content */}

//       {/* The Mash component wrapped in a div with the ref */}
//       <div ref={mashRef}>
//         <Mash />
//       </div>
//     </div>
//  );
// };









function App() {
  
  
  return (
     <>

     
       <Navbar/> 


       <button className="scroll-button2" id="scrollUp" onClick={scrollUp}>↑</button>
        <button className="scroll-button" id="scrollDown" onClick={scrollDown}>↓</button>
       

       
       <Canvas className='land'>
           
         <Suspense fallback={null}>
          
           <ambientLight />
           
           <OrbitControls enableZoom={false} autoRotate={true} />
           <Home />
           
           
         </Suspense>
          
         {/* cover */}
  
         <Html>
          
         
           <div className='cover'>
            
             <p>Where creativity, mastery, and imagination converge</p>
             <button className="btn" type="button">
              <strong>SPACE</strong>
      <div id="container-stars">
        
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>


         </div>

    
         </Html>

       </Canvas>
      
       {/* project description  */}
       <div className='container'>
       
         <h1 className='title3'>Bring your team together</h1>
        <div className='faraway'>
         <h2 className='des'>In a faraway place among the stars, there are three houses floating atop a celestial island.
        Each house is like a mirror, showing the personalities of their owners through the decorations outside. Inside, they're like showcases of their owners' skills and knowledge.</h2>
       
       
        </div>

        
        
        <Mash />
      
       <Lujain />
       <Maram />
       
      
       </div>

        

    
     </>
  );
 }
 
 export default App;

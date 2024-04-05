import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


 
import './App.css';

import Home from '../../public/Land';
import Footer from '../../src/footer';
import Navbar from './navbar';
import Mash from './mash';




function App() {
  
  return (
     <>
       <Navbar/>
       <Canvas>
         <Suspense fallback={null}>
           <ambientLight />
           <OrbitControls enableZoom={false} autoRotate={true} />
           <Home />
           
           
         </Suspense>
          
         {/* Add HTML content using the Html component */}
         
         <Html>
         
           <div className='title'>
             <h1>LYMonada</h1>
             <p>Model description or additional information.</p>
             <button>TRY FOR FREE</button>




          

           </div>





    
         </Html>
       </Canvas>
       
       <div className='container'>
         <h1>Bring your team together</h1>

       </div>
       <Footer />
     </>
  );
 }
 
 export default App;

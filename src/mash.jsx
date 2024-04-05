import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


 
import './App.css';

import Mash from  '../public/Mash';
  

function App() {
  
  return (
     <>
      
       <Canvas className='mash'>
        
        <Mash />
        <ambientLight />
        <OrbitControls enableZoom ={false} autoRotate/>
        
         <Suspense fallback={null}>
         </Suspense>

         {/* yasmen's description */}
        
         <Html>
         
           <div className='yasmen'>
           
             <h1>The first house</h1>
             <p> belonging to Yasmen, is a workshop where she creates beautiful artworks and inventions, reflecting her creativity.</p>
             
           </div>
    
         </Html>
          

       </Canvas>
      
    
     </>
  );
 }
 
 export default App;

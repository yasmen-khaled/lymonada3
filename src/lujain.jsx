import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


 
import './App.css';

import Lujain from  '../public/Lujain';
// import Navbar from './navbar';



function App() {
  
  return (
     <>
     {/* <Navbar/>  */}
       <Canvas className='lujain'>

       <Lujain className='modlujain' />
       
        <ambientLight intensity={'3'}/>
        <OrbitControls enableZoom ={false} autoRotate/>
         <Suspense fallback={null}>
         <Environment preset='sunset' />
         </Suspense>

         {/* lujain's descrption */}

         <Html>
         
           <div className='lujaindes'>
             <h1>The second dwelling</h1>
             <p>Lujain's cozy sanctuary is a beautiful mix of softness and strength,
               where her love for animals meets her warrior spirit and strategic mind.
                An acoustic guitar leans against the wall,
                 echoing her passion for music and creativity.</p>
             
           </div>

    
         </Html>
         
       </Canvas>
    
     </>
  );
 }
 
 export default App;

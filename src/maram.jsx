import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


 
import './App.css';

import Maram from  '../public/Maram';


function App() {
  
  return (
     <>
       <Canvas className='maram'>
       <Maram />
        
        <OrbitControls enableZoom ={false} autoRotate={true}/>
        
         <Suspense fallback={null}>
         </Suspense>


         {/* maram's description */}
         <Html>
           <div className='maram2'>
             <h1>The third abode</h1>
             <p> owned by Maram, is a haven of intellect and elegance. Within its walls, shelves overflow with books on diverse subjects, while a grand piano and a chessboard stand as symbols of her love for both music and strategic thinking.</p>
           </div>
         </Html>
         
       </Canvas>
    
     </>
  );
 }
 
 export default App;

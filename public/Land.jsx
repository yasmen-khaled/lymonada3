/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 land.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/land.gltf')
  return (
    <group {...props} dispose={null}>
      <pointLight intensity={50} decay={2} color="#ff9efe" position={[-0.666, 27.228, -5.631]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={50} decay={2} color="#ff9efe" position={[-2.661, 26.819, -5.766]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={50} decay={2} color="#ff9efe" position={[-1.692, 28.276, -5.705]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={50} decay={2} color="#ff9efe" position={[-2.836, 28.276, -5.137]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={50} decay={2} color="#ff9efe" position={[-0.443, 29.328, -5.015]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={50} decay={2} color="#1b5eff" position={[-1.366, 28.041, -6.331]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={10} decay={2} color="#ffb831" position={[4.902, 25.095, -1.926]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={5} decay={2} color="#ffffb9" position={[4.075, 25.051, -1.492]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight name= 'yasmen' intensity={25} decay={10} color="#ffd794" position={[6.167, 24.887, -1.845]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight name='pink' intensity={25} decay={3} color="#00ff15" position={[4.63, 24.449, -1.651]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={25} decay={1} color="#ef00ff" position={[4.496, 24.41, -1.536]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <pointLight intensity={20} decay={2} color="#a568ff" position={[5.227, 24.418, -2.034]} rotation={[-Math.PI / 2, 0, -0.067]} />
      <spotLight intensity={50} angle={1.193} penumbra={0.15} decay={2} color="#ffabec" position={[-0.949, 25.862, -8.932]} rotation={[3.117, 0.228, 0.788]} />
      <spotLight intensity={50} angle={1.193} penumbra={0.15} decay={2} color="#ffabec" position={[3.443, 26.128, -7.881]} rotation={[3.063, 1.258, 0.857]} />
      <group name='land' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Plane.geometry} material={materials.lambert2} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.lambert3} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.lambert5} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials.mushroom_mat} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials.Aurora_Green} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials.Aurora_Blue} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials.Aurora_Violet} />
        <mesh geometry={nodes.Plane_7.geometry} material={materials.FloatingIsland_Base} />
        <mesh geometry={nodes.Plane_8.geometry} material={materials.Cager} />
        <mesh geometry={nodes.Plane_9.geometry} material={materials.Centre_Emitter} />
        <mesh geometry={nodes.Plane_10.geometry} material={materials['White_Willow.001']} />
        <mesh geometry={nodes.Plane_11.geometry} material={materials.FloatingIsland_Top} />
        <mesh geometry={nodes.Plane_12.geometry} material={materials['Material.020']} />
      </group>
    </group>
  )
}

useGLTF.preload('/land.gltf')

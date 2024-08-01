
import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../models/space.glb'

const Sky = () => {
    const sky = useGLTF(skyScene)
  return (
    <mesh position={[-5, -4, 0]} scale={[3, 3, -15]}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
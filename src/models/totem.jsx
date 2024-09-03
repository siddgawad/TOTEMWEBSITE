import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import { a, useSpring, config } from '@react-spring/three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import * as THREE from 'three';
import totemscene from '../models/Arjun.glb'
import hdr from '../hdr/NewWebBg.hdr'
import { PMREMGenerator } from 'three';


const Totem = ({ ...props }) => {
  const totemref = useRef();
  const totemLogoRef = useRef();
  const totemLogo001Ref = useRef();
  const energy010Ref = useRef();
  const { gl, scene } = useThree();
  const { nodes, materials } = useGLTF(totemscene);

  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  // const handleScroll = (event) => {
  //   if (isRotating) {
  //     totemLogo001Ref.current.rotation.z -= 0.1;
  //     energy010Ref.current.rotation.z += 0.1;
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [isRotating]);

  useFrame(() => {
    if (isRotating) {
      totemLogo001Ref.current.rotation.z += 0.05;
      energy010Ref.current.rotation.y -= 0.1;
    }
  });
 
  useEffect(() => {
    const pmremGenerator = new PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader()
    .setDataType(THREE.UnsignedByteType)
    .load(hdr, (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.background = envMap;
      scene.environment = envMap;
      texture.dispose();
      pmremGenerator.dispose();
    });
}, [gl, scene]);


  return (
    <>
      {/* <Suspense fallback={null}> */}
    <a.group ref={totemref} {...props} >
       <group name="Scene">
        <group name="ThreeJs02glb">
          <group name="Final_Scene_Light_Bakingglb">
            <PerspectiveCamera
              name="Camera"
              makeDefault={false}
              far={1000}
              near={0.1}
              fov={43.77911554}
              position={[0, 0.39086911, 2.71306062]}
              rotation={[0.06148382, 0, 0]}
            />
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={nodes.Plane.material}
              position={[0, -0.43239975, -8.92535877]}
              scale={10.90911484}
            />
            <mesh
              name="Aset_nature_rock_L_vmhifen_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmhifen_LOD0.geometry}
              material={materials.default_material}
              position={[0, -0.00019356, 1.54893613]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.0060163}
            />
            <mesh
              name="Aset_nature_rock_L_vmjdff0_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjdff0_LOD0.geometry}
              material={materials['default_material.001']}
              position={[1.19593513, -0.00019356, 1.10276198]}
              rotation={[Math.PI / 2, -3e-8, 0.29127433]}
              scale={0.00707009}
            />
            <mesh
              name="Aset_nature_rock_L_vmjefjf_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjefjf_LOD0.geometry}
              material={materials['default_material.002']}
              position={[0.07511023, 0, 0.29062104]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.0078303, 0.00783031, 0.00783031]}
            />
            <mesh
              name="Aset_nature_rock_L_vmjjfa3_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjjfa3_LOD0.geometry}
              material={materials['default_material.003']}
              position={[-1.36565316, 0, 1.46576536]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.00742983}
            />
            <mesh
              name="Aset_nature_rock_L_vmoebgzqx_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0.geometry}
              material={materials['default_material.004']}
              position={[-1.38786972, 0, 0.16187581]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            />
            <mesh
              name="Aset_nature_rock_L_vmoebgzqx_LOD0001"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0001.geometry}
              material={materials['default_material.004']}
              position={[1.24445498, 0, -0.90774846]}
              rotation={[Math.PI / 2, 5e-8, -2.75477302]}
              scale={0.01}
            />
            <mesh
              name="Aset_nature_rock_L_vmjefjf_LOD0001"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjefjf_LOD0001.geometry}
              material={materials['default_material.002']}
              position={[-0.90142781, 0, -1.44635439]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.0078303, 0.00783031, 0.00783031]}
            />
            <mesh
              name="Aset_nature_rock_L_vmoebgzqx_LOD0002"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0002.geometry}
              material={materials['default_material.004']}
              position={[-0.56905264, 0, -3.56474614]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.02244113}
            />
            <mesh
              name="Aset_nature_rock_L_vmjjfiv_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjjfiv_LOD0.geometry}
              material={materials['default_material.005']}
              position={[-3.19466877, 0, -0.41653991]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01211476}
            />
            <mesh
              name="Aset_nature_rock_L_vmjjfiv_LOD0001"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjjfiv_LOD0001.geometry}
              material={materials['default_material.005']}
              position={[3.37005782, 0, -1.96728206]}
              rotation={[Math.PI / 2, -7e-8, 2.59216518]}
              scale={0.01211476}
            />
            <group
              name="group1"
              position={[0.01331571, -1.24482048, -2.00621486]}
              rotation={[Math.PI / 2, -5e-8, -1.56951719]}
              scale={0.01}>
              <mesh
                name="shi_Group31753"
                castShadow
                receiveShadow
                geometry={nodes.shi_Group31753.geometry}
                material={materials.shi_aiStandardSurface4SG}
                position={[0.00000961, 0, -0.00001518]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.53999996, 2.54000009, 2.54000009]}
              />
              <mesh
                name="shi_Group31754"
                castShadow
                receiveShadow
                geometry={nodes.shi_Group31754.geometry}
                material={materials.shi_aiStandardSurface4SG}
                position={[0.00000961, 0, -0.00001518]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.53999996, 2.54000009, 2.54000009]}
              />
              <mesh
                name="shi_Group31756"
                castShadow
                receiveShadow
                geometry={nodes.shi_Group31756.geometry}
                material={materials.shi_aiStandardSurface4SG}
                position={[0.00000961, 0, -0.00001518]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.53999996, 2.54000009, 2.54000009]}
              />
            </group>
            <mesh
              name="Aset_nature_rock_XL_vfgjfag_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_XL_vfgjfag_LOD0.geometry}
              material={materials['default_material.007']}
              position={[-4.05249214, 0, -11.60162544]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.00020261}
            />
            <mesh
              name="Aset_nature_rock_XL_vfgjfag_LOD0001"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_XL_vfgjfag_LOD0001.geometry}
              material={materials['default_material.007']}
              position={[6.83497047, 0, -11.60162544]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.00020261}
            />
            <mesh
              name="Aset_nature_rock_L_vmjecjd_LOD0"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjecjd_LOD0.geometry}
              material={materials['default_material.008']}
              position={[-1.0209825, 0.07021494, 0.95282173]}
              rotation={[Math.PI / 2, 0.40595561, -1.59849429]}
              scale={0.00116778}
            />
            <mesh
              name="Aset_nature_rock_L_vmjecjd_LOD0001"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_rock_L_vmjecjd_LOD0001.geometry}
              material={materials['default_material.008']}
              position={[0.71388572, 0.09453732, 1.55138218]}
              rotation={[1.5703915, -0.09883044, 1.50268698]}
              scale={0.00062814}
            />
            <mesh
              name="ground"
              castShadow
              receiveShadow
              geometry={nodes.ground.geometry}
              material={materials['Material #43.001']}
              position={[0.29480347, 0.02485711, -0.99948752]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[8.08107758, 8.08107866, 6.4337329]}
            />
            <mesh
              name="flow_lava001"
              castShadow
              receiveShadow
              geometry={nodes.flow_lava001.geometry}
              material={materials['Material #44.001']}
              position={[-0.50807458, 0.3173514, -2.63777757]}
              rotation={[Math.PI / 2, 5e-8, 2.27713826]}
              scale={[0.11291723, 0.11291722, 0.11291721]}
            />
            <mesh
              name="flow_lava003"
              castShadow
              receiveShadow
              geometry={nodes.flow_lava003.geometry}
              material={materials['Material #45.001']}
              position={[0.32033545, 0.32031643, -2.0992415]}
              rotation={[Math.PI / 2, -1.1e-7, -1.01483517]}
              scale={[0.06795454, 0.06795455, 0.06795455]}
            />
            <mesh
              name="flow_lava003001"
              castShadow
              receiveShadow
              geometry={nodes.flow_lava003001.geometry}
              material={materials['Material #45.001']}
              position={[0.00813605, 0.32031643, -1.85472679]}
              rotation={[Math.PI / 2, -6e-8, -0.37269806]}
              scale={[0.06795454, 0.06795454, 0.06795455]}
            />
            <mesh
              name="flow_lava003002"
              castShadow
              receiveShadow
              geometry={nodes.flow_lava003002.geometry}
              material={materials['Material #45.001']}
              position={[0.34373599, 0.32013994, -2.50238156]}
              rotation={[Math.PI / 2, 2e-8, -1.95800113]}
              scale={[0.06795456, 0.06795456, 0.06795455]}
            />
            <mesh
              name="flow_lava003003"
              castShadow
              receiveShadow
              geometry={nodes.flow_lava003003.geometry}
              material={materials['Material #45.001']}
              position={[0.05066276, 0.32013994, -2.78920984]}
              rotation={[Math.PI / 2, 0, -2.71240831]}
              scale={0.06795455}
            />
            <mesh
              name="flow_lava001001"
              castShadow
              receiveShadow
              geometry={nodes.flow_lava001001.geometry}
              material={materials['Material #44.001']}
              position={[-0.39409223, 0.31997642, -1.8848002]}
              rotation={[Math.PI / 2, 1.5e-7, 0.4687267]}
              scale={[0.11291721, 0.11291723, 0.11291722]}
            />
          </group>
          <group name="Totem_Logo_Websiteglb" ref={totemLogoRef} onClick={handleClick}>
            <mesh
              name="Totem_logo001"
              castShadow
              receiveShadow
              geometry={nodes.Totem_logo001.geometry}
              material={materials['lambert1.003']}
              position={[-0.10818139, 2.07571244, -2.33628869]}
              rotation={[1.57070328, -0.00067104, 0.00832983]}
              scale={[0.00245747, 0.00220266, 0.00245747]}
              ref={totemLogo001Ref}
           />
            <mesh
                name="energy010"
                castShadow
                receiveShadow
                geometry={nodes.energy010.geometry}
                material={materials.ball}
                position={[-0.10691898, 1.91769505, -2.33513784]}
                rotation={[0, 0.45477294, 0]}
                scale={0.07173906}
                ref={energy010Ref}
              />
          </group>
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={nodes.Plane_1.material}
            position={[-0.21, 2.01182837, -2.35209352]}
            rotation={[0.00015189, -0.0257871, 0.03119206]}
            scale={3.46602705}
          />
        </group>
        <directionalLight
          name="DirectionalLight"
          intensity={7}
          decay={0}
          color="#00a730"
          position={[28.08236206, -0.23453065, -1.54444163]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          name="DirectionalLight_2"
          intensity={7}
          decay={1}
          color="#00a730"
          position={[-11.38697813, -0.16368225, -1.38756734]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          name="DirectionalLight_4"
          intensity={0}
          decay={1}
          color="#a16bcb"
          position={[1.00726246, 5.78541993, 5.5314043]}
          scale={2.4259577}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          name="DirectionalLight_4"
          intensity={1}
          decay={1}
          color="#ffffff"
          position={[1.00726246, 9.78541993, 9.5314043]}
          scale={2.4259577}>
          <group position={[0, 0, -1]} />
        </directionalLight>
      </group>
    </a.group>
    {/* </Suspense> */}

    </>
  )
}

export default Totem;
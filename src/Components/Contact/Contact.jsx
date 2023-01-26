import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Header from "../Header";
import "./Contact.css";
import * as THREE from "three";

const CopsLoader = () => {
  let mixer = null;
  const { scene, animations } = useLoader(
    GLTFLoader,
    "attack_helicopter/attack_helicopter_concept.glb"
  );
  //   mixer = new THREE.AnimationMixer(scene);
  mixer = new THREE.AnimationMixer(scene);
  console.log(scene);
};

const Scene = () => {
  //   const gltf = useLoader(GLTFLoader, "attack_helicopter/scene.gltf");

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      {/* <directionalLight intensity={0.5} /> */}
      {/* <primitive object={scene} scale={0.5} position={[-0.7, -1, 0]} /> */}
      <CopsLoader />
      <OrbitControls />
    </Canvas>
  );
};

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="cops_model">
        <Scene />
      </div>
    </div>
  );
};

export default Contact;

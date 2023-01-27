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
import Fade from "react-reveal/Fade";

// const CopsLoader = () => {
//   let mixer = null;
//   const { scene, animations } = useLoader(GLTFLoader, "sphere_bot.glb");
//   //   mixer = new THREE.AnimationMixer(scene);
//   mixer = new THREE.AnimationMixer(scene);
//   useEffect(() => {
//     void mixer.clipAction(animations[4]).reset().startAt(2).play();
//   }, [mixer]);
//   console.log(mixer);
//   useFrame((state, delta) => {
//     mixer.update(delta);
//     // console.log(ca);
//   });
//   return <primitive object={scene} position={[-2.4, -1, 0]} scale={1.5} />;
// };

const CopsLoader = () => {
  let mixer = null;
  let action = null;
  const { scene, animations } = useLoader(GLTFLoader, "buster_drone.glb");
  //   mixer = new THREE.AnimationMixer(scene);
  mixer = new THREE.AnimationMixer(scene);
  useEffect(() => {
    action = mixer.clipAction(animations[0]);
    action.loop = THREE.LoopPingPong;
    action.play();
  }, [action]);
  console.log(mixer);
  useFrame((state, delta) => {
    mixer.update(delta);
    // console.log(ca);
  });
  return <primitive object={scene} position={[-2.4, 0.3, 0]} scale={1} />;
};

const LightAnimation = () => {
  const lightRef = useRef();
  const clock = new THREE.Clock();
  useFrame(({ clcok }) => {
    lightRef.current.position.x = Math.sin(clock.getElapsedTime() / 2) * 4;
    lightRef.current.position.z = Math.cos(clock.getElapsedTime() / 5) * 2;
  });
  return (
    <pointLight
      ref={lightRef}
      intensity={1.3}
      color={0x8b0000}
      position={[0, -4, -3]}
      castShadow
    />
  );
};

const Scene = () => {
  //   const gltf = useLoader(GLTFLoader, "attack_helicopter/scene.gltf");

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <directionalLight intensity={1.2} color={0xffffff} castShadow />
      {/* <spotLight intensity={0.7} color={0xff0000} position={[0, 3, 2]} /> */}
      <LightAnimation />
      {/* <primitive object={scene} scale={0.5} position={[-0.7, -1, 0]} /> */}
      <CopsLoader />
      <OrbitControls autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

const Contact = () => {
  return (
    <div className="contact_top_div">
      <Header />
      <div className="cops_model">
        <Scene />
      </div>
      <div className="contact_info">
        <Fade right delay={1200}>
          <div className="contact_top">CONTACT ME</div>
        </Fade>
        <Fade right delay={2000}>
          <div className="contact_bottom">Check the information below</div>
        </Fade>
        <Fade right delay={2300}>
          <div className="contact_bottom">
            <a href="https://github.com/Ludobico" target="_blank">
              https://github.com/Ludobico
            </a>
          </div>
        </Fade>
        <Fade right delay={2600}>
          <div className="contact_bottom">
            <a>aqs450@gmail.com</a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;

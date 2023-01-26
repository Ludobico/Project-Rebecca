import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import "./Main.css";
import Header from "../Header";
import {
  OrbitControls,
  PerspectiveCamera,
  Gltf,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfModel from "./GltfModel";
import Fade from "react-reveal/Fade";
import Btext from "../Btext";

// const Port = () => {
//   const { viewport } = useThree();
//   const ref = useRef();
//   useFrame(({ mouse }) => {
//     let x = (mouse.x * viewport.width) / 2;
//     let y = (mouse.y * viewport.height) / 2;
//     // ref.current.position.set(x, y, 0);
//     console.log(x, y);
//   });
//   // return <PerspectiveCamera makeDefault ref={ref} />;
// };
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.lookAt(-1, 3, 5);
  });
}
function Lights() {
  const light = useRef();
  useHelper(light, THREE.SpotLightHelper, "red");
  return (
    <spotLight
      ref={light}
      intensity={10}
      position={[5, 5, -10]}
      shadow-mapSize-width={64}
      shadow-mapSize-height={64}
      castShadow
      shadow-bias={-0.001}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <div className="citymodel">
          <Canvas>
            <PerspectiveCamera makeDefault position={[5, 5, -12]} />
            {/* <Gltf src="/nightcity/scene.gltf" /> */}
            <GltfModel />
            <OrbitControls
              // enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
            />
            {/* <Lights /> */}
            {/* <Port /> */}
            <Rig />
          </Canvas>
        </div>
        <div className="intro_city_top_div">
          <Fade bottom>
            <div className="main_intro">Night City</div>
          </Fade>
          <div className="intro_city_bottom_div">
            <Btext />
          </div>
        </div>
      </Suspense>
    </>
  );
};
const Main = () => {
  return (
    <div>
      <Header />
      <Scene />
    </div>
  );
};

export default Main;

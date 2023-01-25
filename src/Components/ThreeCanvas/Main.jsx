import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import "./Main.css";
import Header from "../Header";
import {
  CameraControls,
  Gltf,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
const Scene = () => {
  console.log(Gltf);
  return (
    <>
      <Canvas>
        <Suspense fallback={"null"}>
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <Gltf src="/nightcity/scene.gltf" />
        </Suspense>
      </Canvas>
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

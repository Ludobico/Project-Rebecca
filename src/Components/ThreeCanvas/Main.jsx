import React, { Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./Main.css";
import Header from "../Header";
import {
  OrbitControls,
  PerspectiveCamera,
  Loader,
  useProgress,
  Html,
  PerformanceMonitor,
} from "@react-three/drei";
import Fade from "react-reveal/Fade";
import Btext from "../Btext";
import { Perf } from "r3f-perf";

function Rig() {
  const { camera, mouse } = useThree();

  return useFrame(() => {
    camera.lookAt(-1, 3, 5);
  });
}

const GltfModelLazy = React.lazy(() => import("./GltfModel"));
const Prop1Lazy = React.lazy(() => import("./NoiseProp1"));
const Prop2Lazy = React.lazy(() => import("./NoiseProp2"));
const Prop3Lazy = React.lazy(() => import("./NoiseProp3"));

const Scene = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="citymodel">
          <Canvas frameloop="demand">
            <PerspectiveCamera makeDefault position={[5, 5, -12]} />
            <GltfModelLazy />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
            />
            <Rig />
            {/* <Perf antialias={true} /> */}
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
        <div className="david">
          <Canvas>
            <Prop1Lazy />
          </Canvas>
        </div>
        <div className="lucy">
          <Canvas>
            <Prop2Lazy />
          </Canvas>
        </div>
        <div className="rebecca">
          <Canvas>
            <Prop3Lazy />
          </Canvas>
        </div>
      </Suspense>
      {/* <Loader /> */}
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

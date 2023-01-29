import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./Main.css";
import Header from "../Header";
import { OrbitControls, PerspectiveCamera, Loader } from "@react-three/drei";
import GltfModel from "./GltfModel";
import Fade from "react-reveal/Fade";
import Btext from "../Btext";
import NoiseProp1 from "./NoiseProp1";
import NoiseProp2 from "./NoiseProp2";
import NoiseProp3 from "./NoiseProp3";

function Rig() {
  const { camera, mouse } = useThree();

  return useFrame(() => {
    camera.lookAt(-1, 3, 5);
  });
}
const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <div className="citymodel">
          <Canvas frameloop="demand">
            {/* <ScrollControls pages={1.5} damping={0.85} distance={0.5}> */}
            {/* <Scroll> */}
            <PerspectiveCamera makeDefault position={[5, 5, -12]} />
            <GltfModel />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
            />
            <Rig />
            {/* </Scroll> */}
            {/* </ScrollControls> */}
            {/* <Perf /> */}
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
            <NoiseProp1 />
          </Canvas>
        </div>
        <div className="lucy">
          <Canvas>
            <NoiseProp2 />
          </Canvas>
        </div>
        <div className="rebecca">
          <Canvas>
            <NoiseProp3 />
          </Canvas>
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

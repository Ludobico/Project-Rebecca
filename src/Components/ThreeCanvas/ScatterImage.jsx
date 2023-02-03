import { Canvas } from "@react-three/fiber";
import React from "react";
import ParticleImage from "./ParticleImage";
import t1 from "../../Static/Img/example.jpg";

const ScatterImage = () => {
  return (
    <Canvas>
      <ParticleImage image={t1} size={10} intensity={0.05} />
    </Canvas>
  );
};

export default ScatterImage;

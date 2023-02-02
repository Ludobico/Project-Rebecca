import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import "./ParticleImage.css";

import fragment from "../Shader/particleFra.glsl";
import vertex from "../Shader/particleVe.glsl";

// const vertex = `
// varying vec2 vUv;

// void main() {
//   vUv = uv;
//   vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//   vec4 viewPosition = viewMatrix * modelPosition;
//   vec4 projectedPosition = projectionMatrix * viewPosition;

//   gl_Position = projectedPosition;
// }

// `;

// const fragment = `
// varying vec2 vUv;

// vec3 colorA = vec3(0.912,0.191,0.652);
// vec3 colorB = vec3(1.000,0.777,0.052);

// void main() {
//   // "Normalizing" with an arbitrary value
//   // We'll see a cleaner technique later :)
//   vec2 normalizedPixel = gl_FragCoord.xy/600.0;
//   vec3 color = mix(colorA, colorB, normalizedPixel.x);

//   gl_FragColor = vec4(color,1.0);
// }

// `;

const ParticleImage = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

const Scene = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshNormalMaterial /> */}
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} />
    </mesh>
  );
};

export default ParticleImage;

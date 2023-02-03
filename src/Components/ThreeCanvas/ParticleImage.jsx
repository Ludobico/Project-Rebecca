import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import "./ParticleImage.css";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import t1 from "../../Static/Img/example.jpg";
import { Texture } from "@react-three/postprocessing";

// import fragment from "../Shader/Fragment.glsl";
// import vertex from "../Shader/Vertex.glsl";

const vertex = `
varying vec2 vUv;
varying vec3 aCoordinates;
varying vec2 vCoordinates;
uniform sampler2D t1;
uniform sampler2D t2;

void main() {
  vUv = uv;

  vec4 mvPosition = modelViewMatrix * vec4( position, 1.);

  gl_PointSize = 50. * (1. / - mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;

  vCoordinates = aCoordinates.xy;
}

`;

const fragment = `
varying vec2 vUv;
varying vec2 vCoordinates;
uniform sampler2D t1;
uniform sampler2D t2;

void main(){
  vec2 myUV = vec2(vCoordinates.x/512. , vCoordinates.y/512.);
  vec4 iamge = texture2D(t1, myUV)
  gl_FragColor = image
}

`;

const ParticleImage = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

const Scene = () => {
  const mesh = useRef();
  let number = 512 * 512;

  return (
    <points ref={mesh}>
      <planeBufferGeometry args={[2, 2, 10, 10]} />
      <meshNormalMaterial />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{
          progress: { type: "f", value: 0 },
          t1: { type: "t", value: Texture[0] },
        }}
        side={THREE.DoubleSide}
      />
      <OrbitControls autoRotate />
    </points>
  );
};

export default ParticleImage;

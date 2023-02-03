import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
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

const scatterImage = (image, size, intensity) => {
  const uniforms = {
    texture: { value: new THREE.TextureLoader().load(image) },
    time: { value: 0.0 },
    intensity: { value: intensity },
  };

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: `
    uniform sampler2D texture;
    uniform float time;
    uniform float intensity;

    varying vec2 vUv;

    void main(){
    vec2 uv=vUv;
    uv.x+=(sin(uv.y*10.+time*2.)*.5+sin(uv.x*10.+time*3.))*intensity;
    uv.y+=(sin(uv.x*10.+time*2.)*.5+sin(uv.y*10.+time*3.))*intensity;
    gl_FragColor=texture2D(texture,uv);
  }`,
    transparent: true,
  });
  return { material, size };
};

const ParticleImage = ({ image, size, intensity }) => {
  const meshRef = useRef(null);
  const [time, setTime] = useState(0);

  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.time.value = time + clock.getDelta();
  });

  return (
    <mesh ref={meshRef}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      {scatterImage(image, size, intensity).material}
    </mesh>
  );
};

export default ParticleImage;

import { useLoader } from "@react-three/fiber";
import {
  BrightnessContrast,
  EffectComposer,
  SMAA,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction } from "postprocessing";
import React, { useEffect } from "react";
import { GLTFLoader } from "three-stdlib";

const GltfModel = () => {
  const gltf = useLoader(GLTFLoader, "/nightcity/scene.gltf");
  // gltf.materials.Dtla_Orbit_u1_v1.wireframe = true;
  // gltf.materials.Dtla_Orbit_u1_v2.wireframe = true;
  // gltf.materials.Dtla_Orbit_u2_v1.wireframe = true;
  // gltf.materials.Dtla_Orbit_u2_v2.wireframe = true;
  // gltf.materials.Dtla_Orbit_u3_v1.wireframe = true;
  console.log(gltf);

  return (
    <>
      <primitive object={gltf.scene} scale={1.2} />;
      <EffectComposer multisampling={0}>
        <BrightnessContrast brightness={0} contrast={0.5} />
        <SMAA />
      </EffectComposer>
    </>
  );
};

export default GltfModel;

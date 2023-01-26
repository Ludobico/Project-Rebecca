import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three-stdlib";

const GltfModel = () => {
  const gltf = useLoader(GLTFLoader, "/nightcity/scene.gltf");
  useEffect(() => {
    gltf.scene.traverse((obj) => {
      if (obj.isMesh) {
        // obj.material.wireframe = true;
        // obj.material.color.set(0xff0000);
      }
    });
  }, [gltf]);
  gltf.materials.Dtla_Orbit_u1_v1.wireframe = true;
  gltf.materials.Dtla_Orbit_u1_v2.wireframe = true;
  // gltf.materials.Dtla_Orbit_u2_v1.wireframe = true;
  // gltf.materials.Dtla_Orbit_u2_v2.wireframe = true;
  // gltf.materials.Dtla_Orbit_u3_v1.wireframe = true;
  console.log(gltf);

  return <primitive object={gltf.scene} scale={1.2} />;
};

export default GltfModel;

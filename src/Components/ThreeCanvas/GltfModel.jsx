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
  console.log(gltf);

  const frameGltf = (gltf) => {
    gltf.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material.wireframe = true;
        obj.material.color.set(0xff0000);
      }
    });
  };
  return <primitive object={gltf.scene} />;
};

export default GltfModel;

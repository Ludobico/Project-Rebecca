import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import "./Main.css";
import Header from "../Header";
import { OrbitControls, PerspectiveCamera, Gltf } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "/nightcity/scene.gltf");
  //   useEffect(() => {
  //     gltf.scene.traverse((obj) => {
  //       if (obj.isMesh) {
  //         obj.material.wireframe = true;
  //         obj.material.color.set(0xff0000);
  //       }
  //     });
  //   }, [gltf]);
  const frameGltf = (gltf) => {
    gltf.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material.wireframe = true;
        obj.material.color.set(0xff0000);
      }
    });
  };
  return (
    <>
      <Suspense fallback={"null"}>
        <div className="citymodel">
          <Canvas>
            <PerspectiveCamera makeDefault position={[5, 5, -11]} />
            <directionalLight intensity={0.5} />
            {/* <Gltf src="/nightcity/scene.gltf" /> */}
            <primitive object={gltf.scene} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate
            />
          </Canvas>
        </div>
        <div className="intro_city_top_div">
          <div className="main_intro">Night City</div>
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

// import { useFrame, useRef } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// function WireframeModel() {
//   const meshRef = useRef();
//   useEffect(() => {
//     new GLTFLoader().load("/model.gltf", (gltf) => {
//       meshRef.current = gltf.scene;
//     });
//   }, []);

//   useFrame((state, delta, interaction) => {
//     if (interaction.raycaster) {
//       const raycaster = interaction.raycaster;
//       const object = meshRef.current;
//       raycaster.setFromCamera(interaction.mouse, state.camera);
//       if (raycaster.intersectObject(object).length > 0) {
//         object.traverse((child) => {
//           if (child.isMesh) {
//             child.material.wireframe = true;
//           }
//         });
//       } else {
//         object.traverse((child) => {
//           if (child.isMesh) {
//             child.material.wireframe = false;
//           }
//         });
//       }
//     }
//   });
//   return <primitive ref={meshRef} />;
// }

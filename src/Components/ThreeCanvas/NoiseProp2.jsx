import { Image, Text } from "@react-three/drei";
import React, { Suspense } from "react";
import mugshot from "../../Static/Img/lucy.jpg";
import "./NoiseProp.css";
import NoiseProp2Effect from "./NoiseProp2Effect";

const NoiseProp2 = () => {
  const characters = [
    {
      mugshot: mugshot,
      occupation: "Netrunner",
      name: "Lucy",
      state: "Unknown",
      age: "20",
      bio: `Don’t make a name for yourself as a cyberpunk by how you live… Make a name by how you die.`,
    },
  ];
  return (
    <>
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Image
          url={characters[0].mugshot}
          scale={[2, 4]}
          position={[3, 0, 0]}
        />
        <Text position={[-2, 2, 0]} fontSize={0.2} anchorX="left">
          {characters[0].name}
        </Text>
        <Text position={[-2, 1.6, 0]} fontSize={0.17} anchorX="left">
          Occupation: {characters[0].occupation}
        </Text>
        <Text position={[-2, 1.2, 0]} fontSize={0.17} anchorX="left">
          Age: {characters[0].age}
        </Text>
        <Text
          position={[-2, 0.4, 0]}
          fontSize={0.17}
          anchorX="left"
          anchorY="top"
          maxWidth={3}
        >
          {characters[0].bio}
        </Text>
        <Text position={[-2, -1.3, 0]} fontSize={0.2} anchorX="left">
          State
        </Text>
        <Text
          position={[-2, -1.5, 0]}
          fontSize={0.14}
          anchorX="left"
          color="red"
        >
          {characters[0].state}
        </Text>
        <NoiseProp2Effect />
      </Suspense>
    </>
  );
};

export default NoiseProp2;

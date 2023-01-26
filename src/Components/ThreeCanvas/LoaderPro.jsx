import { Html, useProgress } from "@react-three/drei";
import React from "react";

const LoaderPro = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

export default LoaderPro;

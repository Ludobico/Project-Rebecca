import {
  EffectComposer,
  Scanline,
  Noise,
  Bloom,
  Glitch,
  Vignette,
  SMAA,
} from "@react-three/postprocessing";
import React from "react";
import {
  BlendFunction,
  BlurPass,
  Resizer,
  KernelSize,
  GlitchMode,
  GlitchEffect,
} from "postprocessing";

const NoiseProp2Effect = () => {
  return (
    <EffectComposer>
      <Noise opacity={0.3} />
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        intensity={0.3}
        radius={2}
      />
    </EffectComposer>
  );
};

export default NoiseProp2Effect;

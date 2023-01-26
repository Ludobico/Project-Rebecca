import {
  EffectComposer,
  Scanline,
  Noise,
  Bloom,
  Glitch,
  Vignette,
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

const NoiseProp1Effect = () => {
  return (
    <EffectComposer>
      <Noise opacity={0.5} />
      <Scanline
        blendFunction={BlendFunction.DARKEN}
        opacity={0.1}
        density={0.8}
      />
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        intensity={2}
        radius={2}
      />
      <Glitch strength={[0, 0]} />
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default NoiseProp1Effect;

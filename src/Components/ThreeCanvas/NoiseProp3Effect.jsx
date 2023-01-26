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

const NoiseProp3Effect = () => {
  return (
    <EffectComposer>
      <Noise opacity={0.5} />
      <Scanline
        blendFunction={BlendFunction.DARKEN}
        opacity={0.2}
        density={0.9}
      />
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        intensity={1.4}
        radius={2}
      />
      <Glitch
        strength={[0.0, 0.2]}
        ratio={0.85}
        mode={GlitchMode.SPORADIC}
        delay={[1.5, 3.5]}
      />
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default NoiseProp3Effect;

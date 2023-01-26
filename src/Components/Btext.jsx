import React, { useEffect, useState } from "react";
import TextTransition, { present, presets } from "react-text-transition";
import "./Btext.css";

const Btext = () => {
  const [index, Setindex] = useState(0);
  const TEXTS = [
    "The world has collapsed. Elite capitalists manipulate society as a whole from the tops of high-rise buildings.",
    "Under their feet, thugs who sell drugs and exploiters who addict people to illegal virtual realities, people who are absorbed in technology, dominate the common people.",
    "In between, there is only corruption, violent crime, decadent sex and popular culture, extreme poverty and unfulfilled American dream.",
  ];

  useEffect(() => {
    const intervalID = setInterval(() => {
      Setindex((index) => index + 1);
    }, 6000);
    return () => clearTimeout(intervalID);
  });
  return (
    <div>
      <TextTransition overflow springConfig={presets.molasses}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
};

export default Btext;

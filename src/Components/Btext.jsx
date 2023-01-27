import React, { useEffect, useState } from "react";
import TextTransition, { present, presets } from "react-text-transition";
import "./Btext.css";

const Btext = () => {
  const [index, Setindex] = useState(0);
  const TEXTS = [
    "The City of Dreams was founded in the 1990s by visionary industrialist Richard Night.",
    "When the world of late 20th century plunged into chaos, Night envisioned a modern metropolis free from crime, poverty and corruption.",
    "Corporate partners Arasaka, EBM, and Petrochem helped him realize this vision, investing in the foundation of what would become the Free City of Night City.",
    "The city would develop into a haven for young idealists and a beacon for others who sought to fulfill their own dreams.",
    "And although Richard fell to assassins and many new generations seeking fame, fortune and freedom have suffered their own series of setbacks, the city`s legendary status endures today.",
    "Night City has it all: from the monumental skyscrapers of industry-leading megacorporations, to the luxury villas of world-renowned stars, to the lawless neighborhoods where war is waged every day.",
    "You will stumble across mercenaries, gangs and famous rockers, but also junkies, bums and even cyberpsychos.",
    "You will stand in the shadows of colossal megabuildings and get lost in the maze of streets, alleys and markets. You will make your dreams come true or die trying.",
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

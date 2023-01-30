import create from "zustand";

const useZustand = create(() => ({
  Numberpad1: Math.floor(Math.random() * 9399699799 + 100000),
  Numberpad2: Math.floor(Math.random() * 9352988699 + 100000),
  Numberpad3: Math.floor(Math.random() * 9929494699 + 100000),
  Numberpad4: Math.floor(Math.random() * 9499595989 + 100000),
  Numberpad5: Math.floor(Math.random() * 9697986912 + 100000),
}));

export default useZustand;

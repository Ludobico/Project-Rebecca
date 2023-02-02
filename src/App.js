import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/ThreeCanvas/Main";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/Info/Info";
import ParticleImage from "./Components/ThreeCanvas/ParticleImage";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/part" element={<ParticleImage />} />
      </Routes>
    </div>
  );
}

export default App;

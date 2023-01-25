import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/ThreeCanvas/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

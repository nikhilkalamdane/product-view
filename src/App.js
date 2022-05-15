import Screen1 from "./screen/Screen1";
import Screen2 from "./screen/Screen2";
import Screen3 from "./screen/Screen3";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Screen1 />} />
          <Route exact path="/screen2" element={<Screen2 />} />
          <Route exact path="/screen3" element={<Screen3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

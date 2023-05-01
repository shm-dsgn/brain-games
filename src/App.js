import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/auth";
import Memory from "./components/Memory/Memory";
import Response from "./components/Response/Response";
import Scramble from "./components/Scramble/Scramble";
import NavBar from "./components/NavBar/NavBar";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/response" element={<Response />} />
        <Route path="/scramble" element={<Scramble />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;

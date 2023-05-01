import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Memory from "./components/Memory/Memory";
import Response from "./components/Response/Response";
import Scramble from "./components/Scramble/Scramble";
import NavBar from "./components/NavBar/NavBar";
import Error from "./components/Error/Error";

function App() {
  const [memScore, setMemScore] = useState(0);
  const [scrambleScore, setScrambleScore] = useState(0);
  const [responseScore, setResponseScore] = useState(0);
  const [published, setPublished] = useState(false);

  const MemoryCallback = (childData) => {
    setMemScore(childData);
    setPublished(true);
  };

  const ScrambleCallback = (childData) => {
    setScrambleScore(childData);
    setPublished(true);
  };

  const ResponseCallback = (childData) => {
    setResponseScore(childData);
    setPublished(true);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Profile
              m={memScore}
              s={scrambleScore}
              r={responseScore}
              p={published}
            />
          }
        />
        <Route
          path="/memory"
          element={<Memory handleCallback={MemoryCallback} />}
        />
        <Route
          path="/scramble"
          element={<Scramble handleCallback={ScrambleCallback} />}
        />
        <Route
          path="/response"
          element={<Response handleCallback={ResponseCallback} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="pages" to="/">
              AllPlayers
            </Link>
          </li>
          <br />
          <li>
            <Link to="/SinglePlayer">SinglePlayer</Link>
          </li>
          <br />
          <li>
            <Link to="/NewPlayerForm">NewPlayerForm</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/SinglePlayer" element={<SinglePlayer />} />
        <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;

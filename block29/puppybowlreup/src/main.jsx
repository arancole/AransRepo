import React from "react";
// import AllPlayers from "./components/AllPlayers";
// import SinglePlayer from "./components/SinglePlayer";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<AllPlayers />} /> */}
      {/* <Route
          index // <-- "/"
          element={<div>Default Page Content</div>}
        /> */}
      {/* <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

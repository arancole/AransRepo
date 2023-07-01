import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  console.log(puppies);
  const [puppies, setPuppies] = useState(puppyList);
  return <h1>Hello</h1>;
}

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      <p>{featPupId}</p>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
              console.log("puppy id: ", puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;

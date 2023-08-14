import React from "react";
import fetchAllPlayers from "./ajaxHelpers.js";
import { useState, useEffect } from "react";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    try {
      const fetchAllPlayers = async () => {
        // fetch all the pokemon
        const response = await fetch("http://localhost:5173/AllPlayers");
        const data = await response.json();
        setPlayers(data);
      };

      // catch all pokemon
      fetchAllPlayers();
      console.log("-----------------> Component Mounted--------------->");
    } catch (error) {
      console.error("There was error catching pokemon", error);
    }
  }, []);
  return (
    <div>
      {players.map((player) => {
        return (
          <div>
            <h2>${player.id}</h2>
            <p>${player.name}</p>
            <p>${player.breed}</p>
            {/* <>imgUrl={player.imageUrl}</> */}
          </div>
        );
      })}
    </div>
  );
}

export default AllPlayers;

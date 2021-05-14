import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import Character from "./components/Character"

const App = () => {
  const [starWarsData, setStarWarsData] = useState()
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  useEffect(() => {
    axios
    .get("https://swapi.dev/api/people")
    .then((res) => {
      setStarWarsData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starWarsData && <Character starWarsData={starWarsData}/>}
    </div>
  );
}

export default App;

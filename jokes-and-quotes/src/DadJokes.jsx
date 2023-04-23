import React, { useEffect, useState } from "react";
import { dadJokes } from "./data/Jokes";
import './styles/jokes.css'

function DadJokes() {

    const [joke, setJokes] = useState("Welcome to joke generator")

    function handleClick(){
        let randomNumber = Math.floor(Math.random()*dadJokes.length)
        let randomJokes = dadJokes[randomNumber]
        console.log(randomJokes)

        
        setJokes(`"${randomJokes}"`)
    }

  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Dont Laugh Challenge</h1>
        <h2 className="joke-container">{joke}</h2>
        <button className="button-generator" onClick={handleClick}>Get Jokes</button>
      </div>
    </div>
  );
}

export default DadJokes;

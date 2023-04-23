import React, { useState } from 'react'
import './styles/jokes.css'

function DadJokesWithAPi() {
    const [joke, setJoke] =useState("Welcome to the Joke Generator")

    function jokeGenerator(){
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => setJoke(`"${data.setup} ${data.punchline}"`))
            .catch(error => console.log(error))
    }


  return (
    <div className="body">
      <div className="container">
        <h1 className="title">Dont Laugh Challenge</h1>
        <h2 className="joke-container">{joke}</h2>
        <button className="button-generator" onClick={jokeGenerator}>Get Jokes</button>
      </div>
    </div>
  )
}

export default DadJokesWithAPi
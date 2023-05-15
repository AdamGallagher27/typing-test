import React, { useState, useEffect } from "react";
import { Timer } from "./components/Timer";
import { Text } from "./components/Text";

function App() {
    const [words, setWords] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const [copy, setCopy] = useState('')
    const PARAGRAPHS = 2
    const API_KEY = process.env.REACT_APP_API_KEY

    // load lorem ipsum from api
    useEffect(() => {

        // create header and append api key
        const HEADERS = new Headers()
        HEADERS.append('X-api-key', `${API_KEY}`)

        // fetch data
        fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=${PARAGRAPHS}`,
            {
                headers: HEADERS
            }
        )
        .then(response => response.json())
        .then(json => setCopy(json.text))
        .catch(error => console.log(error))
    }, [])

    return (

        <div>
            <p>Game Over : {gameOver ? "true" : "false"} </p>
            <p>{words}</p>
            <Text setWords={setWords} gameOver={gameOver} copy={copy} />
            <Timer setGameOver={setGameOver} />
        </div>
    );
}

export default App;

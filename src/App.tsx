import React, { useState, useEffect } from "react";
import { Timer } from "./components/Timer";
import { Text } from "./components/Text";

function App() {
    const [words, setWords] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    return (
        <div>
            <p> {gameOver ? "true" : "false"} </p>
            <p>{words}</p>
            <Text setWords={setWords} gameOver={gameOver} />
            <Timer setGameOver={setGameOver} />
        </div>
    );
}

export default App;

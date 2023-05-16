import { useState, useEffect } from "react"
import { Timer } from "./components/Timer"
import { Text } from "./components/Text"
import { Result } from "./components/Result";


function App() {
    const [words, setWords] = useState('')
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
        <>
            {/* if words is not empty (ie...game over) */}
            {/* show results component */}
            {words !== '' ? (
                <Result words={words} copy={copy} />
            )
                // else show text / timer component
                :
                <div>
                    <p>{words}</p>
                    <Text setWords={setWords} gameOver={gameOver} copy={copy} />
                    <Timer setGameOver={setGameOver} />
                </div >}
        </>
    );
}

export default App;


import React from 'react'

interface Props {
    words: string,
    copy: string
}

export const Result = (props: Props) => {

    // number of words typed
    const wordCount = () => {
        return props.words.split(' ').length 
    }

    // get the accuracy of what is typed compared to copy text
    const calcAccuracy = (typed: string, copy: string) => {
        const length = typed.length
        let diff = 0

        // for every letter compare it to the letter in the same position
        // if they are different add one to diff
        for(let i = 0; i < length; i++) {
            if(typed[i] !== copy[i]) {
                diff++
            }
        }

        // get the differance as a percentage
        const percentDiff = ((length - diff) / length) * 100

        return percentDiff
    }

    // reload page
    const reload = () => {
        window.location.reload()
    }

    return(
        <div>
            <p>
                accuracy: {calcAccuracy(props.words, props.copy)}
            </p>
            <p>
                wpm: {wordCount()}
            </p>

            <button onClick={reload}>Restart</button>
        </div>
    )
}
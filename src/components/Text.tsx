import { useState } from 'react'

interface Props {
	setWords: React.Dispatch<React.SetStateAction<any>>,
	gameOver: boolean
};

export const Text = (props: Props) => {

	const copy = 'blah blah blah blah'
	const [typed, setTyped] = useState('')

	// returns the current letter
	const currentLetter = (text: string): string => {
		return text.charAt(text.length - 1)
	}

	// checks if the current letter is === copyLetter
	const compLetters = (current: string, copyLetter: string): boolean => {
		if (current == copyLetter) {
			console.log(current + ' is ' + copyLetter)
			return true
		}
		else {
			console.log(current + ' is not ' + copyLetter)
			return false
		}
	}

	// when the timer runs out and game over becomes true
	// send typed words to parent component
	const getSentence = (text: string) => {
		if (props.gameOver) {
			props.setWords(text)
		}
	}

	return (
		<>
			<div>{copy}</div>
			{
				// if game is not over show input
				!props.gameOver ?
					<input type="text" onChange={(e) => {
						const current = currentLetter(e.target.value)
						const position = e.target.value.length - 1
						setTyped(e.target.value)
						compLetters(current, copy[position])
					}} /> 
				
				// else send sentence to 
				: getSentence(typed)
			}
		</>
	)
}

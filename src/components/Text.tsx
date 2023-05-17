import { useState, useRef, useEffect } from 'react'
import '../App.css'

interface Props {
	setWords: React.Dispatch<React.SetStateAction<any>>,
	gameOver: boolean
	copy: string
};

export const Text = (props: Props) => {

	const copy = props.copy
	const inputRef = useRef<HTMLInputElement>(null)
	const [typed, setTyped] = useState('')


	// focus on the text input box
	useEffect(() => {
		inputRef.current?.focus()
	}, [])


	// returns the current letter
	const currentLetter = (text: string): string => {
		return text.charAt(text.length - 1)
	}


	// this splits copy text into charachters wrapped by spans
	// with unique id
	const renderCopy = (copy: string) => {
		const chars = copy.split('');
		return chars.map((char, index) => (
			<span className='reset' id={index.toString()} key={index}>{char}</span>
		))
	}


	// add a class to a specified span
	const targetSpan = (id: string, className: string) => {
		const span = document.getElementById(id)
		span?.classList.add(className)
	}


	// remove classes on span
	const resetCol = (id: string) => {
		const span = document.getElementById(id)
		
		if(span?.classList.contains('right')) {
			span?.classList.remove('right')
		}
		if(span?.classList.contains('wrong')) {
			span?.classList.remove('wrong')
		}
	}


	// checks if the current letter is === copyLetter
	const compLetters = (current: string, index: number) => {

		const copyLetter = copy[index]

		// reset the colour for the charachter ahead of current index
		resetCol((index + 1).toString())

		// if the typed charchter is correct make it blue
		// if its wrong make it red
		if (current == copyLetter) {
			targetSpan(index.toString(), 'right')
		}
		else if (current != copyLetter) {
			targetSpan(index.toString(), 'wrong')
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
			<div>{renderCopy(props.copy)}</div>
			{
				// if game is not over show input
				!props.gameOver ?
					<input type="text" ref={inputRef} onChange={(e) => {
						const current = currentLetter(e.target.value)
						const position = e.target.value.length - 1
						// console.log(position)
						setTyped(e.target.value)
						compLetters(current, position)
					}} />

					// else send sentence to 
					: getSentence(typed)
			}
		</>
	)
}

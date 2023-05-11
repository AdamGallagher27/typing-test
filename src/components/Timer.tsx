import React from 'react'
import { useState, useEffect } from 'react'

interface Props {
    setGameOver: React.Dispatch<React.SetStateAction<any>>,
};


export const Timer = (props: Props) => {

	// start time and state variable for the timer
	const startTime = 5
	const [time, setTime] = useState(startTime)

	// reset the timer to the start variable
	const resetTimer = () => {
		setTime(startTime)
	}

	// tick the timer down 
	// if time is 0 call reset
	const tick = () => {
		if(time === 0) {
			props.setGameOver(true)
			resetTimer()
		}
		else {
			setTime( time - 1 )
		}
	}



	// every 1000 miliseconds call tick then clear interval
	useEffect(() => {
		const timerId = setInterval(() => tick(), 1000)
		return () => clearInterval(timerId)
	})

	return (
		<div>
			<p>{`${time.toString()}`}</p>
		</div>
	)
}
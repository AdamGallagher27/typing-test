import {useState} from 'react'

export const Text = () => {

  const [typed, setTyped] = useState('')
  const copy = 'blah blah blah blah'

  const currentLetter = (text: string): string => {
    return text.charAt(text.length-1)
  }

  const compLetters = (current: string, copyLetter: string): boolean  => {
    return current === copyLetter
  }

  return (
    <>
      <div>{typed}</div>
      <input type="text" onChange={ (e) => {
        const current = currentLetter(e.target.value)
        setTyped(e.target.value)
        console.log(current)
        // console.log(currentLetter(e.target.value))
        // console.log(compLetters(e.target.value, 'p'))
      }} />
    </>
  )
}

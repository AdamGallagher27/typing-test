import {useState} from 'react'



export const Text = () => {

  const [typed, setTyped] = useState('')
  const copy = 'blah blah blah blah'


  const currentLetter = (text: string): string => {
    return text.charAt(text.length-1)
  }

  const compLetters = (current: string, copyLetter: string): boolean  => {
    if(current == copyLetter) {
      console.log(current + ' is ' + copyLetter)
      return true
    }
    else {
      console.log(current + ' is not ' + copyLetter)
      return false
    }
  }

  return (
    <>
      <div>{copy}</div>
      <div>{typed}</div>
      <input type="text" onChange={ (e) => {
        const current = currentLetter(e.target.value)
        const position = e.target.value.length - 1
        setTyped(e.target.value)
        compLetters(current, copy[position])

      }} />
    </>
  )
}

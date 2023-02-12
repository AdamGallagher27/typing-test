import {useState} from 'react'

export const Text = () => {

  const [typed, setTyped] = useState('')

  return (
    <>
      <div>{typed}</div>
      <input type="text" onChange={ (e) => setTyped(e.target.value)} />
    </>
  )
}

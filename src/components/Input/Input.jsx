import { useState } from 'react'
import style from './Input.css'

export const Input = (props) => {
  const [text, setText] = useState('some text')

  /*const handleChange = (ev) => {
    setText(ev.target.value)
  }*/

  return (
    <>
      <p>{text}</p>
      <input onChange={ev =>  setText(ev.target.value)} />
    </>
  )
}
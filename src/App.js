import React, { Fragment } from 'react';
import { Button } from './components/Button/Button.jsx';
import { Input } from './components/Input';

import style from './App.module.css';

const text='Benfica'
function App() {
  return (
    <>
      <h2 className={style.header} style={{color:"blue"}}>Olá, Olá!</h2>
      <Input text={text}/>
      <Button text={text}/>
      <Button text={'Porto'}/>
    </>
  )
}

export default App;

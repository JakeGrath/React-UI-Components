import React from 'react';
import './App.css';
import CalculatorComponentDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='app'>
      <CalculatorComponentDisplay />
      <div className='button-container'>
      <NumberButton buttonStyle='button wide clear' text='clear' />
      <ActionButton buttonStyle='button red' text='÷' />
      <NumberButton buttonStyle='button' text='7' />
      <NumberButton buttonStyle='button' text='8' />
      <NumberButton buttonStyle='button' text='9' />
      <ActionButton buttonStyle='button red' text='x' />
      <NumberButton buttonStyle='button' text='4' />
      <NumberButton buttonStyle='button' text='5' />
      <NumberButton buttonStyle='button' text='6' />
      <ActionButton buttonStyle='button red' text='-' />
      <NumberButton buttonStyle='button' text='1' />
      <NumberButton buttonStyle='button' text='2' />
      <NumberButton buttonStyle='button' text='3' />
      <ActionButton buttonStyle='button red' text='+' />
      <NumberButton buttonStyle='button wide clear' text='0' />
      <ActionButton buttonStyle='button red' text='=' />
      </div>
    </div>
  );
};

const Buttons = document.querySelectorAll('.button');
console.log(Buttons)

Buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(button)
        if (button.textContent === '1'){
            CalculatorComponentDisplay = 1;
        }
    })
} )

export default App;

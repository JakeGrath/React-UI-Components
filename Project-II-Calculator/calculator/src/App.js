import React from 'react';
import './App.css';
import CalculatorComponentDisplay from './components/DisplayComponents/CalculatorDisplay';
import Button from './components/ButtonComponents/Button';

const btnText = ['Clear', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '=']

function getStyle(data){
 if (data === 0 || data === 'Clear'){
    return 'wide clear'
  }
  else if (data === '÷' || data === 'x' || data === '-' || data === '+' || data === '='){
    return 'red'
  }
}

const App = () => {
  return (
    <div className='app'>
      <CalculatorComponentDisplay />
      <div className='button-container'>
        {btnText.map(txt =>{
          return (<Button buttonStyle={'button ' + getStyle(txt)} text={txt} />)
        })}
      </div>
    </div>
  );
};


export default App;

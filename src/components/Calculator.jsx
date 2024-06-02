
import React, { useState } from 'react';
import buttons from '../helpers/ButtonLists';
import { Button } from './Button';
import '../css/styles.css';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');

  const handleNumber = (num) => {
    if (input === '0') {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  const handleOperator = (operator) => {
    setInput(input + ' ' + operator + ' ');
  };

  const handleClear = () => {
    setInput('0');
    setOutput('');
  };

  const handleDecimal = (dot) => {
    if (!input.includes('.')) {
      setInput(input + dot);
    }
  };
  const handleEquals = () => {
    try {
      const result = eval(input); 
      setOutput(result);
      setInput(result.toString());
   
    } catch (error) {
      setInput('Error');
    }
  };
  
  const handleClick = (value) => {
    if (!isNaN(value)) {
      handleNumber(value);
    } else if (value === 'AC') {
      handleClear();
    } else if (value === '.') {
      handleDecimal(value);
    } else if (value === '=') {
      handleEquals();
    } else {
      handleOperator(value);
    }
  };

  return (
    <>
     <div id='app'>
      <div className="calculator">
        <div className="formulaScreen">{input}</div>
        <div id="display" className="outputScreen">{input}</div>
        <div className="buttons">
          {buttons.map((button) => (
            <Button
              key={button.id}
              id={button.id}
              value={button.value}
              className={button.className}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  <div className="author"> Created and Coded By Perla Serrano</div>

    </>
   
  );
};

export default Calculator;

import { useRef, useState } from 'react';

export const useCalculator = () => {
  enum Operators {
    add,
    subtract,
    multiply,
    divide,
  }

  const operatorType = {
    add: '+',
    subtract: '-',
    multiply: 'x',
    divide: '/',
  };

  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const lastOperation = useRef<Operators>();
  const cero = 'You cannot divide by 0';

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const doNumber = (numberPressed: string) => {
    if (prevNumber === cero) setPrevNumber('0');

    if (number.includes('.') && numberPressed === '.') return;
    // only 1 dot

    if (number.startsWith('0') || numberPressed.startsWith('-0')) {
      // decimal
      if (numberPressed === '.') {
        setNumber(number + numberPressed); // => 0.
      } else if (numberPressed === '0' && number.includes('.')) {
        setNumber(number + numberPressed);
      } else if (numberPressed !== '0' && !number.includes('.')) {
        setNumber(numberPressed);
      } else if (numberPressed === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberPressed);
      }
    } else {
      setNumber(number + numberPressed);
    }
  };

  const positiveOrNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteLastNum = () => {
    if (number.length - 1 === 1 && number.includes('-')) {
      setNumber('0');
    } else if (number.length - 1 > 0) {
      setNumber(number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const switchNumToPrev = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const operation = (sign: string) => {
  }

  const divideBtn = () => {
    switchNumToPrev();
    lastOperation.current = Operators.divide;
    setOperator(operatorType.divide);
  };

  const multiplyBtn = () => {
    switchNumToPrev();
    lastOperation.current = Operators.multiply;
    setOperator(operatorType.multiply);
  };

  const subtractBtn = () => {
    switchNumToPrev();
    lastOperation.current = Operators.subtract;
    setOperator(operatorType.subtract);
  };

  const addBtn = () => {
    switchNumToPrev();
    lastOperation.current = Operators.add;
    setOperator(operatorType.add);
  };

  const resultBtn = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.divide:
        if (num1 === 0) setNumber(cero);
        else setNumber(`${num2 / num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case undefined || NaN:
        setNumber('0');
        break;
    }
    setPrevNumber('0');
  };

  return {
    prevNumber,
    number,
    operator,
    operation,
    clean,
    doNumber,
    positiveOrNegative,
    deleteLastNum,
    divideBtn,
    multiplyBtn,
    subtractBtn,
    addBtn,
    resultBtn,
  };
};

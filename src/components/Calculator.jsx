import React, { useState } from 'react'
import { Box } from '@mui/material'
import './Calculator.css'
import Container from '@mui/material/Container'

export default function Calculator() {
  const [num, setNum] = useState('0')
  const [oldNum, setOldNum] = useState('0')
  const [operator, setOperator] = useState('')
  const [display, setDisplay] = useState('0')

  function inputNum(e) {
    const value = e.target.value
    if (num === '0') {
      setNum(value)
      setDisplay(value)
    } else {
      setNum(num + value)
      setDisplay(num)
    }
  }

  function clear() {
    setNum('0')
    setOldNum('0')
    setOperator('')
    setDisplay('0')
  }

  function percentage() {
    const percentageValue = (parseFloat(num) / 100).toString()
    setNum(percentageValue)
    setDisplay(percentageValue)
  }

  function changeSign() {
    const newValue = (parseFloat(num) * -1).toString()
    setNum(newValue)
    setDisplay(newValue)
  }

  function operatorHandler(e) {
    const value = e.target.value
    setOperator(value)
    setOldNum(num)
    setNum('0')
  }

  function calculate() {
    let result = 0
    const num1 = parseFloat(oldNum)
    const num2 = parseFloat(num)

    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '/':
        result = num1 / num2
        break
      case 'X':
        result = num1 * num2
        break
      default:
        break
    }

    const resultString = result.toString()
    setNum(resultString)
    setDisplay(resultString)
  }

  return (
    <>
      <Box m={10} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <div className="display">{display}</div>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={inputNum} value="7">
            7
          </button>
          <button className="gray" onClick={inputNum} value="8">
            8
          </button>
          <button className="gray" onClick={inputNum} value="9">
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value="4">
            4
          </button>
          <button className="gray" onClick={inputNum} value="5">
            5
          </button>
          <button className="gray" onClick={inputNum} value="6">
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value="1">
            1
          </button>
          <button className="gray" onClick={inputNum} value="2">
            2
          </button>
          <button className="gray" onClick={inputNum} value="3">
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="zero gray" onClick={inputNum} value="0">
            0
          </button>
          <button className="dot gray" onClick={inputNum} value=".">
            .
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </>
  )
}

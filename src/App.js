import logo from './logo.svg';
import "./styles.css"
import React, {useState} from 'react';
import { lastIndexOf } from 'lodash';

function App() {
  const[calc, setCalc] = useState("")
  const[result, setResult] = useState("")
  const ops =['/', '*', '+', '- ', '.']

  const updateCalc = value => {
    if((ops.includes(value) && calc==="") || 
      (ops.includes(value) && ops.includes(calc.charAt(calc.length-1)))  
    ){
      return;
    }
    setCalc(calc + value);
  }

  const clearContent = () => {
    setCalc("");
    setResult("");
  }

  const calculateExpression = () => {
    let answer;
    if(eval(calc)){
      answer = eval(calc);
    }
    else{
      answer="Invalid Syntax"
    }
    // const  answer = eval(calc);
    setResult(answer);
    setCalc("")
    // console.log(answer);
    
  }
  // function handleClick(event){
  //   setResult(event.target.name)
  // }
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          {/* <div className="previous-operand"></div> */}
          <div className="current-operand"> <span>({result})</span>{calc}</div>
        </div>
        <button onClick={clearContent} className="span-three">AC</button>
        {/* Deal with the DEL onclick function  */}
        {/* <button name="">DEL</button> */}
        <button onClick={()=>updateCalc("/")} name= "/">÷</button>
        <button onClick={()=>updateCalc("1")}name= "1">1</button>
        <button onClick={()=>updateCalc("2")}>2</button>
        <button onClick={()=>updateCalc("3")}>3</button>
        <button onClick={()=>updateCalc("*")}>*</button>
        <button onClick={()=>updateCalc("4")}>4</button>
        <button onClick={()=>updateCalc("5")}>5</button>
        <button onClick={()=>updateCalc("6")}>6</button>
        <button onClick={()=>updateCalc("+")}>+</button>
        <button onClick={()=>updateCalc("7")}>7</button>
        <button onClick={()=>updateCalc("8")}>8</button>
        <button onClick={()=>updateCalc("9")}>9</button>
        <button onClick={()=>updateCalc("-")}>-</button>
        <button onClick={()=>updateCalc(".")}>.</button>
        <button>0</button>
        <button onClick={calculateExpression} className="span-two">=</button> 
      </div>
    </>
  );
}

export default App;



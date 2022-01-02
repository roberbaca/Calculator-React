import React from 'react'
import { useState } from 'react';
import "./Calculator.css"
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs'

const Calculator = () => {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const ops = (e) => {
        setValue(value + e.target.value);        
    }

    const backspace = () => {
        try {
            setValue(value.slice(0,-1));
        } catch (error) {
            setValue("");
        }
    }

    const clearAll = () => {      
        setValue("");  
        setResult("");
    }


    const calculate = () => {
        try {           
            setResult(evaluate(value))
            // setValue("");
        } catch (error) {
            setValue("ERROR");
        }
    }   


    return (
        <div>
            <div className='calculator-container'>
                <div className='display'>
                    <input className='display-input' readOnly value={result}/>
                </div>
               
                <div className='history'>                    
                    <input className='history-input' readOnly value={value}/>
                </div>

                <div className='row'>
                    <button className='operator' onClick={backspace} value= "CE">CE</button>
                    <button className='operator' onClick={clearAll} value="C">C</button>
                    <button className='operator' onClick={ops} value="^">x²</button>
                    <button className='operator' onClick={ops} value="/">/</button>    
                </div>

                <div className='row'>
                    <button className='number' onClick={ops} value="7">7</button>
                    <button className='number' onClick={ops} value="8">8</button>
                    <button className='number' onClick={ops} value="9">9</button>
                    <button className='operator' onClick={ops} value="*">x</button>    
                </div>

                <div className='row'>
                    <button className='number' onClick={ops} value="4">4</button>
                    <button className='number' onClick={ops} value="5">5</button>
                    <button className='number' onClick={ops} value="6">6</button>
                    <button className='operator' onClick={ops} value="-">-</button>    
                </div>

                <div className='row'>
                    <button className='number' onClick={ops} value="1">1</button>
                    <button className='number' onClick={ops} value="2">2</button>
                    <button className='number' onClick={ops} value="3">3</button>
                    <button className='operator'onClick={ops} value="+">+</button>    
                </div>

                <div className='row'>
                    <button className='number' onClick={ops} value="0">0</button>
                    <button className='number' onClick={ops} value=".">.</button>
                    <button className='equal' onClick={calculate} value="=">=</button>                
                </div>            
            </div>

            <footer className = "footer">
                <a target="_blank" href="https://www.linkedin.com/in/roberto-baca">Created by Rober Baca</a>              
            </footer>
        </div>
    )
}

export default Calculator

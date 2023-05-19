import logo from './logo.svg';
import './App.css';

import Add from './components/Add/Add';
import Sub from './components/Sub/Sub';
import {useState} from 'react';

function App() {
   const [inputValue, setinputValue]= useState(0)
  //  console.log('inputValue',inputValue);                 //set Default value in console
  //  console.log('setinputValue',setinputValue);

   const printValue = () => {
   console.log('inputValue printValue',inputValue);

   }

  //let inputvalue = 10;
  return (
    <div>
    <h1>First React Class 5</h1>
    
    <div>
      <input 
      value = {inputValue}
      onChange={(e) => {
        setinputValue(e.target.value)
        console.log('event',inputValue);
        return inputValue
      }} 
      type = 'number' 
      placeholder='Enter Number'>        
      </input>
    </div>

     <button  onClick={printValue()}>Print</button>
    <p>Input Value : {inputValue}</p>
    <Add a = {inputValue} b = '3'></Add>                
    <Sub s = {inputValue} t='3'/>
    </div>
  );
}

export default App;

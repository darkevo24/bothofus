import { useState } from 'react';
import './App.css';
import dragon from "./download.jpg";
function App() {
  const [number1,setNumber1] = useState();
  const [number2,setNumber2] = useState();
  const [number,setNumber] = useState();

  return (
    <div id="main">
    <div className="App">
      <h3>Number 1 : </h3>
      <input onChange = {function(data){
        setNumber1(data.target.value);
      }} type="number" ></input>
    </div>
        <div className="App">
        <h3>Number 2 : </h3>
        <input onChange = {function(data){
          setNumber2(data.target.value);
        }} type="number" ></input>
      </div>
      <div className="App">
      <button onClick = {function(){
        var random = Math.random();
        console.log(random);
        if (random <= 0.5){
          setNumber(number1);
        }
        else {
          setNumber(number2);
        }
      }}>Click</button>
      </div>
      <div className="App">
        {number}
      </div>
      </div>
  );
}

export default App;

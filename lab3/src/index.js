import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Car from './components/Car';

const numbers = [10, 20, 30];
const text = (
  <>
    <div>HelloWorld !!! React {numbers[0] + numbers[2]}</div>
  <h3 ClassName = "red"> My name is Pruchaya</h3>
  </>
);



ReactDOM.render(<Car brand="Toyota" />, document.getElementById('root'));






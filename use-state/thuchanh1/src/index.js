import React, { useEffect } from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Example (){
 const [intt,setintt] = useState(0);
 return(
   <div> 
     <h2>gia tri : {intt}</h2>
     <button onClick={()=>{setintt(intt +1)} } >tang  </button>
   </div>
 )
} 
ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

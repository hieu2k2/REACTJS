import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Inp(){
  const [name,setname] = useState('');
  const [pass,setpass] = useState('');
  const hienthi = () => {
    let msg = 'your name : '+ name + ' '+ ' , password :' + pass ;
    document.write(msg);
  }
  return(
    <div>
   user :<input onChange={(e) => {setname(e.target.value)}}></input><hr></hr>
   pass :<input onChange={(e) => {setpass(e.target.value)}}></input><hr></hr>
     <button onClick={()=>{hienthi()}}>login</button>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Inp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

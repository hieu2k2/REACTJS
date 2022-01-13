import React from 'react';
import { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Hello(){
  let [giatri, setgiatri] = useState();
  const [name,setname] = useState("");

  useEffect(() => {
    setgiatri('xin chao ban ' + name);
  }, [name]);
  return (
    <div>
      <input onChange={(e) => setname(e.target.value)} value={name}/>
      <hr></hr> {giatri}
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

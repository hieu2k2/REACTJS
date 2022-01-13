import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Thuchanh2(){
  const [selected ,setselected] = useState('0');
  const [valueSelected, setValueSelected] = useState("");
  const choice = (e) => {
    console.log(e)
    setselected(e.target.value)
  }
  useEffect(() => {
    switch (selected) {
        case '0':
            setValueSelected("audi");
            break;
        case '1':
            setValueSelected("bmw");
            break;
        case '2':
            setValueSelected("vinfat");
            break;
        case '3':
            setValueSelected("mec");
            break;
        default:
    }
}, [selected])
      
    return (
      <div>
          Khoá học :
          <select onChange={(e) => { choice(e) }}>
              <option value="0">audi ----</option>
              <option value="1">bmw ---</option>
              <option value="2">vinfat ---</option>
              <option value="3">mec ---</option>
          </select>
          <h2>Your selected: {valueSelected}</h2>
      </div>
  );
}  
ReactDOM.render(
  <React.StrictMode>
    <Thuchanh2 />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

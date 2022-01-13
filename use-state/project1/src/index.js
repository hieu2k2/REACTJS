import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function FormatDate(date){
  const hours =  ` 0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds =`0${date.getSeconds()}`.slice(-2);
  return `${hours} : ${minutes} : ${seconds}`
}
function Time(){
 const [time,settime ] = useState('');
 useEffect(()=>{
   setInterval(() => {
     const now = new Date();
     const newtime = FormatDate(now);
     settime(newtime);
   },1000);
 },[])
 return(
   <div>

     <p > gio hien tai la : {time}</p>
   </div>
 )
}
ReactDOM.render(
  <React.StrictMode>
    <Time/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

import React from 'react';
import {useStatey} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Clock1(){
    const [time,settime] = useState("");
    const [ampm,setampm] = useState("");
    let date = new Date();
    let hour = 0 ;
    //lay gia tri cua gio
    if(date.getHours()==0){
      hour = 12 ;
    } else if (date.getHours() > 12){
      hour = date.getHours()-12;
    } else{
      hour = date.getHours()
    }
    //lay phut
    let minutes =
    date.getMinutes() < 10
      ? parseInt("0" + date.getMinutes())
      : date.getMinutes();
   // Lấy gía trị của giây 
   let seconds =
   dateInfo.getSeconds() < 10
     ? "0" + date.getSeconds()
     : date.getSeconds();

    // Định dạng ngày 
 let ampm = date.getHours() >= 12 ? "PM" : "AM";

     //  Cập nhật state 
     setampm(ampm)
       setTime(`${hour}:${minutes}:${seconds}`);
setInterval(function () {
 updateTime();
}, 1000);
           return( 
           <div className="time">
  <span className="hms">{time}</span>
     <span className="ampm">{ampm}</span>
        </div>)
}



ReactDOM.render(
  <React.StrictMode>
    <Clock1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

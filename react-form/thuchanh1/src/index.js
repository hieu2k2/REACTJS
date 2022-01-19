import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Dangki(){
   const [form,setform] = useState({});
   function handleChange(event){
     setform({...form,[event.target.name]:event.target.value})
   }
    function handleSubmit(){
 const Kiemtra = form.username && form.email && form.password && form.confirmpassword;
 alert(Kiemtra ? 'sign in now' : 'erro')
    }
   return(
    <div>
      <h1 > Sign up </h1>
      <form onSubmit={handleSubmit} >
        <p>Username:</p>
        <input name='username' onChange={handleChange} ></input>
        <p>Email:</p>
        <input type='email' name='email' onChange={handleChange}></input>
        <p>Password:</p>
        <input name='password' onChange={handleChange} ></input>
        <p>Confirmpassword:</p>
        <input name='confirmpassword' onChange={handleChange}></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
   )
}
ReactDOM.render(
  <React.StrictMode>
    <Dangki/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

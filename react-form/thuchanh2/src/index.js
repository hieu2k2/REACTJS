import React from 'react';
import { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function Dangki(){
  const [form,setform] = useState({});
  const MESSAGE_ERROR = {
    username: 'Username error',
    email: 'Email error',
	  password: 'Password error',
	  confirmPassword: 'Password must be the same'
  }

  // const REGEX = {
  //   username: /^[a-zA-Z]{2,}$/,
	//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//   password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  // }
function handleChange(event){
  

}
function handleSubmit(){

}
  return(
    <div>
      <h1> Sign up </h1>
      <form onSubmit={handleSubmit} >
        <label>Username :</label><br></br>
        <input name='username' onChange={handleChange} value={form.username ||' '} ></input><br></br>
        <label>Email : </label><br></br>
        <input type='email' name='email' onChange={handleChange} value={form.email ||' ' }></input><br></br>
        <label>Password: </label><br></br>
        <input name='password' onChange={handleChange} value={form.password||' '}></input><br></br>
        <label>Confirmpassword:</label><br></br>
        <input name='confirmpassword' onChange={handleChange} value={form.confirmpassword ||' '}></input><br></br><br></br>
        <input type="submit"></input>
      </form>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Dangki />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

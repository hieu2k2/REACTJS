import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';
import reportWebVitals from './reportWebVitals';
function Thuchanh() {
  const MESSAGE_ERROR = {
    email: 'email err',
	  password: 'password err'
  }
  const REGEX = {
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	  password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  }
  const [form, setForm] = useState({})
  function handleChange(event) {
    let error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name]
    setForm({...form,[event.target.name]:{ value: event.target.value, error: error }
    })
  }
  function handleSubmit() {
    const isValid = form.email.value && form.password.value;
    const isError = form.email.error || form.password.error
    alert(isValid && isError ? 'login success' : 'please retype')
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div >
          <label>Email </label>
          <input name="email" value={(form.email && form.email.value) || ''} onChange={handleChange} />
          {form.email && form.email.error && <p className="error">Email error</p>}
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" value={(form.password && form.password.value) || ''} onChange={handleChange} />
          {form.password && form.password.error && <p className="error">Password error</p>}
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Thuchanh />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Formik } from 'formik';
import reportWebVitals from './reportWebVitals';
function Input() {
  const REGEX = {
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const [form, setForm] = useState({})

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleValidate() {
    const errors = {};
    if (!form.email) {
      errors.email = 'Required';
    } else if (!REGEX.email.test(form.email)) {
      errors.email = 'Invalid email address';
    }
    if (!form.title) {
      errors.title = 'Required';
    }
    return errors;
  }

 
  function handleSubmit() {
    alert('Add contact success!!!')
  }

  return (
    <div>
      <h1>Mail form</h1>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({values, errors, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <div className={`custom-input ${errors.email ? 'custom-input-error' : ''}`} >
                <label>To</label>
                <input type="email" name="email" value={form.email || ''} onChange={handleChange}/>
                <p className="error">{errors.email}</p>
              </div>
              <div className={`custom-input ${errors.title ? 'custom-input-error' : ''}`} >
                <label>Title</label>
                <input name="title" value={form.title || ''} onChange={handleChange}/>
                <p className="error">{errors.title}</p>
              </div>
              <div className={`custom-input ${errors.title ? 'custom-input-error' : ''}`}>
                <label>Message</label>
                <textarea name="message" value={form.message || ''} onChange={handleChange} />
                <p className="error">{errors.message}</p>
              </div>
              <div className="custom-input">
                <input type="file" id="fileUpload" onChange={handleChange} />    
              </div>
              <button type="submit"> Submit </button>
            </form>
          )}
        </Formik>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Input />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

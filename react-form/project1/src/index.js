import React from "react";
import { useState } from "react";
import { Formik } from "formik";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
function Dangki() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
  const [form, setForm] = useState({});
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function handleValidate() {
    const errors = {};
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    return errors;
  }
  function handleSubmit() {
    alert("login success");
  }
  return (
    <div>
      <h1>Contact form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              name="name"
              value={form.name || ""}
              onChange={handleChange}
            />
            <p>{errors.name}</p>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
            />
            <p>{errors.email}</p>
            <p>Phone</p>
            <input
              type="number"
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
            />
            <p>{errors.phone}</p>
            <p>Message</p>
            <textarea
              name="message"
              value={form.message || ""}
              onChange={handleChange}
            />
            <br></br>
            <button type="submit"> Submit </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Dangki />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

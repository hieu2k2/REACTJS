import { useState } from "react";
import { Formik } from "formik";
const ContectForm = ()=>{
  const [form,setform] = useState({
      name : '',
      phone : '',
      email:'',
      message : ''
  });
  return(
      <div>
          <Formik 
          initialValues={}
          validate={}
          onSubmit={}
          >{({values,errors})=>(
              <form>
                  <h3>name</h3>
                  <input name="name" onChange={handleChange}></input>
                  <h3>email</h3>
                  <input name="email" onChange={handleChange}></input>
                  <h3>phone</h3>
                  <input name="phone" onChange={handleChange}></input>
                  <h3>message</h3>
                  <textarea name="mess" onChange={handleChange}></textarea>
                  <br></br>
                  <button>Submit</button>
              </form>
          )}

          </Formik>
      </div>
  )
}
export default ContectForm ;
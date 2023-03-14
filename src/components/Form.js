import "./FormStyles.css";

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {
  const iv = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = React.useState(iv);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  const form = useRef();
  function hc(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs.sendForm('service_njxdskp', 'template_oqag98i', form.current, 'rARdcChvuTLftB3vj')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });};
      alert("Message Sent Successfully :D");
      window.location.reload(false);
    }
  


  function validate(values) {
    const errors = {};
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  }


  function oc(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    console.log(formValues);
  }


  // React.useEffect(()=>{
  //   console.log(formErrors);
  //   if(Object.keys(formErrors).length===0 && isSubmit){
  //     console.log(formValues);
  //   }
  // },[formErrors])


  return (
    <div className="form">
      <form action="/contact" ref={form}>
        <label>Your Name</label>
        <input type="text" onChange={oc} name="username" value={formValues.username} />
        <p className="error">{formErrors.username}</p>
        <label>Email</label>
        <input type="email" onChange={oc} name="email" value={formValues.email} />
        <p className="error">{formErrors.email}</p>
        <label>Message</label>
        <textarea rows="6" onChange={oc} placeholder="Type your message here..." name="message" value={formValues.message} />
        <p className="error">{formErrors.message}</p>
        <button className="btn" onClick={hc}>Submit</button>
      </form>
    </div>
  )
}

export default Form
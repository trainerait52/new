import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
function Signup() {

  const navigate=useNavigate();
  const initialValues = { username: "", email: "", password: "", phone: "", address:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if(Object.keys(formErrors).length === 0 && isSubmit ){
      navigate('/')

    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.phone) {
      errors.phone = "phone is required!";
    }
    return errors;
  };

  return (
    <body style={{backgroundColor:"bisque",width:"1500px"}} >
    <div className="banner1">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h2 className="login"><b>REGISTER FORM</b></h2>
        <div className="imgcontainer">
          <img src="data:image/png;base64,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" alt="avatar" className="avatar"></img>
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username:</label>
            <input className="input" 
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email:</label>
            <input className="input" 
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password:</label>
            <input className="input" 
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Phone:</label>
            <input className="input" 
              type="phone"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>
         
        
        
          <button className="logbtn">register here</button>
      
        </div>
      </form>
    </div>
    </body>
  );
}

export default Signup;

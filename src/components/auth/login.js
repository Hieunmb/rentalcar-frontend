import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import api from '../../services/api';
import url from '../../services/url';
import { useNavigate } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const [formErrors, setFormErrors] = useState({
  email: "",
  password: "",
});
const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setFormErrors({ ...formErrors, [name]: "" });
};
const validateForm = () => {
  let valid = true;
  const newErrors = {};

  if (!formData.email) {
      newErrors.email = "Please enter your email address.";
      valid = false;
  }

  if (!formData.password) {
      newErrors.password = "Please enter your password.";
      valid = false;
  } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
  } else if (formData.password.length > 50) {
      newErrors.password = "Password must be less than 50 characters.";
      valid = false;
  }

  setFormErrors(newErrors);
  return valid;
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loginResponse = await api.post(url.USER.LOGIN, formData,config);
        const token = loginResponse.data.token;
        localStorage.setItem("accessToken", token);
        navigate("/");
    } catch (error) {
      setFormErrors({
        email: "Invalid email or password.",
        password: "Invalid email or password.",
      });
    }
  }
};

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section id="section-hero" aria-label="section" className="jarallax">
        <img src="images/background/2.jpg" className="jarallax-img" alt="" />
        <div className="v-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 offset-lg-4">
                <div className="padding40 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                  <h4>Login</h4>
                    <div className="text-danger"></div>
                  <form
                    id="form_register"
                    method='POST'
                    className="form-border"
                    onSubmit={handleSubmit}
                  >
                    <div className="field-set">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, .025)',
                          border: 'solid 2px #eeeeee',
                          height: '45px',
                        }}
                      />
                      {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                    </div>
                    <div className="field-set">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                    <div id="submit">
                      <button
                        type="submit"
                        id="send_message"
                        value="Sign In"
                        className="btn-main btn-fullwidth rounded-3"
                      >Sign In
                        </button>
                    </div>
                  </form>
                  <div>
                    Don't have an account? <Link to="/register">Register Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

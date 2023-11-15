import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with email and password (e.g., submit to server)

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section id="section-hero" aria-label="section" class="jarallax">
        <img src="images/background/2.jpg" class="jarallax-img" alt="" />
        <div class="v-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 offset-lg-4">
                <div class="padding40 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                  <h4>Login</h4>
                  {errorMessage && (
                    <div className="text-danger">{errorMessage}</div>
                  )}
                  <form
                    id="form_register"
                    className="form-border"
                    onSubmit={handleSubmit}
                  >
                    <div class="field-set">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, .025)',
                          border: 'solid 2px #eeeeee',
                          height: '45px',
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="field-set">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i
                        class="fas fa-eye"
                        id="toggle-password"
                        onClick={() => {
                          /* Implement password visibility toggling */
                        }}
                      ></i>
                    </div>
                    <div id="submit">
                      <input
                        type="submit"
                        id="send_message"
                        value="Sign In"
                        className="btn-main btn-fullwidth rounded-3"
                      />
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

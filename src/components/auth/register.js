import React, { useState } from 'react';
import api from '../../services/api'; // Cần import api từ services/api của bạn
import url from '../../services/url'; // Cần import url từ services/url của bạn
import { Link, Navigate, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        status: 1,
    });
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerResponse = await api.post(url.USER.REGISTER, user);
            setRegisterSuccess(true);
            setTimeout(() => {
                window.alert('Register success!');
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" className="jarallax">
                {/* ... */}

                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 offset-lg-4">
                                <div className="padding40 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                                    <h4>Register</h4>
                                    <form id="form_register" method='POST' className="form-border" onSubmit={formSubmit}>
                                        <div className="field-set">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Full name"
                                                onChange={handleChange}
                                                value={user.name}
                                            />
                                        </div>
                                        <div className="field-set">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                value={user.email}
                                                style={{ backgroundColor: 'rgba(0, 0, 0, .025)', border: 'solid 2px #eeeeee', height: '45px' }}
                                            />
                                        </div>
                                        <div className="field-set">
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                                value={user.phone}
                                            />
                                        </div>
                                        <div className="field-set">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                value={user.password}
                                            />
                                        </div>
                                        <div className="field-set">
                                            <input
                                                type="password"
                                                name="passwordConfirm"
                                                id="password-confirm"
                                                className="form-control"
                                                placeholder="Retype Password"
                                                onChange={handleChange}
                                                value={user.passwordConfirm}
                                            />
                                        </div>
                                        <div id="submit">
                                            <button type="submit" id="send_message" value="Register" className="btn-main btn-fullwidth rounded-3" >Register now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;

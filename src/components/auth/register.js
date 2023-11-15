import React, { useContext, useState } from 'react';
import api from '../../services/api';
import url from '../../services/url';
import Context from "../../context/context";
import ACTION from "../../context/action";

function Register() {
    const [user, setUser] = useState({ name: "", email: "", password: "", phone: "" });
    const { state, dispatch } = useContext(Context);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const rs = await api.post(url.USER.REGISTER, { ...user, status: 1 });
            const u = rs.data;
            const token = u.token;
            dispatch({ type: ACTION.REGISTER, payload: { token: token, user: u } });
            setTimeout(() => {
                dispatch({ type: ACTION.HIDE_LOADING });
            }, 2000);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="no-bottom no-top" id="content">
            {/* ... */}
            <div className="col-lg-4 offset-lg-4">
                <div className="padding40 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                    <h4>Register</h4>
                    <form id="form_register" className="form-border" onSubmit={formSubmit}>
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
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, .025)',
                                    border: 'solid 2px #eeeeee',
                                    height: '45px',
                                }}
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
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                value={user.passwordConfirm}
                            />
                        </div>
                        <div id="submit">
                            <input
                                type="submit"
                                id="send_message"
                                value="Register"
                                className="btn-main btn-fullwidth rounded-3"
                            />
                        </div>
                    </form>
                    <br />
                </div>
            </div>
            {/* ... */}
        </div>
    );
}

export default Register;

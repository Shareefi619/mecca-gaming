import React, { useState } from 'react';

const LoginSection = () => {
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: '',
    });

    const [loginErrors, setLoginErrors] = useState({});

    const [registerFormData, setRegisterFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [registerErrors, setRegisterErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showEmailPass, setEmailPass] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleEmailPasswordVisibility = () => {
        setEmailPass(!showEmailPass);
    };


    const handleChange = (e, formType) => {
        const { name, value } = e.target;
        const formData = formType === 'login' ? loginFormData : registerFormData;
        const setFormData = formType === 'login' ? setLoginFormData : setRegisterFormData;
        const errors = formType === 'login' ? loginErrors : registerErrors;
        const setErrors = formType === 'login' ? setLoginErrors : setRegisterErrors;

        formData[name] = value;
        setFormData({ ...formData });

        // Clear the error when the input is corrected
        if (errors[name] && value.trim() !== '') {
            errors[name] = '';
            setErrors({ ...errors });
        }
    };

    const validateForm = (formType) => {
        const formData = formType === 'login' ? loginFormData : registerFormData;
        const errors = formType === 'login' ? loginErrors : registerErrors;
        const setErrors = formType === 'login' ? setLoginErrors : setRegisterErrors;

        const newErrors = {};

        if (formData.username.trim() === '') {
            newErrors.username = 'Username or email address is required';
        }

        if (formType === 'register' && formData.email.trim() === '') {
            newErrors.email = 'Email address is required';
        }

        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if (validateForm('login')) {
            // Form is valid, you can submit the login data or perform other actions here
            console.log('Login Form data submitted:', loginFormData);
            // Reset the form after submission if needed
            setLoginFormData({ username: '', password: '' });
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (validateForm('register')) {
            // Form is valid, you can submit the registration data or perform other actions here
            console.log('Register Form data submitted:', registerFormData);
            // Reset the form after submission if needed
            setRegisterFormData({ username: '', email: '', password: '' });
        }
    };

    return (
        <>
            <div className="login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mr-10">
                            <div className="login-form">
                                <div className="section-title">
                                    <h2>Login</h2>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className="form">
                                                <input
                                                    type="text"
                                                    className={`form-control ${loginErrors.username ? 'error' : ''}`}
                                                    name="username"
                                                    placeholder="Username or email address*"
                                                    required=""
                                                    value={loginFormData.username}
                                                    onChange={(e) => handleChange(e, 'login')}
                                                />
                                                {loginErrors.username && <span className="error-message">{loginErrors.username}</span>}
                                            </div>
                                            <div className="form">
                                                <div className="password-input">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        className={`form-control ${loginErrors.password ? 'error' : ''}`}
                                                        name="password"
                                                        placeholder="Password*"
                                                        required=""
                                                        value={loginFormData.password}
                                                        onChange={(e) => handleChange(e, 'login')}
                                                    />
                                                    <span className="show-password-input" onClick={togglePasswordVisibility} />
                                                    {loginErrors.password && <span className="error-message">{loginErrors.password}</span>}
                                                </div>
                                            </div>
                                            <div className="form">
                                                <button type="submit" className="btn">
                                                    Login <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                            <a className="forgot-password" href="#">
                                                Lost your password?
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 ml-10">
                            <div className="register-form">
                                <div className="section-title">
                                    <h2>Registration</h2>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="form">
                                                <input
                                                    type="text"
                                                    className={`form-control ${registerErrors.username ? 'error' : ''}`}
                                                    name="username"
                                                    placeholder="Username or email address*"
                                                    required=""
                                                    value={registerFormData.username}
                                                    onChange={(e) => handleChange(e, 'register')}
                                                />
                                                {registerErrors.username && <span className="error-message">{registerErrors.username}</span>}
                                            </div>
                                            <div className="form">
                                                <input
                                                    type="email"
                                                    className={`form-control ${registerErrors.email ? 'error' : ''}`}
                                                    name="email"
                                                    placeholder="Email address*"
                                                    required=""
                                                    value={registerFormData.email}
                                                    onChange={(e) => handleChange(e, 'register')}
                                                />
                                                {registerErrors.email && <span className="error-message">{registerErrors.email}</span>}
                                            </div>
                                            <div className="form">
                                                <div className="password-input">
                                                    <input
                                                        type={showEmailPass ? "text" : "password"}
                                                        className={`form-control ${registerErrors.password ? 'error' : ''}`}
                                                        name="password"
                                                        placeholder="Password*"
                                                        required=""
                                                        value={registerFormData.password}
                                                        onChange={(e) => handleChange(e, 'register')}
                                                    />
                                                    <span className="show-password-input" onClick={toggleEmailPasswordVisibility} />
                                                    {registerErrors.password && <span className="error-message">{registerErrors.password}</span>}
                                                </div>
                                            </div>
                                            <div className="form">
                                                <button type="submit" className="btn">
                                                    Register <i className="fal fa-long-arrow-right" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSection;

import React, { useState } from 'react';
const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid, you can submit the data or perform other actions here
            console.log('Form data submitted:', formData);

            window.scrollTo(0, 0);
        }
    };


    return (
        <>
            {/* contact-area start*/}
            <div className="contact-area">
                <div className="container">
                    <div className="address-box">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="address">
                                    <div className="icon">
                                        <i className="far fa-map-marker-alt" />
                                    </div>
                                    <div className="content">
                                        <h3 className="heading">HEADQUARTERS</h3>
                                        <p className="desc">
                                            236 Dotland Street, STKD NY Frankfurt Germany
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="address">
                                    <div className="icon">
                                        <i className="far fa-envelope-open" />
                                    </div>
                                    <div className="content">
                                        <h3 className="heading">MAIL US 24/7</h3>
                                        <p className="desc">
                                            236 Dotland Street, STKD NY Frankfurt Germany
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="address">
                                    <div className="icon">
                                        <i className="far fa-phone-volume" />
                                    </div>
                                    <div className="content">
                                        <h3 className="heading">SPONSORS ONLY</h3>
                                        <p className="desc">
                                            236 Dotland Street, STKD NY Frankfurt Germany
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-area-inner">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-md-12">
                                <div className="map">
                                    <p>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.0452483624595!2d90.424043!3d23.781403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3cc42b4e4b430164!2sReacThemes!5e0!3m2!1sen!2sbd!4v1656420500360!5m2!1sen!2sbd"
                                            height={500}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <form className="contact-form mb-10" onSubmit={handleSubmit}>
                                    <h3 className="post-title mb-35">GET IN TOUCH</h3>
                                    <div className="info-form">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="input-box name mb-20">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="input-box email mail-input mb-20">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Your E-mail"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="input-box message text-input mb-20">
                                                    <textarea
                                                        name="message"
                                                        cols={30}
                                                        rows={10}
                                                        placeholder="Write Your Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    {errors.message && <span className="error-message">{errors.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-12 mb-15">
                                                <button type="submit" className="form-btn form-btn4">
                                                    LEARN MORE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactUsSection;

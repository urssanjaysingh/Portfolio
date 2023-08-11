import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useCreateRequestMutation } from '../features/requests/requestsApiSlice';
import useTitle from '../hooks/useTitle'

const HireMePage = () => {
    useTitle('Hire Me')

    const navigate = useNavigate();

    const [createRequest, { isLoading: isCreating }] = useCreateRequestMutation();
    const [subject, setSubject] = useState('12'); // Default selected value
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [date, setHireDate] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(true); // Track email validity

    const emailValidationPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsEmailValid(e.target.checkValidity()); // Update email validity
    };

    const invalidInputStyle = {
        border: '1px solid red',
    };

    const invalidFeedbackStyle = {
        display: isEmailValid ? 'none' : 'block',
        color: 'red',
    };

    const successStyles = {
        backgroundColor: '#dff0d8',
        border: '1px solid #d0e9c6',
        color: '#3c763d',
        padding: '10px',
        marginBottom: '15px',
    };

    const errorStyles = {
        backgroundColor: '#f2dede',
        border: '1px solid #ebccd1',
        color: '#a94442',
        padding: '10px',
        marginBottom: '15px',
    };

    const buttonStyles = {
        display: "block",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "50px"
    };

    const handleCreateRequest = async (e) => {
        e.preventDefault();

        // Map role label based on the selected role value
        const roleMap = {
            '12': 'Intern',
            '13': 'Web Developer',
            '14': 'Software Developer',
            '15': 'Frontend Developer',
            '16': 'Backend Developer',
            '17': 'Full Stack Developer',
            '18': 'C++ Developer',
            '19': 'Java Developer',
            '20': 'Database Administrator',
        };

        const requestData = {
            subject: roleMap[subject], // Use the mapped role label
            email,
            message,
            date,
        };

        try {
            const response = await createRequest(requestData);

            if (response.error) {
                setSuccessMessage('');
                setErrorMessage('Form submission failed: ' + response.error.message);
            } else {
                setSuccessMessage('Form submitted successfully');
                setErrorMessage('');
            }
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Error submitting form: ' + error.message);
        }
    };

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <>
            <Header />
            <main className="page hire-me-page">
                <section className="portfolio-block hire-me">
                    <div className="container">
                        <div className="heading">
                            <h2>Hire Me</h2>
                        </div>
                        {successMessage && <p className="success-message" style={successStyles}>{successMessage}</p>}
                        {errorMessage && <p className="error-message" style={errorStyles}>{errorMessage}</p>}
                        {!successMessage && !errorMessage && (
                            <form onSubmit={handleCreateRequest}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="subject">Subject</label>
                                    <select className="form-select" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} autoComplete="off" required>
                                        <optgroup label="Role">
                                            <option value="12">Intern</option>
                                            <option value="13">Web Developer</option>
                                            <option value="14">Software Developer</option>
                                            <option value="15">Frontend Developer</option>
                                            <option value="16">Backend Developer</option>
                                            <option value="17">Full Stack Developer</option>
                                            <option value="18">C++ Developer</option>
                                            <option value="19">Java Developer</option>
                                            <option value="20">Database Administrator</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        autoComplete="off"
                                        pattern={emailValidationPattern}
                                        required
                                        style={isEmailValid ? {} : invalidInputStyle} // Apply invalid input style dynamically
                                    />
                                    <div className="invalid-feedback" style={invalidFeedbackStyle}>
                                        Please enter a valid email address.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label" htmlFor="hire-date">Date</label>
                                            <input className="form-control" id="hire-date" type="date" value={date} onChange={(e) => setHireDate(e.target.value)} required />
                                        </div>
                                        <div className="col-md-6 button">
                                            <button className="btn btn-primary d-block w-100" type="submit" disabled={isCreating}>
                                                {isCreating ? 'Creating...' : 'Hire Me'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                        <button style={buttonStyles} className="btn btn-primary" onClick={handleNavigateHome}>
                            Back to Home
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HireMePage;

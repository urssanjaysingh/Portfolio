import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')

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

    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash/requests');
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            if (userRef.current) {
                userRef.current.focus();
            }
        }
    }

    const handleNavigateHome = () => {
        navigate('/');
    };

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    return (
        <>
            <Header />
            <main className="page hire-me-page">
                <section className="portfolio-block hire-me">
                    <div className="container">
                        <div className="heading">
                            <h2>Login</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {errMsg && <p ref={errRef} style={errorStyles} aria-live="assertive">{errMsg}</p>}
                            <div className="mb-3">
                                <label className="form-label" htmlFor="username">Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    value={username}
                                    onChange={handleUserInput}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    onChange={handlePwdInput}
                                    value={password}
                                    required
                                />
                            </div>
                            <div className="row">
                                <div className="button">
                                    <button
                                        className="btn btn-primary d-block w-100"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Loading...' : 'Sign In'}
                                    </button>
                                </div>
                            </div>
                            <br />
                            <label htmlFor="persist" style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "8px",
                                    }}                          
                                    id="persist"
                                    onChange={handleToggle}
                                    checked={persist}
                                />
                                Trust This Device
                            </label>
                        </form>
                        <div className="text-center">
                            <button style={buttonStyles} className="btn btn-primary" onClick={handleNavigateHome}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Login

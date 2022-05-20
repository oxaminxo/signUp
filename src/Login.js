import React, { useEffect, useState } from 'react';
import validate from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myToast from './myToast';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const [touches, setTouches] = useState({
        email: false,
        password: false
    })

    useEffect(() => {
        setErrors(validate(data, 'login'))
    },[data])

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') 
            setData({...data, [event.target.name]: event.target.checked})
        else setData({...data, [event.target.name]: event.target.value})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (Object.keys(errors).length) {
            myToast('Data is invalid', 'error');
            setTouches({
                email: true,
                password: true,
            })
        } else myToast('Loging was successfully', 'success');
        
    }

    const focusHandler = event => {
        setTouches({...touches, [event.target.name]: true});
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h2>Login</h2>
                
                <div className={styles.formField}>
                    <label>Email: </label>
                    <input 
                        name='email' 
                        type='email' 
                        value={data.email} 
                        onChange={changeHandler}
                        onFocus={focusHandler} 
                    />
                    {errors.email && touches.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password: </label>
                    <input 
                        name='password' 
                        type='password' 
                        value={data.password} 
                        onChange={changeHandler}
                        onFocus={focusHandler} 
                    />
                    {errors.password && touches.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.buttonField}>
                    <Link to='/signup'>Sign up</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
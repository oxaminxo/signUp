import React, { useEffect, useState } from 'react';
import validate from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myToast from './myToast';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        isAccepted: false
    });

    const [errors, setErrors] = useState({});

    const [touches, setTouches] = useState({
        name: false,
        email: false,
        password: false,
        confirmPass: false,
        isAccepted: false
    })

    useEffect(() => {
        setErrors(validate(data, 'signup'))
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
                name: true,
                email: true,
                password: true,
                confirmPass: true,
                isAccepted: true
            })
        } else myToast('Signing up was successfully', 'success');
        
    }

    const focusHandler = event => {
        setTouches({...touches, [event.target.name]: true});
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h2>Signup</h2>
                <div className={styles.formField}>
                    <label>Name: </label>
                    <input 
                        name='name' 
                        type='text' 
                        value={data.name} 
                        onChange={changeHandler}
                        onFocus={focusHandler} 
                    />
                    {errors.name && touches.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm password: </label>
                    <input 
                        name='confirmPass' 
                        type='password' 
                        value={data.confirmPass} 
                        onChange={changeHandler}
                        onFocus={focusHandler} 
                    />
                    {errors.confirmPass && touches.confirmPass && <span>{errors.confirmPass}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkField}>
                        <label>I agree with terms of privacy policy </label>
                        <input 
                            name='isAccepted' 
                            type='checkbox' 
                            value={data.isAccepted} 
                            onChange={changeHandler}
                            onClick={focusHandler}
                        />
                    </div>
                    {errors.isAccepted && touches.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.buttonField}>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>Sign up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
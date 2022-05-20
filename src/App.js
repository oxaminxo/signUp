import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Navigate to='/signup' />}></Route>
            </Routes>
        </div>
        
    );
};

export default App;
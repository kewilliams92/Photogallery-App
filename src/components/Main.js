import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sample } from './';

const Main = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Sample />} />
            </Routes>
        </div>
    )
}

export default Main;
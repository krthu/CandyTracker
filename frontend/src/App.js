import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CandyList from './CandyList';
import CandyDetail from './CandyDetail';

const App = () => {
    return (
        <div className="App">
            <h1>Welcome to Candy Tracker</h1>
            <Router>
                <Routes>
                    <Route path="/" exact Component={CandyList} />
                    <Route path="/candy/:id" Component={CandyDetail} />
                </Routes>
            </Router>

      
    
        </div>
    );
};

export default App;

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1>Daily Dose of Misha!</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href="/addNew" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Misha</a>
            </div>
        </nav>
    );
};

export default Header;

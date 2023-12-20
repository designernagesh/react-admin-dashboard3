import React, { useEffect, useState } from 'react';

function Navbar() {
    const savedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(savedTheme ? JSON.parse(savedTheme) : 'light');
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    };


    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        
        if (savedTheme !== null) {
            setTheme(JSON.parse(savedTheme));
        } else {
            body.classList.add('dark');
        }

        if (theme) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }, [savedTheme, theme]);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);

        const sidebar = document.getElementById('sidebar');

        if (!showSidebar) {
            sidebar.classList.add('hide');
        } else {
            sidebar.classList.remove('hide');
        }
    };

    return (
        <nav>
            <i className='bx bx-menu toggleSidebar' onClick={toggleSidebar}></i>
            <a href="#" className="nav-link">
                Categories
            </a>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn">
                        <i className='bx bx-search'></i>
                    </button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden checked={theme} onChange={toggleTheme} />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <a href="#" className="notification">
                <i className='bx bxs-bell'></i>
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src="https://source.unsplash.com/150x150/?brown" alt="Profile" />
            </a>
        </nav>
    );
}

export default Navbar;

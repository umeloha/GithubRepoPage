import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return <>
            <header>
                <h1>Github</h1>
                <nav>
                    <NavLink to="/">Search Repo</NavLink>
                    <NavLink to="/Repo">Repo</NavLink>
            
                </nav>
            </header>
            <Outlet />
            <footer>Github</footer>
           </>
}

export default Layout;
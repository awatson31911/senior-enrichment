import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Campus Connect</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to='/campuses'>Campuses</Link>
                        </li>
                        <li>
                            <Link to='/students'>Students</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default NavBar;
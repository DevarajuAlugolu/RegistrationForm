import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li>
					<Link to="/login" className="navbar-link">
						Login
					</Link>
				</li>
				<li>
					<Link to="/register" className="navbar-link">
						Sign Up
					</Link>
				</li>
				<li>
					<Link to="/" className="navbar-link">
						Job application
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

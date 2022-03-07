import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
	const [ menuOpen, setMenuOpen ] = useState(false);
	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<NavLink to="/" className="navbar-logo">
					TRVL
				</NavLink>
			</div>
			<div className="navbar-right">
				<div onClick={handleMenuClick} className="menu-icon">
					{menuOpen ? <CloseIcon /> : <MenuIcon />}
				</div>
				<ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<NavLink activeStyle={{ color: 'blue' }} className="nav-links">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink activeStyle={{ color: 'blue' }} className="nav-links">
							Services
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink activeStyle={{ color: 'blue' }} className="nav-links">
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink activeStyle={{ color: 'blue' }} className="nav-links">
							Sign Up
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

import React from 'react';
import './logout.css';
import { useNavigate } from 'react-router-dom';

export const Logout = ({ name, headingTitle, type, state, setState }) => {
	const navigate = useNavigate();

	const handleAddCandidate = () => {
		setState(true);
	};

	const handleClick = () => {
		navigate('/login');
	};
	if (type === 'recruiter') {
		return (
			<div className="heading">
				<h3>Welcome! {name}</h3>
				<h3>{headingTitle}</h3>
				<button onClick={handleAddCandidate}>Add candidate</button>
				<button onClick={handleClick}>Log out</button>
			</div>
		);
	} else {
		return (
			<div className="heading">
				<h3>Welcome! {name}</h3>
				<h3>{headingTitle}</h3>
				<button onClick={handleClick}>Log out</button>
			</div>
		);
	}
};

import React from 'react';
import '../src/navbar.css';

export const Success = ({ message }) => {
	return (
		<div className="message success">
			<p>{message}</p>
		</div>
	);
};

export const Error = ({ message }) => {
	return (
		<div className="message error">
			<p>{message}</p>
		</div>
	);
};

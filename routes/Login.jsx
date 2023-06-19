import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

import { Success, Error } from '../components/Message';
import { removeMessage } from '../src/helper';

// import {
// 	recruiterCredentials,
// 	clientCredentials,
// 	managerCredientals,
// } from '../src/data';

const LoginForm = () => {
	const [userType, setUserType] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const clientCredentials = JSON.parse(
		localStorage.getItem('clientCredentials')
	);
	const recruiterCredentials = JSON.parse(
		localStorage.getItem('recruiterCredentials')
	);
	const managerCredientals = JSON.parse(
		localStorage.getItem('managerCredientals')
	);

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'log-in') {
			setUserType(value);
		}
		if (id === 'login-username') {
			setUsername(value);
		}
		if (id === 'login-password') {
			setPassword(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userType === '') {
			//  error message
			setErrorMessage('Please select login type');
			// removing error after 2 seconds
			removeMessage(setErrorMessage, '');
			return;
		}

		const loginCheck = (arr, path, params) => {
			const checkUser = arr.find((item) => {
				return item.username === username;
			});
			// console.log(checkUser);
			if (checkUser) {
				if (checkUser.password === password) {
					// succes message
					setSuccessMessage('Login done succesfully');
					// removing success message after 2 seconds
					removeMessage(setSuccessMessage, '');

					// redirect the path
					navigate({
						pathname: path,
						search: params,
					});
				} else {
					//  error message
					setErrorMessage('Invalid Password');
					// removing error after 2 seconds
					removeMessage(setErrorMessage, '');
					return;
				}
			} else {
				// error message
				setErrorMessage('Invalid Username');
				// removing error after 2 seconds
				removeMessage(setErrorMessage, '');
				return;
			}
		};

		// different logins
		if (userType === 'recruiter') {
			loginCheck(
				recruiterCredentials,
				'/recruiter',
				`?username=${username}`
			);
		} else if (userType === 'client') {
			loginCheck(clientCredentials, '/client', `?username=${username}`);
		} else if (userType === 'manager') {
			loginCheck(managerCredientals, '/manager', `?username=${username}`);
		}

		// Reset the form after submission
		setUserType('');
		setUsername('');
		setPassword('');
	};

	return (
		<div className="form-login">
			{successMessage && <Success message={successMessage} />}
			{errorMessage && <Error message={errorMessage} />}
			<p className="lead">Login</p>
			<form onSubmit={handleSubmit}>
				<select
					id="log-in"
					value={userType}
					onChange={(e) => handleInputChange(e)}
				>
					<option disabled value="">
						--select--
					</option>
					<option value="manager">Manager</option>
					<option value="client">Client</option>
					<option value="recruiter">Recruiter</option>
				</select>
				<input
					type="text"
					placeholder="username"
					id="login-username"
					value={username}
					onChange={(e) => handleInputChange(e)}
				/>
				<input
					type="password"
					placeholder="password"
					id="login-password"
					value={password}
					onChange={(e) => handleInputChange(e)}
				/>
				<input type="submit" value="login" />
			</form>
		</div>
	);
};

export default LoginForm;

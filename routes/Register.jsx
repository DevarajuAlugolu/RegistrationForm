import React, { useState } from 'react';
import './register.css';

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

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'sign-up') {
			setUserType(value);
		}
		if (id === 'signup-username') {
			setUsername(value);
		}
		if (id === 'signup-password') {
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

		if (password.length < 8) {
			// throw error
			setErrorMessage('password contain atleast 8 characters');
			// removing error message sfter 2 seconds
			removeMessage(setErrorMessage, '');
			return;
		}

		const createAccount = (arr, arrname) => {
			const checkUser = arr.find((item) => {
				return item.username === username;
			});

			// checking if user already existed or not
			if (checkUser) {
				// error message
				setErrorMessage('user already existed');
				// removing error after 2 seconds
				removeMessage(setErrorMessage, '');
			} else {
				// succes message
				setSuccessMessage(
					'account created successfully, now you can login'
				);
				// removing success message after 2 seconds
				removeMessage(setSuccessMessage, '');
				// storing data in localstorage
				arr.push({ username, password });
				console.log(arr);
				console.log(JSON.stringify(arr));

				localStorage.setItem(arrname, JSON.stringify(arr));
			}
		};

		// creating account
		if (userType === 'recruiter') {
			createAccount(recruiterCredentials, 'recruiterCredentials');
		} else if (userType === 'client') {
			createAccount(clientCredentials, 'clientCredentials');
		} else if (userType === 'manager') {
			createAccount(managerCredientals, 'managerCredientals');
		}

		// Reset the form after submission
		setUserType('');
		setUsername('');
		setPassword('');
	};

	return (
		<div className="form-signup">
			{successMessage && <Success message={successMessage} />}
			{errorMessage && <Error message={errorMessage} />}
			<p className="lead">Sign up</p>
			<form onSubmit={handleSubmit}>
				<select
					id="sign-up"
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
					id="signup-username"
					value={username}
					onChange={(e) => handleInputChange(e)}
				/>
				<input
					type="password"
					placeholder="password"
					id="signup-password"
					value={password}
					onChange={(e) => handleInputChange(e)}
				/>
				<input type="submit" value="sign up" />
			</form>
		</div>
	);
};

export default LoginForm;

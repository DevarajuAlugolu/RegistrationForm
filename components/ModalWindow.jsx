import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { FormInputDefaultDate } from './FormInputDefaultDate';
// import { jobApplicants } from '../src/data';
import './modalwindow.css';

export const ModalWindow = ({ modelState, setModelState, recruiterName }) => {
	const defaultValue = new Date().toISOString().split('T')[0];
	const [candidateName, setCandidateName] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [email, setEmail] = useState('');
	const [clientName, setClientName] = useState('');

	const jobApplicants = JSON.parse(localStorage.getItem('jobApplicants'));

	const closeModal = () => {
		setModelState(false);
	};

	const handleInputChange = (event) => {
		const { id, value } = event.target;

		if (id === 'candidate-name') {
			setCandidateName(value);
		}
		if (id === 'contact-no') {
			setContactNo(value);
		}
		if (id === 'email') {
			setEmail(value);
		}
		if (id === 'client-name') {
			setClientName(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			id: Math.random().toString(16).slice(2) + new Date().getTime(),
			date: defaultValue,
			recruiterName: recruiterName,
			candidateName,
			contactNo,
			email,
			clientName,
		};
		console.log(data);

		// storing the data
		jobApplicants.push(data);
		localStorage.setItem('jobApplicants', JSON.stringify(jobApplicants));

		// clear form fields
		setCandidateName('');
		setContactNo('');
		setEmail('');
		setClientName('');

		// close modal after submitting
		setModelState(false);

		// alert message
		alert('candadiate added successfully');

		// reload the page
		window.location.reload();
	};

	return (
		<div>
			{modelState && <div className="overlay" onClick={closeModal}></div>}

			{modelState && (
				<div className="modal">
					<form onSubmit={handleSubmit}>
						<button className="close-modal" onClick={closeModal}>
							&times;
						</button>
						<FormInputDefaultDate defaultValue={defaultValue} />

						<FormInput
							id="candidate-name"
							type="text"
							label="Name of the Candidate"
							value={candidateName}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="contact-no"
							type="text"
							label="Contact Number"
							value={contactNo}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="email"
							type="email"
							label="Email"
							value={email}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="client-name"
							type="text"
							label="Name of the Client"
							value={clientName}
							handleInputChange={handleInputChange}
						/>
						<input type="submit" value="submit" />
					</form>
				</div>
			)}
		</div>
	);
};

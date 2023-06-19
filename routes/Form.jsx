import React, { useState } from 'react';
import './form.css';
import { FormSelect } from '../components/FormSelect';
import { FormInput } from '../components/FormInput';
import { FormInputDefaultDate } from '../components/FormInputDefaultDate';
import { Success, Error } from '../components/Message';
import { removeMessage } from '../src/helper';

// import { jobApplicants } from '../src/data';

export const Form = () => {
	const defaultValue = new Date().toISOString().split('T')[0];
	const [recruiterName, setRecruiterName] = useState('');
	const [clientName, setClientName] = useState('');
	const [candidateName, setCandidateName] = useState('');
	const [currentCompany, setCurrentCompany] = useState('');
	const [currentPosition, setCurrentPosition] = useState('');
	const [currentJobLocation, setCurrentJobLocation] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [email, setEmail] = useState('');
	const [qualification, setQualification] = useState('');
	const [experience, setExperience] = useState('');
	const [relevantExperience, setRelevantExperience] = useState('');
	const [currentCtc, setCurrentCtc] = useState('');
	const [expectedCtc, setExpectedCtc] = useState('');
	const [noticePeriod, setNoticePeriod] = useState('');
	const [noticePeriodDate, setNoticePeriodDate] = useState('');
	const [holdingOffer, setHoldingOffer] = useState('');
	const [holdingOfferCtc, setHoldingOfferCtc] = useState('');
	const [reason, setReason] = useState('');
	const [remark, setRemark] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	// const [errorMessage, setErrorMessage] = useState('');
	const [welcomeMessage, setWelcomeMessage] = useState(true);

	const dbApplicants = JSON.parse(localStorage.getItem('jobApplicants'));

	// Removing Welcome message after 5 seconds
	removeMessage(setWelcomeMessage, false);

	// handling input changes
	const handleInputChange = (event) => {
		const { id, value } = event.target;

		if (id === 'recruiter-name') {
			setRecruiterName(value);
		}
		if (id === 'client-name') {
			setClientName(value);
		}
		if (id === 'candidate-name') {
			setCandidateName(value);
		}
		if (id === 'current-company') {
			setCurrentCompany(value);
		}
		if (id === 'current-position') {
			setCurrentPosition(value);
		}
		if (id === 'current-job-location') {
			setCurrentJobLocation(value);
		}
		if (id === 'contact-no') {
			setContactNo(value);
		}
		if (id === 'email') {
			setEmail(value);
		}
		if (id === 'qualification') {
			setQualification(value);
		}
		if (id === 'experience') {
			setExperience(value);
		}
		if (id === 'relevant-experience') {
			setRelevantExperience(value);
		}
		if (id === 'current-ctc') {
			setCurrentCtc(value);
		}
		if (id === 'expected-ctc') {
			setExpectedCtc(value);
		}
		if (id === 'notice-period') {
			setNoticePeriod(value);
		}
		if (id === 'notice-period-date') {
			setNoticePeriodDate(value);
		}
		if (id === 'holding-offer') {
			setHoldingOffer(value);
		}
		if (id === 'holding-offer-ctc') {
			setHoldingOfferCtc(value);
		}
		if (id === 'reason-for-job-change') {
			setReason(value);
		}
		if (id === 'remark') {
			setRemark(value);
		}
	};

	// Handling Form submission
	const handleSubmit = (event) => {
		event.preventDefault();

		// stroring the data
		const data = {
			id: Math.random().toString(16).slice(2) + new Date().getTime(),
			date: defaultValue,
			recruiterName,
			clientName,
			candidateName,
			currentCompany,
			currentPosition,
			currentJobLocation,
			contactNo,
			email,
			qualification,
			experience,
			relevantExperience,
			currentCtc,
			expectedCtc,
			noticePeriod,
			noticePeriodDate,
			holdingOffer,
			holdingOfferCtc,
			reason,
			remark,
		};

		// Storing data in local storage
		dbApplicants.push(data);
		localStorage.setItem('jobApplicants', JSON.stringify(dbApplicants));

		// success Message
		setSuccessMessage('form Submitted');
		console.log('form submitted');

		// removing success message
		removeMessage(setSuccessMessage, '');

		//Reset the form after submission
		setRecruiterName('');
		setClientName('');
		setCandidateName('');
		setCurrentCompany('');
		setCurrentPosition('');
		setCurrentJobLocation('');
		setContactNo('');
		setEmail('');
		setQualification('');
		setExperience('');
		setRelevantExperience('');
		setCurrentCtc('');
		setExpectedCtc('');
		setNoticePeriod('');
		setNoticePeriodDate('');
		setHoldingOffer('');
		setHoldingOfferCtc('');
		setReason('');
		setRemark('');
	};

	return (
		<div className="container">
			{/* displaying welcome message */}
			{welcomeMessage && (
				<Success message="No need to login/signup to apply for a job" />
			)}
			{/* displaying success Message */}
			{successMessage && (
				<Success message="Your application is successfully submitted" />
			)}
			<header>Job application</header>
			<form className="user-form" onSubmit={(e) => handleSubmit(e)}>
				<div className="form first">
					<div className="fields">
						<FormInputDefaultDate defaultValue={defaultValue} />

						<FormInput
							id="recruiter-name"
							type="text"
							label="Name of the Recruiter"
							value={recruiterName}
							handleInputChange={handleInputChange}
						/>

						<FormInput
							id="client-name"
							type="text"
							label="Name of the Client"
							value={clientName}
							handleInputChange={handleInputChange}
						/>

						<FormInput
							id="candidate-name"
							type="text"
							label="Name of the Candidate"
							value={candidateName}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="current-company"
							type="text"
							label="Current Company"
							value={currentCompany}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="current-position"
							type="text"
							label="Current Position"
							value={currentPosition}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="current-job-location"
							type="text"
							label="Current Job Location"
							value={currentJobLocation}
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
							id="qualification"
							type="text"
							label="Qualification"
							value={qualification}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="experience"
							type="number"
							label="Experience"
							placeholder="experience in yrs"
							value={experience}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="relevant-experience"
							type="number"
							label="Relevant Experience"
							placeholder="Relevant experience in yrs"
							value={relevantExperience}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="current-ctc"
							type="number"
							label="Current CTC"
							placeholder="Enter CTC in LPA"
							value={currentCtc}
							handleInputChange={handleInputChange}
							required
						/>

						<FormInput
							id="expected-ctc"
							type="number"
							label="Expected CTC"
							placeholder="Enter CTC in LPA"
							value={expectedCtc}
							handleInputChange={handleInputChange}
							required
						/>

						<FormSelect
							id="notice-period"
							type="select"
							label="Notice Period"
							value={noticePeriod}
							handleInputChange={handleInputChange}
						/>

						{/* If notice period is yes last working date */}
						{noticePeriod == 'Yes' && (
							<FormInput
								id="notice-period-date"
								type="date"
								label="Notice Period Last Working date"
								placeholder="notice period last working date"
								value={noticePeriodDate}
								handleInputChange={handleInputChange}
								required
							/>
						)}

						<FormSelect
							id="holding-offer"
							type="select"
							label="Holding Offer"
							value={holdingOffer}
							handleInputChange={handleInputChange}
						/>

						{/* if holding offer is yes, ctc of holding offer */}
						{holdingOffer == 'Yes' && (
							<FormInput
								id="holding-offer-ctc"
								type="number"
								label="Holding Offer CTC"
								placeholder="Enter CTC in LPA"
								value={holdingOfferCtc}
								handleInputChange={handleInputChange}
								required
							/>
						)}

						<FormInput
							id="reason-for-job-change"
							type="text"
							label="Reason for Job Change"
							value={reason}
							handleInputChange={handleInputChange}
						/>
						<FormInput
							id="remark"
							type="textarea"
							label="Any Specific Remarks"
							value={remark}
							handleInputChange={handleInputChange}
						/>
					</div>

					<div className="buttons">
						<button type="submit" className="sumbit">
							<span className="btnText">Submit</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

// export default Form;

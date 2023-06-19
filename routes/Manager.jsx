import React, { useState } from 'react';
import './manager.css';
import { Success, Error } from '../components/Message';
import { removeMessage } from '../src/helper';
// import { jobApplicants } from '../src/data';
import { useSearchParams } from 'react-router-dom';
import { Logout } from '../components/Logout';

const Manager = () => {
	const jobApplicants = JSON.parse(localStorage.getItem('jobApplicants'));
	const [data, setData] = useState(jobApplicants);
	const [usernameParam, setUsernameParam] = useSearchParams();

	console.log(usernameParam.get('username'));

	return (
		<>
			<Logout
				name={usernameParam.get('username')}
				headingTitle="Job Applicants data"
			/>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>Date</th>
							<th>Recruiter Name</th>
							<th>Client Name</th>
							<th>Candidate Name</th>
							<th>Current Company</th>
							<th>Current Position</th>
							<th>Current Job Location</th>
							<th>Contact No</th>
							<th>Email</th>
							<th>Qualification</th>
							<th>Experience</th>
							<th>Relevant Experience</th>
							<th>Current CTC</th>
							<th>Expected CTC</th>
							<th>Notice Period</th>
							<th>Notice Period Date</th>
							<th>Holding Offer</th>
							<th>Holding Offer CTC</th>
							<th>Reason</th>
							<th>Remark</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item.id}>
								<td>{item.date}</td>
								<td>{item.recruiterName}</td>
								<td>{item.clientName}</td>
								<td>{item.candidateName}</td>
								<td>{item.currentCompany}</td>
								<td>{item.currentPosition}</td>
								<td>{item.currentJobLocation}</td>
								<td>{item.contactNo}</td>
								<td>{item.email}</td>
								<td>{item.qualification}</td>
								<td>{item.experience}</td>
								<td>{item.relevantExperience}</td>
								<td>{item.currentCtc}</td>
								<td>{item.expectedCtc}</td>
								<td>{item.noticePeriod}</td>
								<td>{item.noticePeriodDate}</td>
								<td>{item.holdingOffer}</td>
								<td>{item.holdingOfferCtc}</td>
								<td>{item.reason}</td>
								<td>{item.remark}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Manager;

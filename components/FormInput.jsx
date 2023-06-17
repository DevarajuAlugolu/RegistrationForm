import React from 'react';

export const FormInput = ({ id, type, label, value, handleInputChange }) => {
	if (
		id === 'current-ctc' ||
		id === 'expected-ctc' ||
		id === 'holding- offer-ctc'
	) {
		return (
			<div className="input-field">
				<label htmlFor={id} className="form-label">
					{label}
					<span className="required-field">*</span>
				</label>
				<input
					type={type}
					className="form-control"
					id={id}
					value={value}
					onChange={(e) => handleInputChange(e)}
					step="0.01"
					required
				/>
			</div>
		);
	} else if (id === 'reason-for-job-change' || id === 'remark') {
		return (
			<div className="input-field">
				<label htmlFor={id} className="form-label">
					{label}
				</label>
				<input
					type={type}
					className="form-control"
					id={id}
					value={value}
					onChange={(e) => handleInputChange(e)}
				/>
			</div>
		);
	} else {
		return (
			<div className="input-field">
				<label htmlFor={id} className="form-label">
					{label}
					<span className="required-field">*</span>
				</label>
				<input
					type={type}
					className="form-control"
					id={id}
					value={value}
					onChange={(e) => handleInputChange(e)}
					required
				/>
			</div>
		);
	}
};

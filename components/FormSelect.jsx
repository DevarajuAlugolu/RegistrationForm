import React from 'react';

export const FormSelect = ({ id, label, value, handleInputChange }) => {
	return (
		<div className="input-field">
			<label htmlFor={id} className="form-label">
				{label}
				<span className="required-field">*</span>
			</label>
			<select
				id={id}
				className="form-control"
				value={value}
				onChange={(e) => handleInputChange(e)}
				required
			>
				<option disabled value="">
					-- Select an option --
				</option>
				<option value="Yes">Yes</option>
				<option value="No">No</option>
			</select>
		</div>
	);
};

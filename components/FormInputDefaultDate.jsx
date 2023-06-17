import React from 'react';

export const FormInputDefaultDate = ({ defaultValue }) => {
	return (
		<div className="input-field">
			<label htmlFor="date" className="form-label">
				Date<span className="required-field">*</span>
			</label>
			<input
				type="date"
				className="form-control"
				id="date"
				defaultValue={defaultValue}
				required
			/>
		</div>
	);
};
